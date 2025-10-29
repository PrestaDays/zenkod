import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp'];
const QUALITY = 70;
const MAX_WIDTH = 800;
const PROFILE_SIZE = 64;

async function getAllImageFiles(dir, fileList = []) {
    const files = await readdir(dir);

    for (const file of files) {
        const filePath = join(dir, file);
        const fileStat = await stat(filePath);

        if (fileStat.isDirectory()) {
            await getAllImageFiles(filePath, fileList);
        } else {
            const ext = extname(file).toLowerCase();
            if (IMAGE_EXTENSIONS.includes(ext)) {
                fileList.push(filePath);
            }
        }
    }

    return fileList;
}

async function compressImage(filePath) {
    const ext = extname(filePath).toLowerCase();
    let image = sharp(filePath);
    const metadata = await image.metadata();

    console.log(`Compressing: ${filePath}`);
    console.log(`  Original: ${metadata.width}x${metadata.height}, ${metadata.size ? (metadata.size / 1024).toFixed(2) : 'unknown'} KB`);

    try {
        const isProfile = filePath.includes('profiles');

        if (isProfile && metadata.width > PROFILE_SIZE) {
            image = image.resize(PROFILE_SIZE, PROFILE_SIZE, { fit: 'cover' });
        } else if (!isProfile && metadata.width > MAX_WIDTH) {
            image = image.resize(MAX_WIDTH, null, { withoutEnlargement: true });
        }

        if (ext === '.jpg' || ext === '.jpeg') {
            await image
                .jpeg({ quality: QUALITY, progressive: true, mozjpeg: true })
                .toFile(filePath + '.tmp');
        } else if (ext === '.png') {
            await image
                .png({ quality: QUALITY, compressionLevel: 9, effort: 10 })
                .toFile(filePath + '.tmp');
        } else if (ext === '.webp') {
            await image
                .webp({ quality: QUALITY, effort: 6 })
                .toFile(filePath + '.tmp');
        }

        const { rename, unlink } = await import('fs/promises');
        await unlink(filePath);
        await rename(filePath + '.tmp', filePath);

        const newMetadata = await sharp(filePath).metadata();
        const newSize = newMetadata.size ? (newMetadata.size / 1024).toFixed(2) : 'unknown';
        const oldSize = metadata.size ? (metadata.size / 1024).toFixed(2) : 'unknown';
        const reduction = metadata.size && newMetadata.size
            ? ((1 - newMetadata.size / metadata.size) * 100).toFixed(2)
            : 'unknown';

        console.log(`  Compressed size: ${newSize} KB`);
        console.log(`  Reduction: ${reduction}%\n`);
    } catch (error) {
        console.error(`Error compressing ${filePath}:`, error.message);
    }
}

async function main() {
    const publicDir = join(__dirname, '..', 'public');

    console.log('🖼️  Starting image compression...\n');
    console.log(`Scanning directory: ${publicDir}\n`);

    const imageFiles = await getAllImageFiles(publicDir);

    console.log(`Found ${imageFiles.length} images to compress\n`);

    for (const file of imageFiles) {
        await compressImage(file);
    }

    console.log('✅ Image compression complete!');
}

main().catch(console.error);

import compression from 'compression';
import { handler as ssrHandler } from './dist/server/entry.mjs';
import express from 'express';

const app = express();

app.use(compression({
    level: 6,
    threshold: 1024,
    filter: (req, res) => {
        if (req.headers['x-no-compression']) {
            return false;
        }
        return compression.filter(req, res);
    }
}));

app.use(express.static('dist/client', {
    maxAge: '1y',
    immutable: true
}));

app.use(ssrHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});

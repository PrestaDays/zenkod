import '../styles/Header.css';

const Header = () => {
    return (
        <header>
            <div class="nav">
                <img src="src/assets/logo.png" alt="Logo" class="logo" />
                <div class="container-content-nav">
                    <span class="nav-item">Services</span>
                    <span class="nav-item">À propos</span>
                    <div class="contact-button">
                        <span class="txt-btn-contact">Contact</span>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
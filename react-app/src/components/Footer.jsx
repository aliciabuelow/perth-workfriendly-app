import Logo from '../assets/logo.png';
import '../styles/Footer.css';

export default function Footer() {
    return (
        <div className="Footer">
            
            <div>
                <a href="https://aliciabuelow.dev" className="logo-link" target="_blank">
                    <img src={Logo} alt="AB Logo" className="logo" width="60rem" />
                </a>
                <footer>© 2026 Alicia Buelow</footer>
            </div>
        </div>
    );
}
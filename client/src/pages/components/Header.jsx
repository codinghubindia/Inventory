import { Link } from 'react-router-dom';
import '../../styles/header.css';


const Header = () => {

    const toggleMenu = () => {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('active');
      };

  return (
    <div>
      <header className="header">
        <div className="logo">
            <Link to="/">InventoryPro</Link>
        </div>
        <nav className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/features">Features</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/resources">Resources</Link> {/* New Nav Link */}
            <Link to="/blog">Blog</Link> {/* New Nav Link */}
        </nav>
        <div className="auth-links">
            <Link to="/login" className="btn login-btn">Login</Link>
            <Link to="/register" className="btn register-btn">Register</Link>
        </div>
        <button className="menu-toggle" onClick={() => toggleMenu()}>☰</button> {/* Mobile Menu Toggle Button */}
        </header>
    </div>
  )
}

export default Header

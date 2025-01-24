import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Footer.css';
// npm install @fortawesome/fontawesome-free
import '@fortawesome/fontawesome-free/css/all.min.css'; // for icons


export function Footer() {
    return (
        // <footer className="footer">
        //     <nav className="footer-nav">
        //         <Link to="/home" className="nav-item">Home</Link>
        //         <Link to="/wishlist" className="nav-item">Wishlist</Link>
        //         <Link to="/explore" className="nav-item">Explore</Link>
        //         <Link to="/profile" className="nav-item">Profile</Link>
        //     </nav>
        // </footer>
        <footer className="footer">
            <nav className="footer-nav">
                <Link to="/home" className="nav-item">
                    <i className="fas fa-home"></i>
                </Link>
                <Link to="/wishlist" className="nav-item">
                    <i class="fa-regular fa-heart"></i>
                </Link>
                <Link to="/explore" className="nav-item">
                    <i class="fa-solid fa-earth-americas"></i>
                </Link>
                <Link to="/profile" className="nav-item">
                    <i class="fa-regular fa-user"></i>
                </Link>
            </nav>
        </footer>
    );
}

// export default Footer;
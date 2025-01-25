// import React from 'react';
// export function Wishlist(){
//     return (
//         <p>Testing Wishlist</p>
//     )
// }

import React from 'react';
import '../css/Wishlist.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';

export function Wishlist() {
    return (
        <div className="wishlist-container">
            <h2 className="wishlist-header">My Wishlist</h2>
            <div className="wishlist-grid">
                <Link to="/explore" className="wishlist-card">
                    <div className="wishlist-card-icon">
                        <i className="fa-solid fa-heart wishlist-icon"></i>
                    </div>
                    <div className="wishlist-card-tag purchased">Purchased</div>
                </Link>
                <Link to="/explore" className="wishlist-card">
                    <div className="wishlist-card-icon">
                        <i className="fa-solid fa-heart wishlist-icon"></i>
                    </div>
                </Link>
                <Link to="/explore" className="wishlist-card">
                    <div className="wishlist-card-icon">
                        <i className="fa-solid fa-heart wishlist-icon"></i>
                    </div>
                </Link>
                <Link to="/explore" className="wishlist-card">
                    <div className="wishlist-card-icon">
                        <i className="fa-solid fa-heart wishlist-icon"></i>
                    </div>
                </Link>
            </div>
        </div>
    );
}

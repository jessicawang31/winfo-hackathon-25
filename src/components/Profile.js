// import React from 'react';
// export function Profile(){
//     return (
//         <p>Testing Profile</p>
//     )
// }

import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Profile.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export function Profile() {
    return (
        <div className="profile-container">
            {/* Header Section */}
            <div className="profile-header">
                <div className="profile-settings">
                    <i class="fa-solid fa-gear"></i>
                </div>
            </div>

            {/* Profile Info Section */}
            <div className="profile-info">
                <div className="profile-avatar"></div>
                <h2 className="profile-name">Name</h2>
            </div>

            {/* Buttons Section */}
            <div className="profile-buttons">
                <Link to="/explore" className="profile-button">
                    <div className="profile-button-content">Reward Summaries</div>
                </Link>
                <div className="profile-buttons-row">
                    <Link to="/explore" className="profile-button">
                        <div className="profile-button-content">Compare History</div>
                    </Link>
                    <Link to="/explore" className="profile-button">
                        <div className="profile-button-content">Last Viewed Products</div>
                    </Link>
                </div>
                <Link to="/explore" className="profile-button">
                    <div className="profile-button-content">
                        Sustainable Products I Purchased
                    </div>
                </Link>
            </div>
        </div>
    );
}

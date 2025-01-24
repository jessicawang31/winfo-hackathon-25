import React from 'react';
import '../css/Header.css'; // Create this file for styling

export function Header() {
    return (
        <header className="header">
            <div className="header-content">
                <p className="header-title">App Name</p>
            </div>
        </header>
    );
}
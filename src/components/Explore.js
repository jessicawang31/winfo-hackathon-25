// import React from 'react';
// export function Explore(){
//     return (
//         <p>Testing Explore</p>
//     )
// }


import React from 'react';
import '../css/Explore.css';


export function Explore() {
    return (
        <div className="explore-container">
            {/* Hero section */}
            <div className="hero-section">
                <div className="hero-placeholder"></div>
            </div> 
            
            {/* Explore content */}
            <section className="explore-section">
                <h2>Top Rated Brands</h2>
                <div className="explore-grid">
                    <div className="card"></div>
                    <div className="card"></div>
                    <div className="card"></div>
                    <div className="card"></div>
                </div>
            </section>
            <section className="explore-section">
                <h2>Best Impact</h2>
                <div className="explore-grid">
                    <div className="card"></div>
                    <div className="card"></div>
                    <div className="card"></div>
                    <div className="card"></div>
                </div>
            </section>
            <section className="explore-section">
                <h2>Most Popular</h2>
                <div className="explore-grid">
                    <div className="card"></div>
                    <div className="card"></div>
                    <div className="card"></div>
                    <div className="card"></div>
                </div>
            </section>
        </div>
    );
}

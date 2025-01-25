import React from 'react';
import '../../css/Gamification.css';

export function Gamification() {
  return (
    <div className="gamification">
      <div className="gamification-left">
        <div className="image-placeholder">
          {/* Placeholder for image */}
        </div>
      </div>
      <div className="gamification-right">
        <div className="points-display">
          <span className="points-label">Points: </span>
          <span className="points-value">1200</span>
        </div>
        <div className="ranking">
          <span>Your Rank: Gold Member</span>
        </div>
        <div className="progress-container">
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: '60%' }}></div>
          </div>
          <div className="progress-text">Earn 800 more points to reach Platinum!</div>
        </div>
      </div>
    </div>
  );
}

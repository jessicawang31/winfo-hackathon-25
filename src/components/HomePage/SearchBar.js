import React from 'react';
import '../../css/SearchBar.css'; // Create this CSS file.

export function SearchBar() {
  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-input"
        placeholder="Search products or brands..."
      />
      <button className="camera-button">
        <i className="fas fa-camera"></i> {/* Font Awesome camera icon */}
      </button>
    </div>
  );
}

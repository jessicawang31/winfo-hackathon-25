import React from 'react';
import '../../css/ProductCard.css';

export function ProductCard() {
  return (
    <div className="product-card">
      <div className="product-image-placeholder">
        {/* Placeholder for product image */}
      </div>
      <div className="product-info">
        <p className="product-name">Product Name</p>
        <p className="product-brand">Brand Name</p>
      </div>
    </div>
  );
}

import React from 'react';

const GalleryCard = ({ product, image, onClick }) => {
  return (
    <div className="gallery-card" onClick={onClick}>
      <p className="product-name">{product.name}</p>
      <img src={image} alt={product.name} className="product-image" />
    </div>
  );
};

export default GalleryCard;

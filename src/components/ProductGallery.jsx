import React, { useState } from 'react';
import GalleryCard from './GalleryCard';
import ProductCard from './ProductCard';

const ProductGallery = ({ products, images }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleCardClick = (product) => {
    setSelectedProduct(product);
  };

  const handleClose = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="product-gallery">
      {products.map((product) => (
        <GalleryCard
          key={product.id}
          product={product}
          image={images(`./${product.id}.jpg`)}
          onClick={() => handleCardClick(product)}
        />
      ))}
      {selectedProduct && (
        <ProductCard
          product={selectedProduct}
          image={images(`./${selectedProduct.id}.jpg`)}
          onClose={handleClose}
        />
      )}
    </div>
  );
};

export default ProductGallery;

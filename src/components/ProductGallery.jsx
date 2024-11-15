import React, { useState, useEffect } from 'react';
import GalleryCard from './GalleryCard';
import ProductCard from './ProductCard';
import { TYPES, SIZES } from '../constants';

const ProductGallery = ({ products, images }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [filter, setFilter] = useState(null);

  const handleCardClick = (product) => {
    setSelectedProduct(product);
  };

  const handleClose = () => {
    setSelectedProduct(null);
  };

  const handleFilterClick = (type, size) => {
    setFilter({ type, size });
  };

  const showAllProducts = () => {
    setFilter(null);
  };
  useEffect(() => {
    showAllProducts();
  }, []);

  const filteredProducts = filter
    ? products.filter((product) =>
        filter.size
          ? product.type === filter.type && product.size === filter.size
          : product.type === filter.type
      )
    : products;

  return (
    <div>
      <div className="filter-section">
        <button className="show-all-button" onClick={showAllProducts}>
          Mostrar todos los productos
        </button>
        <div className="filter-section-boxes-container">
          <div className="filter-box-canastos">
            <h3 className="filter-box-title">Canastos</h3>
            <div className='filter-box-canastos-buttons'>
              <button
                onClick={() => handleFilterClick(TYPES.CANASTO, SIZES.LARGE)}
                className="filter-button"
              >
                Grandes
              </button>
              <button
                onClick={() => handleFilterClick(TYPES.CANASTO, SIZES.MEDIUM)}
                className="filter-button"
              >
                Medianos
              </button>
              <button
                onClick={() => handleFilterClick(TYPES.CANASTO, SIZES.SMALL)}
                className="filter-button"
              >
                Pequeños
              </button>
            </div>
          </div>

          <div className="filter-box-pantallas">
            <h3 className="filter-box-title">Pantallas</h3>
            <button
              onClick={() => handleFilterClick(TYPES.PANTALLA, null)}
              className="filter-button"
            >
              Pantallas
            </button>
          </div>
        </div>
      </div>

      <div className="product-gallery">
        {filteredProducts.map((product) => (
          <GalleryCard
            key={product.id}
            product={product}
            image={images(`./${product.id}.jpg`)}
            onClick={() => handleCardClick(product)}
          />
        ))}
      </div>

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

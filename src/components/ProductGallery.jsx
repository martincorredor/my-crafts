import React, { useState, useEffect } from 'react';
import GalleryCard from './GalleryCard';
import ProductCard from './ProductCard';
import { TYPES, SIZES } from '../constants';

const ProductGallery = ({ products, images }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [filter, setFilter] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleCardClick = (product) => {
    setSelectedProduct(product);
  };

  const handleClose = () => {
    setSelectedProduct(null);
  };

  const handleFilterClick = (type, size) => {
    setFilter({ type, size });
    setSearchTerm(''); // Reiniciar búsqueda al usar los filtros
  };

  const showAllProducts = () => {
    setFilter(null);
    setSearchTerm(''); // Reiniciar búsqueda al mostrar todos
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setFilter(null); // Reiniciar los filtros al buscar
  };

  useEffect(() => {
    showAllProducts();
  }, []);

  const filteredProducts = products.filter((product) => {
    // Filtrar por tipo/tamaño
    const matchesFilter = filter
      ? filter.size
        ? product.type === filter.type && product.size === filter.size
        : product.type === filter.type
      : true;

    // Filtrar por término de búsqueda
    const matchesSearchTerm =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.categories.some((category) =>
        category.toLowerCase().includes(searchTerm.toLowerCase())
      );

    return matchesFilter && (searchTerm ? matchesSearchTerm : true);
  });

  return (
    <div>
      <div className="filter-section">
        <div className="filter-header">
          <button className="show-all-button" onClick={showAllProducts}>
            Mostrar todos los productos
          </button>
          <input
            type="text"
            placeholder="Buscar productos..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="search-input"
          />
        </div>

        <div className="filter-section-boxes-container">
          <div className="filter-box-canastos">
            <h3 className="filter-box-title">Canastos</h3>
            <div className="filter-box-canastos-buttons">
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

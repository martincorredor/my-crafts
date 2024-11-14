import React, { useState, useEffect } from 'react';
import HomeMenu from './HomeMenu';

const HomePage = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageList = [
    './c1.jpg',
    './c2.jpg',
    './c3.jpg',
    './c4.jpg',
    './c5.jpg',
    './c6.jpg',
  ];

  // Cambia la imagen actual cada 2 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageList.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="homepage-section">
      <div className="home-content">
        <h1 className="home-title">CRAFTS!</h1>
        <div className="home-footer">
          <p>Píde los que desees a través de nuestro WhatsApp</p>
          <HomeMenu />
        </div>
      </div>
      <div className="image-slider">
        {imageList.map((image, index) => (
          <img
            key={index}
            src={images(image)}
            alt="Artesanía"
            className={`home-image ${
              index === currentImageIndex ? 'enter' : 'exit'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;

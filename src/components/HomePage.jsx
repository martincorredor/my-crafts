import React, { useState, useEffect } from 'react';
import HomeMenu from './HomeMenu';
import { Icon, IconButton } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const HomePage = ({ images }) => {
  const whatsappNumber = '573224682353';
  const message =
    'Hola!! Estoy interesado en comprar uno de tus productos, quiero más información';
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageList = [
    './c1.jpg',
    './c2.jpg',
    './c3.jpg',
    './c76.jpg',
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
        <h1 className="home-title">GAITA CRAFTS!</h1>
        <div className='home-footer'>
          Contáctanos por WhatsApp para tener el gusto de atenderte
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              message
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-link home-w-link"
          >
            <Icon component={WhatsAppIcon} />
          </a>
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

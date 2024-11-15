import React from 'react';
import CustomIcon from './CustomIcon';
import { COLORS } from '../constants';
import { Icon } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const HomeMenu = () => {
  const whatsappNumber = '573212002638';
  const message =
    'Hola!! Estoy interesado en comprar uno de tus productos, quiero más información';

  return (
    <div className="home-menu-container">
      <a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
          message
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-link"
      >
        <Icon component={WhatsAppIcon} />
      </a>
    </div>
  );
};

export default HomeMenu;

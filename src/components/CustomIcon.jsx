import React from 'react';
import { Icon } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';

const CustomIcon = ({ icon, color }) => {
  const icons = {
    whatsApp: WhatsAppIcon,
    close: CloseIcon,
    search: SearchIcon,
  };

  const IconComponent = icons[icon];

  return (
    <Icon
      component={IconComponent}
      className="custom-icon"
      sx={{ color: color || 'inherit',  }}
    />
  );
};

export default CustomIcon;

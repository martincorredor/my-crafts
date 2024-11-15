import React from 'react';
import { Modal, Box, Typography } from '@mui/material';
import CustomIcon from './CustomIcon';
import { COLORS } from '../constants';

const ProductCard = ({ product, image, onClose }) => {
  return (
    <Modal
      open={!!product}
      onClose={onClose}
      aria-labelledby="product-modal-title"
    >
      <Box className="product-modal">
        <div className="modal-close-icon" onClick={onClose}>
          <CustomIcon icon={'close'} color={COLORS.black} />
        </div>
        <img src={image} alt={product.name} className="modal-product-image" />
        <div className="modal-content">
          <Typography
            variant="h6"
            id="product-modal-title"
            className="modal-product-name"
          >
            {product.name}
          </Typography>
          <Typography variant="body2" className="modal-product-measures">
            {product.mesures}
          </Typography>
        </div>
        <div className="modal-whatsApp-content">
          <span>Pídelo a través de nuestro whatsApp</span>
          <CustomIcon icon={'whatsApp'} color={COLORS.black} />
        </div>
      </Box>
    </Modal>
  );
};

export default ProductCard;

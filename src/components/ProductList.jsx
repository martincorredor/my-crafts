// src/components/ProductList.js
import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { Card, CardContent, Typography, CardMedia, Box } from '@mui/material';
import { products } from '../products';
const productImages = require.context('../assets', true);

const ProductList = () => {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, padding: 2 }}>
      {products.map((product) => (
        <Box
          key={product.id}
          sx={{
            width: { xs: '100%', sm: '45%', md: '30%' }, // Ajusta el ancho para diferentes tamaños de pantalla
            marginBottom: 2,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Card sx={{ width: '100%' }}>
            <img
              className="cardImage"
              src={productImages(`./${product.id}.jpg`)}
              alt={product.name}
            ></img>
            <CardContent>
              <Typography variant="h5">{product.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                {product.mesures}
              </Typography>
              <Typography variant="h6">${product.prix}</Typography>
            </CardContent>
          </Card>
        </Box>
      ))}
    </Box>
  );
};

export default ProductList;

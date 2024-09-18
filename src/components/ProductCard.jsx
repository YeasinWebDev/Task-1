import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Grid } from '@mui/material';

// ProductCard Component
const Carddesign = ({ image, name, price }) => {
  return (
    <Card sx={{ maxWidth: 345, borderRadius: 2 }}>
      {/* Image Section */}
      <Box sx={{ bgcolor: '#F4F4F4' }}>
        {/* Image Section */}
        <CardMedia
          component="img"
          alt={name}
          height="300"
          image={image}
          sx={{ objectFit: 'cover' }}
        />
      </Box>

      {/* Content Section */}
      <CardContent>
        {/* Product Name */}
        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', mb: 1 }}>
          {name}
        </Typography>

        {/* Product Price */}
        <Typography variant="body1" color="text.secondary" sx={{ fontWeight: 600 }}>
          ${price}
        </Typography>
      </CardContent>
    </Card>
  );
};

// Demo Data and Rendering Multiple Cards
const ProductCard = () => {
  // Array of demo products
  const products = [
    { image: 'https://res.cloudinary.com/dlrktntvb/image/upload/v1726659130/bag_qolklq.png', name: 'Bag', price: 99.99 },
    { image: 'https://res.cloudinary.com/dlrktntvb/image/upload/v1726657115/Pngtree_black_t-shirt_mockup_3610326_sgolgy.png', name: 'Shirt', price: 59.99 },
    { image: 'https://res.cloudinary.com/dlrktntvb/image/upload/v1726655572/cup_wjai2t.png', name: 'Cup', price: 199.99 },
    { image: 'https://res.cloudinary.com/dlrktntvb/image/upload/v1726659130/bag_qolklq.png', name: 'Leather Jacket', price: 99.99 },
    { image: 'https://res.cloudinary.com/dlrktntvb/image/upload/v1726657115/Pngtree_black_t-shirt_mockup_3610326_sgolgy.png', name: 'Shirt', price: 59.99 },
    { image: 'https://res.cloudinary.com/dlrktntvb/image/upload/v1726655572/cup_wjai2t.png', name: 'Cup', price: 199.99 },
  ];

  return (
    <Box sx={{ flexGrow: 1, p: 4, mx: { xs: 2, sm: 4, md: 10, lg: 32 } }}>
      <Grid container spacing={4} justifyContent="center">
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Carddesign
              image={product.image}
              name={product.name}
              price={product.price}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductCard;

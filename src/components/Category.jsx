import { Grid2 } from '@mui/material';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import React from 'react'

const Carddesign = ({ image, name }) => {
    return (
      <Card sx={{ maxWidth: 400,borderRadius: 2 }}>
        {/* Image Section */}
        <Box sx={{ bgcolor: '#F4F4F4' }}>
          {/* Image Section */}
          <CardMedia
            component="img"
            alt={name}
            image={image}
            sx={{ objectFit: 'cover' }}
          />
        </Box>
  
        {/* Content Section */}
        <CardContent>
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', mb: 1 }}>
            {name}
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Shop Now
          </Typography>
        </CardContent>
      </Card>
    );
  };

const Category = () => {
    const products = [
        { image: 'https://res.cloudinary.com/dlrktntvb/image/upload/v1726655589/jacket_eeklse.png', name: 'Accessories' },
        { image: 'https://res.cloudinary.com/dlrktntvb/image/upload/v1726657115/Pngtree_black_t-shirt_mockup_3610326_sgolgy.png', name: 'Apparel'},
      ];

  return (
    <Box sx={{ mx: { xs: 2, sm: 4, md: 10, lg: 50 }}}>
      <Grid2 sx={{display:'flex' ,justifyContent:'space-center', gap:20}}>
        {products.map((product, index) => (
          <Grid2 key={index}>
            <Carddesign
              image={product.image}
              name={product.name}
            />
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
}

export default Category;

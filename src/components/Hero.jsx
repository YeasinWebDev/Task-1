import React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';

const HeroSection = () => {
    return (
        <Box sx={{ flexGrow: 1, px: { xs: 2, sm: 5, md: 8, lg: 15 }, mx: { xs: 2, sm: 4, md: 10, lg: 25 }, mt: 14, bgcolor: '#F6F6F6', borderRadius: 4 }}>
            <Grid container spacing={2} alignItems="center" justifyContent="center">
                {/* Left Side: Text Section */}
                <Grid
                    item
                    xs={12}
                    md={5}
                    sx={{
                        textAlign: { xs: 'center', md: 'left' },
                        width: { xs: '100%', md: '90%' }  // Adjust text width for larger screens
                    }}
                >
                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: { xs: '2rem', md: '2rem' },
                            fontWeight: 'bold',
                            mb: 2
                        }}
                    >
                        Discover our Curated Collection
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: { xs: '1rem', md: '1rem' },
                            mb: 4
                        }}
                    >
                        Explore our carefully selected products for your home and lifestyle.
                    </Typography>
                    <Button
                        variant="contained"
                        sx={{
                            padding: '10px 20px',
                            fontSize: '1rem',
                            textTransform: 'none',
                            color: 'while',
                            bgcolor: 'black',
                            borderRadius:10
                        }}
                    >
                        Shop Now
                    </Button>
                </Grid>

                {/* Right Side: Image Section */}
                <Grid
                    item
                    xs={12}
                    md={7}  // Adjust width of the image section
                >
                    <Box
                        component="img"
                        sx={{
                            width: { xs: '100%', sm: '80%' },  // Adjust width for larger screens
                            height: 'auto',
                            borderRadius: 2
                        }}
                        alt="Fashion Banner"
                        src="https://res.cloudinary.com/dlrktntvb/image/upload/v1726655572/cup_wjai2t.png" // Replace with your own image URL
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default HeroSection;

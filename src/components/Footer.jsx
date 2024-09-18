import React from 'react';
import { Box, Typography, Link, Grid2, Divider } from '@mui/material';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                bgcolor: '#F4F4F4',
                color: 'black',
                py: 4,
                px: { xs: 2, sm: 4, md: 10 },
                mt: 10,
                borderTop: '1px solid #ddd',
            }}
        >
            <Typography variant='div' sx={{display:'flex' ,justifyContent:"space-between" ,mx: { xs: 2, sm: 4, md: 10, lg: 30 }, px:2}  }>
                {/* Products and Company Sections */}
                <Grid2 item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'space-center', gap:10 }}>
                    <Box>
                        <Typography variant="h6" sx={{ mb: 2, fontSize:15, fontWeight:600 }}>
                            Products
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Link href="#" color="inherit" sx={{ mb: 1 ,fontSize:13, textDecoration:"none"}}>
                                Apparel
                            </Link>
                            <Link href="#" color="inherit" sx={{ mb: 1 ,fontSize:13, textDecoration:"none"}}>
                                Accessories
                            </Link>
                        </Box>
                    </Box>
                    <Box>
                        <Typography variant="h6" sx={{ mb: 2, fontSize:15, fontWeight:600 }}>
                            Company
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Link href="#" color="inherit" sx={{ mb: 1 ,fontSize:13, textDecoration:"none"}}>
                                Features
                            </Link>
                            <Link href="#" color="inherit" sx={{ mb: 1 ,fontSize:13, textDecoration:"none"}}>
                                Pricing
                            </Link>
                            <Link href="#" color="inherit" sx={{ mb: 1 ,fontSize:13, textDecoration:"none"}}>
                                Contact Us
                            </Link>
                        </Box>
                    </Box>
                </Grid2>

                {/* Newsletter and Social Media */}
                <Grid2 item xs={12} md={4}>
                    <Typography variant="h6" sx={{ mb: 2 }}>
                        Subscribe to our newsletter
                    </Typography>
                    <Box
                        component="form"
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 1,
                            mb: 2,
                        }}
                    >
                        <input
                            type="email"
                            placeholder="Enter your email"
                            style={{
                                padding: '15px 10px',
                                border: '1px solid #ddd',
                                borderRadius: '4px',
                                width: '100%',
                            }}
                        />
                        <button
                            type="submit"
                            style={{
                                backgroundColor: '#000',
                                color: '#fff',
                                border: 'none',
                                padding: '10px 8px',
                                borderRadius: '4px',
                                cursor: 'pointer',
                            }}
                        >
                            Subscribe
                        </button>
                    </Box>
                </Grid2>
            </Typography>
            <Typography sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', textAlign: 'center', py: 2 ,borderTop:1 ,borderColor:"gray"}}>
                <Typography variant="p" color="text.secondary" >
                    © 2024 Your Next Store
                </Typography>
                <Box sx={{}}>
                    <Link href="#" color="inherit" sx={{ mr: 2 ,textDecoration:'none' }}>
                        @zaisteTwitter
                    </Link>
                    <Link href="#" color="inherit" sx={{ textDecoration:'none'}}>
                        @typeofweb
                    </Link>
                </Box>
            </Typography>
        </Box>
    );
};

export default Footer;

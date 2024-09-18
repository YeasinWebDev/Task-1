import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';
import { Box, InputBase, Drawer, List, ListItem, ListItemText, Divider } from '@mui/material';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Toggle the drawer
  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <AppBar sx={{ bgcolor: '#FFFFFF', color: 'black', py: 0.5 }}>
      <Toolbar sx={{ mx: {  md: 5,xs:5 ,lg:24 } }}>
        {/* Menu Icon for Mobile */}
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2, display: { xs: 'block', md: 'none' } }}
          onClick={toggleDrawer(true)} // Open drawer on click
        >
          <MenuIcon />
        </IconButton>

        {/* Navbar Title */}
        <Typography variant="h6" component="div" sx={{ fontWeight: '600' }}>
          Your Next Store
        </Typography>

        {/* Links for Larger Screens */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: 3, alignItems: 'center' }}>
          <Button sx={{ fontWeight: '600', color: 'black', fontSize:12 }}>Apparel</Button>
          <Button sx={{ fontWeight: '600', color: 'black', fontSize:12 }}>Home</Button>
          <Button sx={{ fontWeight: '600', color: 'black', fontSize:12 }}>Accessories</Button>
        </Box>

        {/* Search Bar */}
        <Box sx={{
          display: { xs: 'none', md: 'flex' },
          alignItems: 'center',
          mx: 2,
          border: 2,
          borderColor: '#f2f2f2',
          borderRadius: 4,
          ml: 'auto'
        }}>
          <InputBase
            placeholder="Search…"
            sx={{ flex: 1, ml: 1 }}
          />
          <IconButton type="submit" sx={{ p: '10px' }}>
            <SearchIcon />
          </IconButton>
        </Box>

        {/* Cart Icon */}
        <IconButton
          size="large"
          color="inherit"
          sx={{ ml: 2 }}
        >
          <ShoppingCartIcon />
        </IconButton>
      </Toolbar>

      {/* Drawer for Mobile Menu */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)} 
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)} 
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            <ListItem button>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Apparel" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Accessories" />
            </ListItem>
          </List>
          <Divider />
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;

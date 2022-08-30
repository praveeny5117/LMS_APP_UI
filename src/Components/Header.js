import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import { Button } from 'react-bootstrap';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// import {onLogout} from './Commonuse'

function Header() {
  const [anchorElUser, setAnchorElUser] = useState(false);

  const handleOpenUserMenu = () => {
    setAnchorElUser(true);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(false);
  };
  return (
    <div >
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{height:'60px'}}>
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 3 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">Welcome
          </Typography>
          <Box sx={{ flexGrow: 2, display: { xs: 'none', md: 'flex' } }}>
         
            <Button style={{marginLeft:'1rem'}} href='/dashboard'>LMS</Button> 
            <Button style={{marginLeft:'1rem'}} href='/entersheet'>Time Sheet</Button> 
            <Button style={{marginLeft:'1rem'}} href='/viewsheet'>ViewSheet</Button> 
          </Box>
          <Box sx={{ flexGrow: 0 }}>
          <Button href='/add'>Add</Button>
            <Button href='/list'>List</Button>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 1 }}>
                <Avatar alt="Remy Sharp" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center"> <Button >Profile</Button></Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center"><Button href='/'>Logout</Button></Typography>
                </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </Box> 
    </div>
  );
}

export default Header;

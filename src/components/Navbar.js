// src/components/Navbar.js
import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import ThemeSwitcher from './ThemeSwitcher';

const Navbar = () => (
  <AppBar position="fixed">
    <Toolbar>
      <Typography variant="h6" noWrap>
        Admin Dashboard
      </Typography>
      <ThemeSwitcher />
    </Toolbar>
  </AppBar>
);

export default Navbar;

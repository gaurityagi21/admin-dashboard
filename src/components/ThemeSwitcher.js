// src/components/ThemeSwitcher.js
import React, { useContext } from 'react';
import { Switch } from '@mui/material';
import { ThemeContext } from '../App';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Switch checked={theme === 'dark'} onChange={toggleTheme} />
  );
};

export default ThemeSwitcher;

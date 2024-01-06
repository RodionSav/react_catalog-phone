import React from 'react';
import { NavLink } from 'react-router-dom';
import './logo.scss';

export const Logo = () => {
  return (
    <NavLink to="/" className="logo" />
  );
};

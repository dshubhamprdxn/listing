import React from 'react';
import NavigationItems from './NavigationItems/NavigationItems';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <h1><NavLink to='/' exact>Pagination with Character</NavLink></h1>
        <NavigationItems />
      </div>
    </header>
  )
}

export default Header

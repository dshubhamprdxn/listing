import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  const homeTitleStyling = {
    fontSize: "15px",
    color: "black",
    padding: '20px',
    margin: '0 auto',
    width: '50%'
  };

  return <div style={homeTitleStyling}>Go to on characters page from navigation bar to visit Listing page or click <NavLink to='/listing'>here</NavLink></div>;
}

export default Home

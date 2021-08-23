import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem';
import './NavigationItems.css';


const NavigationItems = (props) => {
  return (
    <ul className='NavigationItems'>
      <NavigationItem link='/' exact>Home</NavigationItem>
      <NavigationItem link='/listing'>Listing</NavigationItem>
    </ul> 
  )
}

export default NavigationItems

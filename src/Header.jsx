import React from 'react'
import logo from './Images/Logo.png';
const Header = () => {
  return (
    <>
       <div className='header'>
        <img src={logo} alt='logo' className='logo'/>
        <h1 style={{color:'black'}}>Shuaib Notes</h1>
       </div>
    </>
  )
}

export default Header;
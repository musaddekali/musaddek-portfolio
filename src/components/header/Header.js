import React from 'react';
import Navbar from './Navbar';
import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <div className="container-fluid">
        <Navbar />
      </div>
    </header>
  )
}

export default Header
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(null);

  const headerScrolled = () => {
    window.addEventListener('scroll', () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      if (winScroll > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (winScroll > 80) {
        setIsScrolled(true);
      }
    })
  }

  useEffect(() => {
    headerScrolled();
    return () => window.removeEventListener('scroll', headerScrolled);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container-fluid">
        <Navbar />
      </div>
    </header>
  )
}

export default Header
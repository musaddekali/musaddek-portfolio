import React, { useState } from 'react'
import Img from '../../assets/images/person.png';

const menu = [
  {
    id: 1,
    title: 'services',
    link: '#services'
  },
  {
    id: 2,
    title: 'skills',
    link: '#skills'
  },
  {
    id: 3,
    title: 'portfolio',
    link: '#portfolio'
  },
  {
    id: 4,
    title: 'contact',
    link: '#contact'
  },
]

const Navbar = () => {
  const [index, setIndex] = useState(0);

  return (
    <nav className="navmenu">
      <div className="navmenu-left">
        <a className='logo' href="/">
          <img className='logo-img' src={Img} alt="Musaddek ali headshot" />
          <span className="logo-text d-md-none">Musaddek</span>
        </a>
      </div>
      <div className="navmenu-right">
        <a href="/" className="logo d-none d-md-inline-block">
          <span className="logo-text">Musaddek</span>
        </a>
        <div className='navmenu-items'>
          {
            menu.map((item, i) => (
              <a
                key={item.id}
                onClick={() => setIndex(i)}
                className={`navmenu-item ${i === index ? 'active' : ''}`}
                href={item.link}
              >
                {item.title}
              </a>
            ))
          }
        </div>
      </div>
    </nav>
  )
}

export default Navbar
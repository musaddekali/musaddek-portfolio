import React from 'react'
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container d-flex flex-wrap justify-content-between gap-2">
        <p className='mb-0'>&copy; 2022 Musaddek Ali</p>
        <p className='mb-0'>Build with
          {" "}
          <a href="">React js</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
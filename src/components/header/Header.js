import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import Logo from '../../Assets/Images/logo.png';

import Home_1 from '../../Assets/Images/web.jpg';
import Home_2 from '../../Assets/Images/cv-render.png';
import Home_3 from '../../Assets/Images/service/2.png';
import Home_4 from '../../Assets/Images/gallery/food-delivery.png';
import Home_6 from '../../Assets/Images/testimonial/interview.jpg';

import './header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const openNavbar = () => {
    setIsOpen(true);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header id="header" className="site-header header-style-1">
        <nav className="navigation navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="open-btn" onClick={openNavbar}>
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link className="navbar-brand" to="/">
                <img className="navbar__logo" src={Logo} alt="" />
              </Link>
            </div>
            <div
              id="navbar"
              className={
                isOpen
                  ? 'navbar-collapse navigation-holder active'
                  : 'navbar-collapse navigation-holder'
              }
            >
              <button className="close-navbar" onClick={closeNavbar}>
                <i className="fa fa-times" aria-hidden="true"></i>
              </button>
              <button className="close-navbar-2" onClick={closeNavbar}>
                <i className="fa fa-times" aria-hidden="true"></i>
              </button>
              <ul className="nav navbar-nav">
                <li className="home">
                  <a href="#home">
                    <img className='navbar__img' src={Home_1} alt="" />
                  </a>
                </li>
                <li className="about">
                  <a href="#about">
                    <img className='navbar__img' src={Home_2} alt="" />
                  </a>
                </li>
                <li className="tech">
                  <a href="#tech">
                    <img className='navbar__img' src={Home_3} alt="" />
                  </a>
                </li>
                <li className="portfolio">
                  <a href="#portfolio">
                    <img className='navbar__img' src={Home_4} alt="" />
                  </a>
                </li>

                <li className="contact">
                  <a href="#contact">
                    <img className='navbar__img' src={Home_6} alt="" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="menu-open-btn-holder">
              <button className="menu-open-btn" onClick={openNavbar}>
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;

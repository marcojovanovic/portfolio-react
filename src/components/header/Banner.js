import React from 'react';

import { Link } from 'react-router-dom';
import Slides from '../../Assets/Images/programming.gif';

import './header.css'

function Banner() {
  return (
    <section id="home" className="hero hero-slider-wrapper hero-style-1">
      <div className="hero-slider">
        <div className="slide">
          <div className="slider-image">
            <img
              width="1920"
              style={{ objectFit: 'cover' }}
              src={Slides}
              alt=""
            />
          </div>
          <div className="container">
            <div className="row">
              <div className="col col-md-8 col-sm-12 slide-caption">
                <div className="slide-subtitle">
                  <h4>Marko Jovanović portfolio</h4>
                </div>
                <div className="slide-title">
                  <h2>FrontEnd Developer</h2>
                </div>
                <div className="btns">
                  <a href="#contact" className="template-btn go-contact-area">
                    Contact Me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copy">
        <p>Creative Designer And Developer</p>
      </div>
      <div className="social-links">
        <ul>
          <li>
            <Link
              to={{
                pathname: 'https://github.com/marcojovanovic/ASOT-1000-Tribute',
              }}
              target="_blank"
            >
              <i className="fa fa-github-square fa-2x"></i>
            </Link>
          </li>

          <li>
            <Link
              to={{
                pathname:
                  'https://github.com/marcojovanovic/firebase__blog--devil_island',
              }}
              target="_blank"
            >
              <i className="fa fa-github-alt fa-2x"></i>
            </Link>
          </li>

          <li>
            <Link
              to={{
                pathname:
                  'https://github.com/marcojovanovic/react_food__delivery',
              }}
              target="_blank"
            >
              <i className="fa fa-github fa-2x"></i>
            </Link>
          </li>
        </ul>
      </div>
      <div className="white_svg">
        <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
          <polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 "></polygon>
        </svg>
      </div>
    </section>
  );
}

export default Banner;

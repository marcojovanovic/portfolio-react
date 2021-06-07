import React from 'react';

import { Link } from 'react-router-dom';
import Logo from '../../Assets/Images/logo.png';
import './footer.css'


function Footer() {
  return (
    <>
      <div className="footer-area text-center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="footer-image">
                <Link to="/">
                  <img className='footer__logo' src={Logo} alt="" />
                </Link>
              </div>
            </div>
            <div className="col-12">
              <div className="footer-menu">
                
               
              </div>
            </div>
            <div className="col-12">
              <div className="footer-sub">
                <p>
                  <i className="fa fa-copyright"></i>Copyright{' '}
                  <span> 2021 Marko Jovanović. All rights reserved</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

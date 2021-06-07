import React from 'react';

import { FaReact } from 'react-icons/fa';
import { BsBootstrap } from 'react-icons/bs';
import sr2 from '../../Assets/Images/service/2.png';
import sr3 from '../../Assets/Images/service/3.png';
import sr4 from '../../Assets/Images/service/4.png';
import sr5 from '../../Assets/Images/service/5.png';

import './tech.css'

function Service() {
  return (
    <div id="tech" className="service-area section-padding">
      <div className="borderd"></div>
      <div className="container">
        <div className="col-l2">
          <div className="section-title section-title2 text-center">
            <span>Kojim tehnologijama se služim kao:</span>
            <h2>FrontEnd Developer</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="service-section">
              <div className="services-wrapper">
                <div className="services-icon-wrapper">
                  <div className="service-dot">
                    <div className="dots"></div>
                  </div>
                  <FaReact className="react__icons" />
                </div>
                <div className="service-content">
                  <h2>JavaScript/React.js</h2>
                  <p> Bez alata nema zanata.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="service-section">
              <div className="services-wrapper">
                <div className="services-icon-wrapper">
                  <div className="service-dot">
                    <div className="dots"></div>
                  </div>
                  <i>
                    <img src={sr2} alt="" />
                  </i>
                </div>
                <div className="service-content">
                  <h2>CSS/Sass</h2>
                  <p>Svaki skelet treba meso</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="service-section">
              <div className="services-wrapper">
                <div className="services-icon-wrapper">
                  <div className="service-dot">
                    <div className="dots"></div>
                  </div>
                  <i>
                    <img src={sr3} alt="" />
                  </i>
                </div>
                <div className="service-content">
                  <h2>Adobe Photoshop</h2>
                  <p>Fotografije u našim bojama</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="service-section">
              <div className="services-wrapper">
                <div className="services-icon-wrapper">
                  <div className="service-dot">
                    <div className="dots"></div>
                  </div>
                  <i>
                    <img src={sr4} alt="" />
                  </i>
                </div>
                <div className="service-content">
                  <h2>Responsiv Design</h2>
                  <p>
                    Svaki projekat ga treba, a puno strpljenja i testiranja
                    traži
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="service-section">
              <div className="services-wrapper">
                <div className="services-icon-wrapper">
                  <div className="service-dot">
                    <div className="dots"></div>
                  </div>
                  <i>
                    <img src={sr5} alt="" />
                  </i>
                </div>
                <div className="service-content">
                  <h2>Firebase</h2>
                  <p>
                    Želimo neki backend da čuvamo podatke i da ih koristimo
                    prema potrebi
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="service-section">
              <div className="services-wrapper">
                <div className="services-icon-wrapper">
                  <div className="service-dot">
                    <div className="dots"></div>
                  </div>
                  <BsBootstrap className="react__icons" />
                </div>
                <div className="service-content">
                  <h2>Bootstrap/Material UI</h2>
                  <p>Kada radimo konture projekta i mrzi nas da pišemo css</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="white_svg">
        <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
          <polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 "></polygon>
        </svg>
      </div>
    </div>
  );
}

export default Service;

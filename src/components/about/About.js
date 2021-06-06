import React from 'react';

import aboutImg from '../../Assets/Images/profile.png';


import './about.css'

function About() {
  return (
    <div id="about" className="about-area">
      <div className="borderd"></div>
      <div className="container">
        <div className="about-item">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-img">
                <img
                  width="793"
                  height="675"
                  style={{
                    objectFit: 'cover',
                    transform: 'translateY(-100px)',
                  }}
                  src={aboutImg}
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content">
                <h2>Zašto konkurišem ?</h2>
                <p>
                  {' '}
                  Meni lično je veoma važno da radim nešto ka čemu imam
                  aspiracije. Materijalna motivacija nije primarna da bih se
                  bavio navedenim zanimanjem, već se radi o tome imam potrebu sa
                  postignućem, kada uradim projekat ili rešim problem osećam se
                  zaista dobro i ispunjeno.{' '}
                </p>
                <p className="mt-20">
                  Ako ideš u krevet noću sa mišlju kako da rešiš problem ili
                  kada si u kupovini trčiš kući da rešiš neki bug za koji sada
                  imaš ideju, sigurno je da je to ono čime želiš da se baviš.
                  Prema istrajnosti, trpljivosti pa i kreaciji sa sigurnošću
                  mogu da tvrdim da sam ispred drugih kandidata.
                </p>
                <a href="/CV.pdf" className="template-btn" download>
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="white_svg svg_white">
        <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
          <polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 "></polygon>
        </svg>
      </div>
    </div>
  );
}

export default About;

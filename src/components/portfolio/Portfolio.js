import React, { Component } from 'react';
import Gallery_2 from '../../Assets/Images/gallery/asot.png';
import Gallery_1 from '../../Assets/Images/gallery/firebase-blog.png';
import Gallery_3 from '../../Assets/Images/gallery/food-delivery.png';
import Gallery_4 from '../../Assets/Images/gallery/bitkoin.png';
import { Link } from 'react-router-dom';

import './portfolio.css'


class Porfolio extends Component {
  state = {
    onWebDesign: false,
    onPrintDesign: false,
    onWebApp: false,
    onPhotography: false,
    isOpen: false,
  };

  render() {
    const allElement = (event) => {
      event.preventDefault();
      this.setState({
        onWebApp: true,
        onPrintDesign: true,
        onWebDesign: true,
        onPhotography: true,
      });
    };

    const webDesign = (event) => {
      event.preventDefault();
      this.setState({
        onWebDesign: true,
        onPrintDesign: false,
        onWebApp: false,
        onPhotography: false,
        isOpen: true,
      });
    };

    const printDesign = (event) => {
      event.preventDefault();
      this.setState({
        onPrintDesign: true,
        onWebDesign: false,
        onWebApp: false,
        onPhotography: false,
        isOpen: true,
      });
    };

    const webApp = (event) => {
      event.preventDefault();
      this.setState({
        onWebApp: true,
        onPrintDesign: false,
        onWebDesign: false,
        onPhotography: false,
        isOpen: true,
      });
    };

    const Photography = (event) => {
      event.preventDefault();
      this.setState({
        onPhotography: true,
        onWebApp: false,
        onPrintDesign: false,
        onWebDesign: false,
        isOpen: true,
      });
    };

    const Bitkoin = (event) => {
      event.preventDefault();
      this.setState({
        onPhotography: false,
        onWebApp: true,
        onPrintDesign: false,
        onWebDesign: false,
        isOpen: false,
      });
    };

    return (
      <section id="portfolio" className="gallery-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col col-xs-12 sortable-gallery">
              <div className="gallery-filters">
                <div className="section-title">
                  <span>Portfolio</span>
                  <h2>Projekti</h2>
                </div>
                <ul>
                  <li>
                    <Link
                      data-filter="*"
                      to="/"
                      className="current"
                      onClick={allElement}
                    >
                      All
                    </Link>
                  </li>
                  <li>
                    <Link data-filter=".Web-Design" to="/" onClick={webDesign}>
                      Serverless
                    </Link>
                  </li>
                  <li>
                    <Link
                      data-filter=".Print-Design"
                      to="/"
                      onClick={printDesign}
                    >
                      Firebase
                    </Link>
                  </li>
                  <li>
                    <Link
                      data-filter=".Web-Application"
                      to="/"
                      onClick={webApp}
                    >
                      Web Application
                    </Link>
                  </li>
                  <li>
                    <Link
                      data-filter=".Photography"
                      to="/"
                      onClick={Photography}
                    >
                      Marketing Page
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="gallery-container gallery-fancybox masonry-gallery payra-masonary">
                <div
                  className={
                    this.state.onPrintDesign
                      ? 'grid active'
                      : 'grid' && this.state.onWebApp
                      ? 'grid active'
                      : 'grid' && this.state.isOpen
                      ? 'grid'
                      : 'grid open'
                  }
                >
                  <img src={Gallery_1} className="portfolio__img" alt="" />
                  <div className="icon">
                    <Link
                      to={{
                        pathname:
                          'https://devil-island-firebase-blog.netlify.app',
                      }}
                      target="_blank"
                      className="view-icon"
                    >
                      <i className="fa fa-plus" aria-hidden="true"></i>
                    </Link>
                  </div>
                </div>
                <div
                  className={
                    this.state.onWebDesign
                      ? 'grid active'
                      : 'grid' && this.state.onWebApp
                      ? 'grid active'
                      : 'grid' && this.state.isOpen
                      ? 'grid'
                      : 'grid open'
                  }
                >
                  <img src={Gallery_2} alt="" className="portfolio__img" />
                  <div className="icon">
                    <Link
                      to={{
                        pathname: 'https://asot-trance-1000-react.netlify.app',
                      }}
                      target="_blank"
                      className="view-icon"
                    >
                      <i className="fa fa-plus" aria-hidden="true"></i>
                    </Link>
                  </div>
                </div>
                =
                <div
                  className={
                    this.state.onPrintDesign
                      ? 'grid active'
                      : 'grid' && this.state.onPhotography
                      ? 'grid active'
                      : 'grid' && this.state.isOpen
                      ? 'grid'
                      : 'grid open'
                  }
                >
                  <img src={Gallery_3} alt="" className="portfolio__img" />
                  <div className="icon">
                    <Link
                      to={{
                        pathname: 'https://food-delivery-portfolio.netlify.app',
                      }}
                      className="view-icon"
                      target="_blank"
                    >
                      <i className="fa fa-plus" aria-hidden="true"></i>
                    </Link>
                  </div>
                </div>
                <div
                  className={
                    this.state.onWebApp
                      ? 'grid active'
                      : 'grid' && this.state.Bitkoin
                      ? 'grid active'
                      : 'grid' && this.state.isOpen
                      ? 'grid'
                      : 'grid open'
                  }
                >
                  <img src={Gallery_4} alt="" className="portfolio__img" />
                  <div className="icon">
                    <Link
                      to={{
                        pathname: 'https://bitkoin-market-829a81.netlify.app/',
                      }}
                      className="view-icon"
                      target="_blank"
                    >
                      <i className="fa fa-plus" aria-hidden="true"></i>
                    </Link>
                  </div>
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
      </section>
    );
  }
}

export default Porfolio;

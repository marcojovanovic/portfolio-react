import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import meme1 from '../../Assets/Images/testimonial/interview.jpg'
import meme2 from '../../Assets/Images/testimonial/mem2.png'
import meme3 from '../../Assets/Images/testimonial/bob.jpg'

import './testimonial.css'


function Testimonial () {



const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            arrows: false,
            slidesToScroll: 1,
            centerPadding: 30,
            focusOnSelect: false,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    initialSlide: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
            ]
        };


    return (
            <div className="testimonial-area">
                <div className="container">
                    <div className="testimonial-active">
                    <Slider {...settings}>
                        <div className="testimonial-wrap">
                            <div className="testimonial-item">
                               <img className='testemonial__img' src={meme1} alt='' /> 
                            </div>
                        </div>  
                        <div className="testimonial-wrap">
                            <div className="testimonial-item">
                            <img className='testemonial__img' src={meme2} alt='' /> 
                            </div>
                        </div>  
                        <div className="testimonial-wrap">
                            <div className="testimonial-item">
                            <img className='testemonial__img' src={meme3} alt='' /> 
                            </div>
                        </div>  
                    </Slider>
                    </div>
                </div>
                <div className="white_svg">
                    <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
                        <polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 "></polygon>
                    </svg>
                </div>
            </div>

    )
}

export default Testimonial

import React from 'react';
import Banner from '../../components/header/Banner';
import About from '../../components/about/About';
import Tech from '../../components/tech/Tech';
import Contact from '../../components/contact/Contact';
import Footer from '../../components/footer/Footer';
import Testimonial from '../../components/testimonial/Testimonial';
import Portfolio from '../../components/portfolio/Portfolio';
import Scrollbar from '../../components/scroolbar/scroolbar'
import Navbar from '../../components/header/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';



const HomePage =() => {
    return(
        <>
            <Navbar />
            <Banner/>
            <About/>
            <Tech/>
            <Portfolio/>
            <Testimonial/>
            <Contact/>
            <Footer/>
            <Scrollbar/>
        </>
    )
};
export default HomePage;



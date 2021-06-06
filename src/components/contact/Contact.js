import React from 'react'
import ContactForm from './form'

import './contact.css'



function Contact() {
    return (
        <div id="contact" className="contact-page-area section-padding go-contact-area">
        <div className="container">
            <div className="row">
                <div className="col-lg-5 col-md-12 col-sm-12">
                    <div className="contact-page-item">
                        <h2>Kontaktirajte me ! </h2>
                        <p>Svakog trenutka sam spreman da odgovorim na Vaša pitanja i poruke, kao da dam druge informacije koje su Vam potrebne</p>
                        <div className="adress">
                            <h3>Adresa</h3>
                            <span>Stevana Mokranjca 18, Požarevac</span>
                        </div>
                        <div className="phone">
                            <h3>Telefon</h3>
                            <span>063 / 7 841 931</span>
                           
                        </div>
                        <div className="email">
                            <h3>Email</h3>
                            <span>marco.jovanovic.developer@gmail.com</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7 col-md-12 col-sm-12">
                    <div className="contact-area contact-area-2 contact-area-3">
                        <h2>Kontakt odmah !!!!</h2>
                        <div className="contact-form">
                            <ContactForm/>
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
    )
}

export default Contact

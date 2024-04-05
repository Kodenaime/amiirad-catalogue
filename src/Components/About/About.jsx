import React from 'react'
import './about.css'
import about from '../../Assets/about.webp'

const About = () => {
  return (
    <section className="story section container">
                <div className="story__container grid" id='contact'>
                    <div className="story__data">
                        <h2 className="section__title story__section-title">
                            About Us
                        </h2>
    
                        <p className="story__description">
                            "At Amiirad, we strive to lead the way in traditional-inspired fashion, fostering elegance, dignity, and a commitment to positive social values 
                        </p>
                        <p className="story__description">
                            <b>Mission Statement:</b>
                            "Empowering women to embrace their inherent beauty and dignity through the fusion of traditional styles with contemporary designs."
                        </p>
                        <p className="story__description">
                             <b>Vision Statement:</b>
                            "Our vision is to revolutionize the fashion industry by celebrating beauty, decency, and authenticity in every garment we create."
                        </p>
    
                        <a href="#products" className="button button--small">Discover</a>
                    </div>

                    <div className="story__images">
                        <img src={about} alt="" className="story__img" />
                        <div className="story__square"></div>
                    </div>
                </div>
            </section>
  )
}

export default About
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
    
                        <h1 className="story__title">
                            Inspirational dresses of <br /> this year
                        </h1>
    
                        <p className="story__description">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Nam, quaerat. Magni libero nostrum quaerat exercitationem sit, id nulla qui maxime!
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
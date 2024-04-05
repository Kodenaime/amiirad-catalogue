import React from 'react'
import './home.css'
import { FaCircleArrowRight } from "react-icons/fa6";
import home from '../../Assets/home.webp';
import dress4 from '../../Assets/dress4.jpg';

const Home = () => {
  return (


        <section className="home" id="home">
            <div className="home__container container grid">
                <div className="home__img-bg">
                  <img src={home} alt="home image" className="home__img" />
                </div>

                <div className="home__social">
                      <a href="https://www.instagram.com/amiirad.fashion?igsh=MTRtazN5YjhhMGdhNg==" target="_blank" className="home__social-link">
                          Facebook
                      </a>
                      {/* <a href="https://twitter.com/" target="_blank" className="home__social-link">
                          Twitter
                      </a> */}
                      <a href="https://www.instagram.com/amiirad.fashion?igsh=MTRtazN5YjhhMGdhNg==" target="_blank" className="home__social-link">
                          Instagram
                      </a>
                </div>

                <div className="home__data">
        <h1 className="home__title">New Clothing <br></br> Collection</h1>
        <p className="home__description">
            Latest arrival of the new dresses, 
            with a modern and exquisite design.
        </p>
        <span className="home__price">This is Amiirad</span>

        <div className="home__btns">
            <a href="#contact" className="button button--gray button--small">
                Let's Talk
            </a>

            <button className="button home__button">Discover</button>
        </div>
                </div>
            </div>
        </section>


  )
}

export default Home
import React from 'react'
import './home.css'
import { FaCircleArrowRight } from "react-icons/fa6";
import home from '../../Assets/home.webp';
import dress4 from '../../Assets/dress4.jpg';

const Home = () => {
  return (
//     <section classNameName="home section" id='home'>
//     <div classNameName="home-container container grid">

//         <div classNameName="home-content">
//           <h1 classNameName="home-title">
//             
//           </h1>
//           <p classNameName="home-text">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit.
//              Nesciunt eum beatae deserunt pariatur dolores asperiores animi laudantium at distinctio fugiat!
//           </p>

//           <a href="#catalogue" classNameName='button'>
//             Explore <FaCircleArrowRight classNameName='home-icon' />
//           </a>

//         </div>

//         <div classNameName="home-img">
//               <img src={dress1} alt="image of dress" />
//               <img src={dress4} alt="image of dress" />
//         </div>

//     </div>
// </section>

        <section className="home" id="home">
            <div className="home__container container grid">
                <div className="home__img-bg">
                  <img src={home} alt="home image" className="home__img" />
                </div>

                <div className="home__social">
                      <a href="https://www.facebook.com/" target="_blank" className="home__social-link">
                          Facebook
                      </a>
                      <a href="https://twitter.com/" target="_blank" className="home__social-link">
                          Twitter
                      </a>
                      <a href="https://www.instagram.com/" target="_blank" className="home__social-link">
                          Instagram
                      </a>
                </div>

                <div className="home__data">
        <h1 className="home__title">New Clothing <br></br> Collection</h1>
        <p className="home__description">
            Latest arrival of the new dresses, 
            with a modern and exquisite design.
        </p>
        <span className="home__price">$1245</span>

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
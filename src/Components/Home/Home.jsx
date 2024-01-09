import React from 'react'
import './home.css'
import { FaCircleArrowRight } from "react-icons/fa6";
import dress1 from '../../Assets/dress1.jpg';
import dress4 from '../../Assets/dress4.jpg';

const Home = () => {
  return (
    <section className="home section" id='home'>
    <div className="home-container container grid">

        <div className="home-content">
          <h1 className="home-title">
            New Clothing <br></br> Collection
          </h1>
          <p className="home-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Nesciunt eum beatae deserunt pariatur dolores asperiores animi laudantium at distinctio fugiat!
          </p>

          <a href="#catalogue" className='button'>
            Explore <FaCircleArrowRight className='home-icon' />
          </a>

        </div>

        <div className="home-img">
              <img src={dress1} alt="image of dress" />
              <img src={dress4} alt="image of dress" />
        </div>

    </div>
</section>
  )
}

export default Home
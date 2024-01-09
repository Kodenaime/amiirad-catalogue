import React from 'react'
import './new.css'
import dress2 from '../../Assets/dress2.jpg';
import { FaCircleArrowRight } from "react-icons/fa6";



const New = () => {
  return (
      <section className="new section" id="new">
        <h2 className="section-title">
          New Categories
        </h2>

        <div className="new-container conatainer grid">
          <article className='new-card'>
              <img src={dress2} alt="An image of a dress" className='new-img'/>

              <a href="#catalogue" className='new-link'>
                <h2 className='new-title'>
                  Gowns
                </h2>
                <FaCircleArrowRight className='new-icon' />
              </a>
          </article>
          <article className='new-card'>
              <img src={dress2} alt="An image of a dress" className='new-img'/>

              <a href="#catalogue" className='new-link'>
                <h2 className='new-title'>
                  Two piece
                </h2>
                <FaCircleArrowRight className='new-icon' />
              </a>
          </article>
          <article className='new-card'>
              <img src={dress2} alt="An image of a dress" className='new-img'/>

              <a href="#catalogue" className='new-link'>
                <h2 className='new-title'>
                  Two piece & Kimono
                </h2>
                <FaCircleArrowRight className='new-icon' />
              </a>
          </article>
          
        </div>

      </section>
  )
}

export default New
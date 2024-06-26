import React from 'react'
import './featured.css'

import image4 from '../../Assets/image4.png'
import image5 from '../../Assets/image5.png'
import image6 from '../../Assets/image6.png'



const Featured = () => {
  return (
     

      <section className="featured section container" id="featured">
                <h2 className="section__title">
                    Featured
                </h2>

                <div className="featured__container grid">
                    <article className="featured__card">
                        <span className="featured__tag">Checkout</span>

                        <img src={image4} alt="" className="featured__img" />

                        <div className="featured__data">
                            <h3 className="featured__title">Jazzmaster</h3>
                            <span className="featured__price">$1050</span>
                        </div>

                        <button className="button featured__button">Discover</button>
                    </article>

                    <article className="featured__card">
                        <span className="featured__tag">Checkout</span>

                        <img src={image5} alt="" className="featured__img" />

                        <div className="featured__data">
                            <h3 className="featured__title">Ingersoll</h3>
                            <span className="featured__price">$250</span>
                        </div>

                        <a href='#products' className="button featured__button">Discover</a>
                    </article>

                    <article className="featured__card">
                        <span className="featured__tag">Checkout</span>

                        <img src={image6} alt="" className="featured__img" />

                        <div className="featured__data">
                            <h3 className="featured__title">Rose gold</h3>
                            <span className="featured__price">$890</span>
                        </div>

                        <button className="button featured__button">Discover</button>
                    </article>
                </div>
            </section>


  )
}

export default Featured
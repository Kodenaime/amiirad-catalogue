import React from 'react'
import './products.css'
import dress4bg from '../../Assets/dress4bg.png'

const Products = () => {
  return (
    <section className="products section container" id="products">
                <h2 className="section__title">
                    Products
                </h2>

                <div className="products__container grid">
                    <article className="products__card">
                        <img src={dress4bg} alt="" className="products__img"/>

                        <h3 className="products__title">Gown</h3>
                        <span className="products__price">$1500</span>

                        <button className="products__button">
                            <i className='bx bx-shopping-bag'></i>
                        </button>
                    </article>

                    <article className="products__card">
                        <img src={dress4bg} alt="" className="products__img" />

                        <h3 className="products__title">Kimono</h3>
                        <span className="products__price">$1350</span>

                        <button className="products__button">
                            <i className='bx bx-shopping-bag'></i>
                        </button>
                    </article>

                    <article className="products__card">
                        <img src={dress4bg} alt="" className="products__img" />

                        <h3 className="products__title">Flower Gown</h3>
                        <span className="products__price">$870</span>

                        <button className="products__button">
                            <i className='bx bx-shopping-bag'></i>
                        </button>
                    </article>

                    <article className="products__card">
                        <img src={dress4bg} alt="" className="products__img" />

                        <h3 className="products__title">Kimono & piece</h3>
                        <span className="products__price">$650</span>

                        <button className="products__button">
                            <i className='bx bx-shopping-bag'></i>
                        </button>
                    </article>
                    <article className="products__card">
                        <img src={dress4bg} alt="" className="products__img" />

                        <h3 className="products__title">Kimono & piece</h3>
                        <span className="products__price">$650</span>

                        <button className="products__button">
                            <i className='bx bx-shopping-bag'></i>
                        </button>
                    </article>

                    <article className="products__card">
                        <img src={dress4bg} alt="" className="products__img" />

                        <h3 className="products__title">2 Piece</h3>
                        <span className="products__price">$950</span>

                        <button className="products__button">
                            <i className='bx bx-shopping-bag'></i>
                        </button>
                    </article>
                </div>
            </section>
  )
}

export default Products
import React from 'react'
import './products.css'
import { useState, useEffect } from 'react'
import image0 from '../../Assets/image0.png'
import image1 from '../../Assets/image1.png'
import image2 from '../../Assets/image2.png'
import image3 from '../../Assets/image3.png'
import image4 from '../../Assets/image4.png'
import image5 from '../../Assets/image5.png'
import image6 from '../../Assets/image6.png'
import image7 from '../../Assets/image7.png'
import image8 from '../../Assets/image8.png'
import image9 from '../../Assets/image9.png'
import image10 from '../../Assets/image10.png'
import image11 from '../../Assets/image11.png'
import image12 from '../../Assets/image12.png'
import image13 from '../../Assets/image13.png'
import image14 from '../../Assets/image14.png'
import image15 from '../../Assets/image15.png'
import image16 from '../../Assets/image16.png'
import image17 from '../../Assets/image17.png'
import image18 from '../../Assets/image18.png'
import image19 from '../../Assets/image19.png'


const data = [

    {
      id: 1,
      image: image0,
      title: 'JPS01',
      price: '#17,000',
    },
    {
      id: 2,
      image: image1,
      title: '2PT01',
      price: '#20,000',
    },
    {
      id: 3,
      image: image2,
      title: 'DRC01',
      price: '#16,000',      
    },
    {
      id: 4,
      image: image3,
      title: 'DRF01',
      price: '#17,000',      
    },   
   {
      id: 5,
      image: image4,
      title: 'WGS01',
      price: '#14,000',      
    },
    {
      id: 6,
      image: image5,
      title: 'JPS02',
      price: '#17,000',      
    },
    {
      id: 7,
      image: image6,
      title: 'JPS03',
      price: '#18,000',      
    },
    {
      id: 8,
      image: image7,
      title: 'DRF02',
      price: '#18,000',      
    },
    {
      id: 9,
      image: image8,
      title: 'WSK01',
      price: '#10,000',      
    },
    {
      id: 10,
      image: image9,
      title: 'AGW01',
      price: '#20,000',      
    },
    {
      id: 11,
      image: image10,
      title: 'DRC03',
      price: '#15,000',      
    },
    {
      id: 12,
      image: image11,
      title: 'DRC04',
      price: '#15,000',      
    },
    {
      id: 13,
      image: image12,
      title: 'PLS01',
      price: '#16,000',      
    },
    {
      id: 14,
      image: image13,
      title: '2PTO2',
      price: '#18,000',      
    },
    {
      id: 15,
      image: image14,
      title: 'DRC05',
      price: '#15,000',      
    },
    {
      id: 16,
      image: image15,
      title: 'KIP01',
      price: '#12,000',      
    },
    {
      id: 17,
      image: image16,
      title: 'BLC01',
      price: '#12,000',      
    },
    {
      id: 18,
      image: image17,
      title: 'WGF01',
      price: '#17,000',      
    },
    {
      id: 19,
      image: image18,
      title: '2PT03',
      price: '#17,000',      
    },
    {
      id: 20,
      image: image19,
      title: 'PPZ01',
      price: '#12,000',      
    },
    
  ]
  

const Products = () => {

    const [visible, setVisible] = useState(4);

    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 4);
    };

  return (
    <section className="products section container" id="products">
                <h2 className="section__title">
                    Products
                </h2>

                <div className="products__container grid">

                 {
                  data.slice(0, visible).map(({id, image, title, price}) => {
                    return (             
                  <article key={id} className="products__card">
                      <img src={image} alt="" className="products__img"/>

                       <h3 className="products__title">{title}</h3>
                       <span className="products__price">{price}</span>

                       <button className="products__button">
                       <i className='bx bx-shopping-bag'></i>
                       </button>
                  </article>
              )
          })
        } <button onClick={showMoreItems}>View More</button> 

       
                </div>
            </section>
  )
}

export default Products
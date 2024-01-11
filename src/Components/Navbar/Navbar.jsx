import React from 'react'
import { useState } from 'react'
import './navbar.css'
import logowhite from '../../Assets/logowhite.png'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'

import {RiServiceLine} from 'react-icons/ri'

import {BiMessageSquareDetail} from 'react-icons/bi'
import { BsFillCollectionPlayFill } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaCircleArrowRight } from "react-icons/fa6";


const Navbar = () => {

  const [activeNav, setActiveNav] = useState('#')

  const [isNavShow, setIsNavShow] = useState(false)

  return (

    <header>

        <div className="nav-container container" id="header">

            <div className="logo" id='#'>
                <img src={logowhite} width='45rem' height='45rem'  alt="Logo for the website" /> 
              
            </div>
          
            <div className={`nav-link ${isNavShow ? 'show-nav' : 'hide-nav'}`}>        
                <li><a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome className='nav-icon' />Home</a></li>
                <li><a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser className='nav-icon' />About</a></li>
                
                <li><a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine className='nav-icon' />Services</a></li>
                <li><a href="#catalogue" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><BsFillCollectionPlayFill className='nav-icon' />Catalogue</a></li>
                <li><a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail className='nav-icon' />Contact</a></li>
          
            </div>

            <button className="nav-toggle" onClick={() => setIsNavShow(!isNavShow)}>
                <FaBarsStaggered id='menu-bar'/>                
            </button>
        </div>

    </header>    
  )
}

export default Navbar
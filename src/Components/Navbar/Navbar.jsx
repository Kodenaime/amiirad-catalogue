import React from 'react'
// import { Link, NavLink } from 'react-router-dom'
import { useState, useRef } from 'react'
import './navbar.css'
import logopurple from '../../Assets/logopurple.png'
import { FaBarsStaggered } from "react-icons/fa6";
import { FaRegWindowClose } from "react-icons/fa";

// import {AiOutlineHome} from 'react-icons/ai'
// import {AiOutlineUser} from 'react-icons/ai'
// import {RiServiceLine} from 'react-icons/ri'
// import {BiMessageSquareDetail} from 'react-icons/bi'
// import { BsFillCollectionPlayFill } from "react-icons/bs";
// import { FaCircleArrowRight } from "react-icons/fa6";



const Navbar = () => {

    const navRef = useRef();

    const showNavbar = () => {
         navRef.current.classList.toggle('responsive_nav');
     }

  const [activeNav, setActiveNav] = useState('#');      

  const [isNavShow, setIsNavShow] = useState(false);

  return (

    // <header>

    //     <div classNameName="nav-container container" id="header">

    //         <div classNameName="logo" id='#'>
    //             <img src={logowhite} width='45rem' height='45rem'  alt="Logo for the website" /> 
              
    //         </div>
          
    //         <div classNameName={`nav-link ${isNavShow ? 'show-nav' : 'hide-nav'}`}>        
    //             <li><a href="#" onClick={() => setActiveNav('#')} classNameName={activeNav === '#' ? 'active' : ''}><AiOutlineHome classNameName='nav-icon' />Home</a></li>
    //             <li><a href="#about" onClick={() => setActiveNav('#about')} classNameName={activeNav === '#about' ? 'active' : ''}><AiOutlineUser classNameName='nav-icon' />About</a></li>
                
    //             <li><a href="#services" onClick={() => setActiveNav('#services')} classNameName={activeNav === '#services' ? 'active' : ''}><RiServiceLine classNameName='nav-icon' />Services</a></li>
    //             <li><a href="#catalogue" onClick={() => setActiveNav('#portfolio')} classNameName={activeNav === '#portfolio' ? 'active' : ''}><BsFillCollectionPlayFill classNameName='nav-icon' />Catalogue</a></li>
    //             <li><a href="#contact" onClick={() => setActiveNav('#contact')} classNameName={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail classNameName='nav-icon' />Contact</a></li>
          
    //         </div>

    //         <button classNameName="nav-toggle" onClick={() => setIsNavShow(!isNavShow)}>
    //             <FaBarsStaggered id='menu-bar'/>                
    //         </button>
    //     </div>

    // </header>    


    // <header className="header" id="header">
    //         <nav className="nav container">
    //             <a href='/' className="nav__logo">
    //                 <img src={logopurple} width='45rem' height='45rem'  alt="Logo for the website" /> 
    //             </a>

    //             <div ref={navRef}className="nav__menu" id="nav-menu">
    //                 <ul className="nav__list">
    //                     <li className="nav__item">
    //                         <a href="#home" className="nav__link active-link">Home</a>
    //                     </li>
    //                     <li className="nav__item">
    //                         <a href="#featured" className="nav__link">Featured</a>
    //                     </li>
    //                     <li className="nav__item">
    //                         <a href="#products" className="nav__link">Products</a>
    //                     </li>
    //                     <li className="nav__item">
    //                         <a href="#new" className="nav__link">New</a>
    //                     </li>
    //                 </ul>

    //                 <div onClick={showNavbar} className="nav__close" id="nav-close">
    //                     <FaRegWindowClose />
    //                 </div>
    //             </div>

    //             <div className="nav__btns">              

    //                 <div className="nav__toggle" id="nav-toggle">
    //                     <FaBarsStaggered id='menu-bar'/> 
    //                 </div>
    //             </div>
    //         </nav>
    //     </header>

    <header>
			<a href='/' className="nav__logo">
                     <img src={logopurple} width='45rem' height='45rem'  alt="Logo for the website" /> 
            </a>
			<nav ref={navRef}>
				<a href="#">Home</a>
				<a href="#about">About</a>
				<a href="#featured">Featured</a>
				<a href="#products">Products</a>
                <a href="#contact">Contact</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaRegWindowClose />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBarsStaggered />
			</button>
		</header>


  )
}

export default Navbar
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
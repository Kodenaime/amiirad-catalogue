import React from 'react'
import './footer.css'
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer section">
            <div className="footer__container container grid">
                <div className="footer__content">
                    <h3 className="footer__title">Our information</h3>

                    <ul className="footer__list">
                        <li>Abuja - Nigeria</li>
                        <li>Amiirad Fashion</li>
                        <li>0903 219 8831</li>
                    </ul>
                </div>
                <div className="footer__content">
                    <h3 className="footer__title">About Us</h3>

                    <ul className="footer__links">
                        <li>
                            <a href="#" className="footer__link">Funyin</a>
                        </li>
                        <li>
                            <a href="#" className="footer__link">Customer Support</a>
                        </li>
                        <li>
                            <a href="#about" className="footer__link">About Us</a>
                        </li>
                        <li>
                            <a href="#" className="footer__link">Copy Right</a>
                        </li>
                    </ul>
                </div>

                <div className="footer__content">
                    <h3 className="footer__title">Product</h3>

                    <ul className="footer__links">
                        <li>
                            <a href="#" className="footer__link">Road bikes</a>
                        </li>
                        <li>
                            <a href="#" className="footer__link">Mountain bikes</a>
                        </li>
                        <li>
                            <a href="#" className="footer__link">Electric</a>
                        </li>
                        <li>
                            <a href="#" className="footer__link">Accesories</a>
                        </li>
                    </ul>
                </div>

                <div className="footer__content">
                    <h3 className="footer__title">Social</h3>

                    <ul className="footer__social">
                        <a href="https://www.facebook.com/" target="_blank" className="footer__social-link">
                            <FaSquareFacebook />
                        </a>

                        <a href="https://twitter.com/" target="_blank" className="footer__social-link">
                            <FaSquareXTwitter />
                        </a>

                        <a href="https://www.instagram.com/" target="_blank" className="footer__social-link">
                            <FaSquareInstagram />
                        </a>
                    </ul>
                </div>
            </div>

            <span className="footer__copy">&#169; Amiirad. All rigths reserved 2024</span>
        </footer>
  )
}

export default Footer
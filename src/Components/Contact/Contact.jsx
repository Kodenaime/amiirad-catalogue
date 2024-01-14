import React from 'react'
import './contact.css'
import { MdMarkEmailRead } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import  { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

  const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mhf3d43', 'template_m9b2ozg', form.current, 'I_BDyGdsGPfHV4IZV')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()

  };


  return (
    <section className='section' id="contact">
      {/* <h5>get in touch</h5> */}
      <h2 className='section__title'>Contact</h2>

      <div className="wrapper contact-container">

        <div className="contact-left">
          <article className="contact">
            <MdMarkEmailRead className='contact-icon'/>
            <h4>Email</h4>
            <h5>amiirad.fashion@gmail.com</h5>
            <a href="mailto:amiirad.fashion@gmail.com" target='_blank' rel="noreferrer">Send a messge</a>
          </article>
          {/* <article className="contact">
            <FaLinkedin className='contact-icon'/>
            <h4>Linkedin</h4>
            <h5>Ekechukwu Daniel</h5>
            <a href="" target='_blank' rel="noreferrer">Send a messge</a>
          </article> */}
          <article className="contact">
            <FaSquareWhatsapp className='contact-icon'/>
            <h4>Whatsapp</h4>
            <h5>Amirad Fashion</h5>
            <a href="https://wa.me/+2349032198831?text=I'm%20interested%20in%20your%20dresses%20for%20purchase
            " target='_blank' rel="noreferrer">Send a messge</a>
          </article>
        </div>
        
        <div className="container-right">
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Full name' required />
            <input type="email" name='email' placeholder='Your email' required />
            <textarea name="message" rows="10" placeholder='Your message' required></textarea>
            <button type='submit' className='form-btn'>Send</button>
          </form>
        </div>

      </div>
      
    </section>
  )
}

export default Contact
import React from 'react';
import { motion } from 'framer-motion';

import { anims } from '../assets/animations';
import logo from '../assets/images/logo-full.png';

import '../styles/components/Footer.scss';

const Footer = () => {
  return (
    <motion.div
      className='footer'
      variants={anims} initial='hide' animate='show' exit='hide'>
      <div className='footer__top'>
        <img className='footer__logo' src={logo}/>
        <button className='footer__btn'>Email</button>
        <button className='footer__btn'>Contact</button>
      </div>
      <div className='footer__bolds'>
        <p className='footer__bold'>About Us</p>
        <p className='footer__bold'>Add your restaurant</p>
        <p className='footer__bold'>Work with us</p>
        <p className='footer__bold'>Get help</p>
      </div>
      <div className='footer__norms'>
        <p className='footer__text'>Privacy policy</p>
        <p className='footer__text'>Terms</p>
        <p className='footer__text'>Pricing</p>
      </div>
      <p className='footer__copyright'>&copy; Prime Dining 2020</p>
    </motion.div>
  )
}

export default Footer;
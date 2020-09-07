import React from 'react';
import { motion } from 'framer-motion';

import Search from './Search';
import hamburger from '../assets/images/hamburger.png';
import logo from '../assets/images/logo.png';
import { anims } from '../assets/animations';

import '../styles/components/TitleBar.scss';

const TitleBar = () => {
  return (
    <motion.div className='title-bar' variants={anims} initial='hide' animate='show' exit='hide'>
      <div className='title-bar__top'>
        <img className='title-bar__ham' src={hamburger} />
        <img className='title-bar__logo' src={logo} />
      </div>

      <Search />
    </motion.div>
  )
}

export default TitleBar;
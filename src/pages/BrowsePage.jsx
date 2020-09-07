import React from 'react';
import { motion } from 'framer-motion';

import american from '../assets/images/american.png'
import french from '../assets/images/french.png'
import italian from '../assets/images/italian.png'
import japanese from '../assets/images/japanese.png'

import buca from '../assets/images/buca.jpg';
import canoe from '../assets/images/canoe.jpg';
import carisma from '../assets/images/carisma.jpg';
import scaramouche from '../assets/images/scaramouche.jpg';

import concierge from '../assets/images/concierge.png';

import '../styles/pages/BrowsePage.scss';
import { useHistory } from 'react-router-dom';
import { anims } from '../assets/animations';

const browseAnims = {
  hide: {
    opacity: 0,
    transition: {
      duration: 1
    }
  },
  show: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      duration: 1,
      staggerChildren: 0.4
    }
  }
}

const imgAnims = {
  hide: {
    x: 25,
    opacity: 0,
    transition: {
      duration: 1
    }
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      opacity: 1,
      duration: .7
    }
  }
}

const BrowsePage = () => {
  const history = useHistory();

  return (
    <motion.div className='browse' variants={browseAnims} initial='hide' animate='show' exit='hide'>
      <div className='browse__carousel'>
        <p className='browse__description'>A fine dining experience from the comfort of your own home</p>
        <p className='browse__learn'>Learn More</p>
      </div>
      <div className='browse__sliders'>
        <h3 className='browse__subheading'>Cuisines</h3>
        <div className='browse__cuisines'>
          <motion.img
            className='browse__cuisine'
            src={italian} variants={imgAnims}
            onClick={e => { history.push('/browse/italian') }}
          />
          <motion.img className='browse__cuisine bc--japanese' src={japanese} variants={imgAnims}/>
          <motion.img className='browse__cuisine bc--french' src={french} variants={imgAnims}/>
          <motion.img className='browse__cuisine bc--american' src={american} variants={imgAnims}/>
        </div>

        <h3 className='browse__subheading'>Concierge Services</h3>
        <div className='browse__larger-imgs'>
          <motion.img className='browse__larger-img' src={concierge} variants={imgAnims}/>
          <motion.img className='browse__larger-img' src={concierge} variants={imgAnims}/>
        </div>

        <h3 className='browse__subheading'>Your Recent Experiences</h3>
        <div className='browse__larger-imgs'>
          <motion.img className='browse__larger-img' src={canoe} variants={imgAnims}/>
          <motion.img className='browse__larger-img' src={buca} variants={imgAnims}/>
        </div>

        <h3 className='browse__subheading'>Popular For Date Nights</h3>
        <div className='browse__larger-imgs'>
          <motion.img className='browse__larger-img' src={scaramouche} variants={imgAnims}/>
          <motion.img className='browse__larger-img' src={carisma} variants={imgAnims}/>
        </div>

        <motion.div className='browse__show-container' variants={anims}>
          <button className='browse__show'>
            Show More
          </button>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default BrowsePage;
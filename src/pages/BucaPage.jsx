import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Accordion, Card } from 'react-bootstrap';

import { anims } from '../assets/animations';
import buca from '../assets/images/buca.jpg';

import '../styles/pages/BucaPage.scss';
import Collapsible from '../components/Collapsible';

const bucaAnims = {
  ...anims,
  show: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      duration: 1,
      staggerChildren: 0.4
    }
  }
}

const BucaPage = () => {
  return (
    <motion.div
      className='buca'
      variants={bucaAnims}
      initial='hide' animate='show' exit='hide'
    >
      <motion.div variants={anims}>
        <img
          className='buca__img'
          src={buca}
        />
        <div className='buca__details'> 
          <h2 className='buca__title'>Buca</h2>
          <div className='buca__rating'>
            4.9
            <p className='buca__num-rate'>(120)</p>
          </div>
          <p className='buca__timing'>40-50 min</p>
          <p className='buca__exp'>Full experience</p>
          <div className='buca__contact'>
            <p className='buca__text-l'>Talk To Concierge</p>
            <p className='buca__text-l'>Restaurant info</p>
          </div>
        </div>
      </motion.div>

      <motion.div className='buca__dropdowns'>
        <Collapsible name='Experiences' index={0}/>
        <Collapsible name='Food Menu' index={1} />
        <Collapsible name='Drinks Menu' index={2} />
      </motion.div>

      <motion.div className='buca__show-container' variants={anims}>
        <button className='buca__show'>
          Your Orders (0)
        </button>
      </motion.div>
    </motion.div>
  )
}

export default BucaPage;
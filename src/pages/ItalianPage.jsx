import React from 'react';
import { motion } from 'framer-motion';
import { useHistory } from 'react-router-dom';

import { anims } from '../assets/animations';
import filter from '../assets/images/filter.svg';
import buca from '../assets/images/buca.jpg';
import sotto from '../assets/images/sotto.jpg';
import toca from '../assets/images/toca.jpg';

import '../styles/pages/ItalianPage.scss';

const italianAnims = {
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

const restaurantAnims = {
  hide: {
    y: 25,
    opacity: 0,
    transition: {
      duration: 1
    }
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1
    }
  }
}

const ItalianPage = () => {
  const history = useHistory();

  return (
    <motion.div className='italian' variants={italianAnims} initial='hide' animate='show' exit='hide'>
      <h2 className='italian__title'>Italian</h2>
      <p className='italian__nearby'>25 restaurants near you</p>
      <img className='italian__filter' src={filter} />

      <div className='italian__restaurants'>
        <motion.div className='italian__restaurant' variants={restaurantAnims} onClick={() => history.push('/browse/buca')}>
          <img src={buca} />
          <div className='italian__details'>
            <div className='italian__deet-row'>
              <h3 className='italian__res-name'>Buca</h3>
              <p className='italian__text'>Full experience</p>
            </div>
            <div className='italian__deet-row'>
              <h3 className='italian__rating'>4.9	&#9734;</h3>
              <p className='italian__text'>40-50 min</p>
            </div>
          </div>
        </motion.div>
        <motion.div className='italian__restaurant' variants={restaurantAnims}>
          <img src={sotto} />
          <div className='italian__details'>
            <div className='italian__deet-row'>
              <h3 className='italian__res-name'>Ristorante Sotto Sotto</h3>
              <p className='italian__text'>Plating experience</p>
            </div>
            <div className='italian__deet-row'>
              <h3 className='italian__rating'>4.7	&#9734;</h3>
              <p className='italian__text'>25-35 min</p>
            </div>
          </div>
        </motion.div>
        <motion.div className='italian__restaurant' variants={restaurantAnims}>
          <img src={toca} />
          <div className='italian__details'>
            <div className='italian__deet-row'>
              <h3 className='italian__res-name'>TOCA</h3>
              <p className='italian__text'>Food experience</p>
            </div>
            <div className='italian__deet-row'>
              <h3 className='italian__rating'>4.8 &#9734;</h3>
              <p className='italian__text'>20-30 min</p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div className='italian__show-container' variants={anims}>
        <button className='italian__show'>
          Show More
        </button>
      </motion.div>
    </motion.div>
  )
}

export default ItalianPage;
import React from 'react';
import { motion } from 'framer-motion';
import { useHistory, Link } from 'react-router-dom';

import '../styles/pages/LandingPage.scss';

const landingAnims = {
  hide: {
    opacity: 0,
    transition: {
      duration: 1
    }
  },
  show: {
    opacity: 0.92,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 2
    }
  }
}

const welcomeAnims = {
  hide: {
    opacity: 0,
    transition: {
      duration: 1
    }
  },
  show: {
    opacity: 1,
    transition: {
      duration: 4
    }
  }
}

const arrowAnims = {
  hide: {
    x: -25,
    opacity: 0,
    transition: {
      duration: 1
    }
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 2
    }
  }
}

const LandingPage = () => {
  const history = useHistory();
  return (
    <motion.div className='landing'
    variants={landingAnims}
    initial='hide'
    animate='show'
    exit='hide'>
      <motion.div
        className='landing__overlay'
        variants={landingAnims}
        initial='hide'
        animate='show'
        exit='hide'
      >
        <motion.h1
          className='landing__title'
          variants={welcomeAnims}
        >
          Welcome
        </motion.h1>
        <motion.h2
          className='landing__subtitle'
          variants={welcomeAnims}
        >to your premium dining experience</motion.h2>
        <motion.h2
          className='landing__shocker'
          variants={welcomeAnims}
        >Right at home.</motion.h2>
        <Link className='landing__link' to='/browse'>
          <motion.div
            className='landing__arrow'
            variants={arrowAnims}
          >&#10163;</motion.div>
        </Link>
      </motion.div>

      <motion.video
        className='landing__video'
        autoPlay loop muted
        variants={landingAnims}
        initial='hide'
        animate='show'
        exit='hide'
      >
        <source src='https://s3-us-west-2.amazonaws.com/converterpoint-22/encodings/04e7b5bc794f1cd8374ad4888ce9b043.webm' type='video/webm'/>
      </motion.video>
    </motion.div>

  )
}

export default LandingPage;
import React from 'react';
import { motion } from 'framer-motion';

import { anims } from '../assets/animations';

import '../styles/components/Search.scss';

const Search = () => {
  return (
    <motion.div className='search__container' variants={anims} initial='hide' animate='show' exit='hide'>
      <p className='search__deliver'>Deliver now</p>
      <p className='search__address'>76 King St. W</p>
      <input className='search__input' type='text' placeholder='Search...' />
    </motion.div>
  )
}

export default Search;
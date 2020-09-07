import React, { useState } from 'react'
import { motion } from 'framer-motion';
import {Accordion, Card} from 'react-bootstrap';
import CollapsibleCard from './CollapsibleCard';

import check from '../assets/images/selected-check.svg';
import arrow from '../assets/images/dropdown-arrow.svg';

import '../styles/components/Collapsible.scss';

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

const arrowAnims = {
  collapse: {
    rotate: -90,
    transition: {
      duration: .25
    }
  },
  expand: {
    rotate: 0,
    transition: {
      duration: .25
    }
  }
}

const Collapsible = ({name, index}) => {
  const [selected, setSelected] = useState(false);
  const [dropdown, setDropdown] = useState(null);

  return (
    <motion.div className='collapsible' variants={restaurantAnims}>
      <Accordion onSelect={e => { if (e) { setDropdown(`${e}`) } else { setDropdown(null) }}}>
        <Card className='collapsible__toggle-container'>
          <Accordion.Toggle className='collapsible__toggle' as={Card.Header} eventKey={`${index}`}>
            {
              selected ?
              <img src={check}/> : null
            }
            <p className={`collapsible__name ${selected ? 'collapsible__name--selected' : ''}`}>{name}</p>
            <motion.img src={arrow} variants={arrowAnims} initial='collapse' animate={dropdown ? 'expand' : 'collapse'} />
            {
              selected ?
              <p className='collapsible__selected'>Selected: Full Experience</p>
              : null
            }
          </Accordion.Toggle>
          <CollapsibleCard toggleSelection={select => setSelected(select)}/>
        </Card>
      </Accordion>
    </motion.div>
  )

}
export default Collapsible
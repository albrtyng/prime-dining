import React, { useState } from 'react';
import {Accordion, Card} from 'react-bootstrap';

import '../styles/components/CollapsibleCard.scss';

const CollapsibleCard = ({toggleSelection}) => {
  const [selected, setSelected] = useState(false);

  return (
    <Accordion.Collapse className='ccard' eventKey="0">
      <Card.Body className='ccard__body'>
        <div className='ccard__card'>
          <h3 className='ccard__card-title'>Full Experience</h3>
          <p className='ccard__card-price'>$99.99</p>
          <p className='ccard__card-text'>Experience the full atmosphere of dining at Buca from the comfort of your own home.</p>
          <p className='ccard__card-text'>Includes:</p>
          <p className='ccard__card-text'>Server</p>
          <p className='ccard__card-text'>Silverware Set</p>
          <p className='ccard__card-text'>Spotify Playlist</p>
          <p className='ccard__card-text'>Table Decor</p>
          <button
            className={`ccard__btn ${selected ? 'ccard__btn--selected': ''}`}
            onClick={e => {
              setSelected(true)
              toggleSelection(true);
            }}
          >
            {
              selected ?
              'Added' :
              'Add'
            }
          </button>
        </div>
        <div className='ccard__card'>
          <h3 className='ccard__card-title'>Plating Experience</h3>
          <p className='ccard__card-price'>$29.99</p>
          <p className='ccard__card-text'>Enjoy your meal as you would at Buca with the ambiance of being in the restaurant.</p>
          <p className='ccard__card-text'>Includes:</p>
          <p className='ccard__card-text'>Silverware Set</p>
          <p className='ccard__card-text'>Spotify Playlist</p>
          <p className='ccard__card-text'>Table Decor</p>
          <button className='ccard__btn'>Add</button>
        </div>
        <div className='ccard__card'>
          <h3 className='ccard__card-title'>Culinary Experience</h3>
          <p className='ccard__card-price'>$19.99</p>
          <p className='ccard__card-text'>Enjoy your meal as you would at Buca.</p>
          <p className='ccard__card-text'>Includes:</p>
          <p className='ccard__card-text'>Silverware Set</p>
          <button className='ccard__btn'>Add</button>
        </div>
      </Card.Body>
    </Accordion.Collapse>
  )
}

export default CollapsibleCard;
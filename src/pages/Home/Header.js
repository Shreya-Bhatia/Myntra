import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'; 
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'; 
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'; 
import {faHeart} from '@fortawesome/free-regular-svg-icons'
import {faBell} from '@fortawesome/free-regular-svg-icons'
import './header.css';

const Header = () => {
  return (
    <header className='head'>
      <div className="sect">
      <div className='fwd'>fwd<FontAwesomeIcon icon={faAngleDown} style={{color:'#EF1865',marginTop:'3%'}}/></div>
      <div className='crown'></div>
      <div className='insider'>BECOME <p className="ins">INSIDER<FontAwesomeIcon icon={faAngleRight} /></p></div>
      <div className='right'>
        <FontAwesomeIcon icon={faBell} style={{height:'3vh',color:'#333'}}/>
        <FontAwesomeIcon icon={faHeart} style={{height:'3vh', color:'#333'}}/>
        
        <FontAwesomeIcon icon={faBagShopping} style={{height:'3vh', color:'black'}}/> 
        
      </div></div>
    </header>
  );
};

export default Header;

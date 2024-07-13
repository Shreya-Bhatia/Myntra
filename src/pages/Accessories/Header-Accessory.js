import React from "react";
import './Header-Accessory.css';
import myntra from '../Home/logos/myntra.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'; 
import {faHeart} from '@fortawesome/free-regular-svg-icons';
import {faShareNodes} from '@fortawesome/free-solid-svg-icons';
import {faArrowLeftLong} from '@fortawesome/free-solid-svg-icons';
const Header_Accessory=()=>{
    return(
        <header className="here">
            <div className="left">
                <div className="back"><FontAwesomeIcon icon={faArrowLeftLong}/></div>
                <div className="myntra"><img src={myntra} alt="" height={'8vh'} width={'8vw'}/></div>
                <div className="brand">SASSAFRAS</div>{/*Here insert the brand name*/}
            </div>
            <div className="right">
                <div className="share"><FontAwesomeIcon icon={faShareNodes}/></div>
                <div className="heart"><FontAwesomeIcon icon={faHeart} /></div>
                <div className="bag"><FontAwesomeIcon icon={faBagShopping}/></div>
            </div>
        </header>
    );
};
export default Header_Accessory;
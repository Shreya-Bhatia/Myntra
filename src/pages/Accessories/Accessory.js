import React from 'react';
import './Accessory.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'; 
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';
import  HeaderAccessory from './Header-Accessory';
import productImg from '../LeaderBoard/20d6e971-a65c-49d4-85e9-053f71d13e071681276633859DressesMISSPAPWomenCo-OrdsMISSPAPWomenDressesMISSPAPWomenDre1.jpg'
const Access=()=>{
    return(
        <div className="ablock">
            <HeaderAccessory></HeaderAccessory>
            <div className="dress"><img src={productImg} alt="" /></div>
            <div className="circles">
                <div className="first"></div>
                <div className="second"></div>
                <div className="third"></div>
                <div className="fourth"></div>
            </div>
            <div className="name">
                <div className="brand-name">SASSAFRAS</div>
                <div className="product-name">Black & Pink Floral Printed Wrap Dress</div>
            </div>
            <div className="price"><div className="mrp">MRP</div><FontAwesomeIcon icon={faIndianRupeeSign}></FontAwesomeIcon><div className="rate">719</div></div>
            <hr color='#EF1865'/>
            <div className="offer-head"><div className="symbol"></div><p className="title">Exclusive Offer</p></div>
            <div className="sub-head">Free accessory on purchase of Rs3000 or more on the 15th of every month!</div>
            <div className="accessories">
                <div className="accessory"></div>
                <div className="accessory"></div>
                <div className="accessory"></div>
                <div className="accessory"></div>
            </div>
            <hr color='#EF1865'/>
            <div className="buttons">
                <div className="wishlist">WishList <FontAwesomeIcon icon={faHeart} style={{color:'red'}}></FontAwesomeIcon></div>
                <div className="addToBag">Add To Bag <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon></div>
            </div>
        </div>
    );
};
export default Access;
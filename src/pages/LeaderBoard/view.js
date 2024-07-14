import React from "react";
import './view.css';
import HeaderAccessory from "../Accessories/Header-Accessory";
import Image from "./20d6e971-a65c-49d4-85e9-053f71d13e071681276633859DressesMISSPAPWomenCo-OrdsMISSPAPWomenDressesMISSPAPWomenDre1.jpg"
function View() {
    return(
        
        <div className="view-page">
            <HeaderAccessory></HeaderAccessory>
            <div className="body">
            <div className="head">Your #OOTD :</div>
            <div className="image"><img src={Image} alt="" /></div>
        </div></div>
    );
};
export default View;
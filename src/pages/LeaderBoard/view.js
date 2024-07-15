import React, { useEffect, useState } from "react";
import './view.css';
import HeaderAccessory from "../Accessories/Header-Accessory";
import { doc, getDoc } from "firebase/firestore";
import {db} from '../../firebase'
import Image from "./20d6e971-a65c-49d4-85e9-053f71d13e071681276633859DressesMISSPAPWomenCo-OrdsMISSPAPWomenDressesMISSPAPWomenDre1.jpg"


function View() {

    const [ootd,setOOTD] = useState("");
    const user = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {

        async function getOOTD() {

            const mootd = await getDoc(doc(db,"OOTD",user.uid));
            const mootdData = mootd.data();
            
            setOOTD(mootdData);
        }

        getOOTD();

        // Set up interval to refetch data every 1 seconds
    	const interval = setInterval(getOOTD, 1000);

    	return () => clearInterval(interval);
    },[]);

    return(
        
        <div className="view-page">
            <HeaderAccessory></HeaderAccessory>
            <div className="body">
            <div className="head">Your #OOTD :</div>
            <div className="image"><img src={ootd.img} alt="" /></div>
            <div className="ootdlikes">No. of likes : {ootd.no_of_likes}</div>
        </div></div>
    );
};
export default View;
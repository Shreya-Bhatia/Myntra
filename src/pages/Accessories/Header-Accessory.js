import React from "react";
import './Header-Accessory.css';
import myntra from '../Home/logos/myntra.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'; 
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { useNavigate ,useLocation} from "react-router-dom";

const Header_Accessory = () => {
    const navigate = useNavigate();
    const location=useLocation();
    const UploadPage=location.pathname==='/upload';
    function goBack() {
        if(UploadPage)
        navigate('/Lead'); 
        else
        navigate('/home');
    }

    return (
        <header className="here">
            <div className="left">
                <div className="back" onClick={goBack}><FontAwesomeIcon icon={faArrowLeftLong} style={{height:'4vh'}}/></div>
                <div className="myntra"><img src={myntra} alt="" height={'25vh'} width={'25vw'} /></div>
                {!UploadPage &&<div className="brand">SASSAFRAS</div>} {/* Here insert the brand name */}
            </div>
            <div className="right">
                {UploadPage&&<div className="share-upload" style={{position:"absolute",right:"2%"}}><FontAwesomeIcon icon={faShareNodes} onClick={() => { /* Handle share click */ }} /></div>}
                {!UploadPage&&<div className="share"><FontAwesomeIcon icon={faShareNodes} onClick={() => { /* Handle share click */ }} /></div>}
                {!UploadPage&&<div className="heart"><FontAwesomeIcon icon={faHeart} /></div>}
                {!UploadPage&&<div className="bag"><FontAwesomeIcon icon={faBagShopping} /></div>}
            </div>
        </header>
    );
};

export default Header_Accessory;

import Header from '../Home/Header/Header';
import Footer from '../Home/Footer/Footer';
import './Lead.css'
import React, { useRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'; 

function Lead() {
const fileInput=useRef(null);
const handleButtonClick=()=>{
    fileInput.current.click();
};
    

    
	return (
		<div className="Lead">
			<Header></Header>
            <div className="Leadin">
			<div className='score'><p>Your score: 1000</p><div className="imag"></div></div>
			<div className='board'>
                <div className="leaderBoard">
                    <h6 className='lead'>LeaderBoard</h6>
                    <div className="list">
                        <div className="person"><div className="name">1. Sophia Martinez</div><div className="score-is"><p className='streak'>1000</p><div className="itag"></div></div></div>
                        <div className="person"><div className="name">2. Sophia Martinez</div><div className="score-is"><p className='streak'>1000</p><div className="itag"></div></div></div>
                        <div className="person"><div className="name">3. Sophia Martinez</div><div className="score-is"><p className='streak'>1000</p><div className="itag"></div></div></div>
                    </div>
                </div>
                <div className="title-here">#fashionStreak</div>
                <div className="sub">Share your everyday fashion to maintain your fashion streak and win exciting prizes!</div>
            </div>
			<button className='ootd' onClick={handleButtonClick}>
                    Upload Your #OOTD
                    <input 
                        type="file" 
                        accept="image/*"
                        ref={fileInput} 
                        
                        style={{ display: 'none' }} 
                    />
                </button>
			
			<div></div></div>
            <div className='others'><p>See what others are wearing today</p><FontAwesomeIcon icon={faAngleDown} style={{marginTop:'1%' ,marginLeft:'1%'}}/></div>
            <div className="outfits"></div>
			<Footer></Footer>
		</div>
	);
}

export default Lead;
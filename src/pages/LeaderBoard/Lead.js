import Header from '../Home/Header/Header';
import Footer from '../Home/Footer/Footer';
import './Lead.css';
import { useNavigate } from "react-router-dom";
import React, { useRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'; 
import {faHeart} from '@fortawesome/free-regular-svg-icons'
import {db} from '../../firebase'
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { getAuth } from 'firebase/auth';

function Lead() {
    const navigate = useNavigate();
    const storage = getStorage();
    const auth = getAuth();

    // const fileInput=useRef(null);
    
    // const handleButtonClick=async ()=>{
    //     await fileInput.current.click();
    // };

    const [file, setFile] = useState();
    const [isLoading,setLoad] = useState(false);

	function handleChange(event) {
		setFile(event.target.files[0])
	}
    
    async function submitOOTD(e) {

		e.preventDefault();

        const uid = auth.currentUser.uid;

		if(file==null) {
            return;
        }

        setLoad(true);

		const imgref = ref(storage, 'ootd_images/' + uid);
		await uploadBytes(imgref,file);
		
        const uootd = {
            img: "",
            users_liked: [],
            no_of_likes: 0,
            id: uid
        };

		await getDownloadURL(imgref).then((url) => {
			uootd.img = url;
		});

		const OOTDRef = doc(db,"OOTD",uid);
		await setDoc(OOTDRef, uootd);

        setLoad(false);

        alert('OOTD uploaded successfully...');
	}
    function goToUpload() {
		navigate('/upload'); 
	}
	return (
		<div className="Lead">
			<Header></Header>
            <div className="Leadin">
			<div className='score'><p>Your score: </p><div className='num'><p>1000</p><div className="imag"></div></div></div>
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
            
			<div>
            <button className="ootd" onClick={goToUpload}>Upload Your #OOTD</button></div></div>
            <div className='others'><p>See what others are wearing today</p><FontAwesomeIcon icon={faAngleDown} style={{marginTop:'1%' ,marginLeft:'1%'}}/></div>
            <div className="outfits">
                <div className="outfit">
                    <div className="like">
                           <FontAwesomeIcon icon={faHeart} style={{height:'3vh', color:'red', marginLeft:'33vw',marginTop:'2.4vh'}} />
                    </div>
                </div>
                <div className="outfit">
                    <div className="like">
                           <FontAwesomeIcon icon={faHeart} style={{height:'3vh', color:'red', marginLeft:'33vw',marginTop:'2.4vh'}} />
                    </div>
                </div>
                <div className="outfit">
                    <div className="like">
                           <FontAwesomeIcon icon={faHeart} style={{height:'3vh', color:'red', marginLeft:'33vw',marginTop:'2.4vh'}} />
                    </div>
                </div>
                <div className="outfit">
                    <div className="like">
                           <FontAwesomeIcon icon={faHeart} style={{height:'3vh', color:'red', marginLeft:'33vw',marginTop:'2.4vh'}} />
                    </div>
                </div>
            </div>
            
			<Footer></Footer>
		</div>
	);
}

export default Lead;
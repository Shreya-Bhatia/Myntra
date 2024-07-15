import Header from '../Home/Header/Header';
import Footer from '../Home/Footer/Footer';
import './Lead.css';
import { useNavigate } from "react-router-dom";
import React, { useEffect, useRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'; 
import {faHeart as nlike} from '@fortawesome/free-regular-svg-icons'
import { faHeart as like } from '@fortawesome/free-solid-svg-icons'
import {db} from '../../firebase'
import { useState } from "react";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { arrayRemove, arrayUnion, doc, getDoc, setDoc, Timestamp } from "firebase/firestore";
import { collection, query, where, getDocs, orderBy, limit, increment, updateDoc } from "firebase/firestore";
import moment from 'moment/moment';

function Lead() {
    const navigate = useNavigate();
    const storage = getStorage();
    const user = JSON.parse(localStorage.getItem('user'));
    const [streakCount,setCount] = useState(0);
    
    const getUser = async () => {
        const userRef = doc(db,"users",user.uid);
        const userDoc = await getDoc(userRef);
        setCount(userDoc.data().streak_count);
    };

    getUser();

    const [OOTDarrf,setOOTD] = useState("");
    const [lead,setlead] = useState("");
    const [canUpload,setUpload] = useState(false);

    async function likeOOTD(id,liked) {
        const ootdRef = doc(db, "OOTD", id);
        if (liked) {
            await updateDoc(ootdRef, {
                users_liked: arrayRemove(user.uid),
                no_of_likes: increment(-1)
            });
        }
        else {
            await updateDoc(ootdRef, {
                users_liked: arrayUnion(user.uid),
                no_of_likes: increment(1)
            });
        }
        
    }

    function checkUpload(ootd_time) {
        if (ootd_time == null) {
            return true;
        }

        const today = moment(new Date()).format("DD-MM-YYYY").toString();

        if (today == ootd_time) {
                return false;
        }

        return true;
    }

    useEffect(() => {

        async function getOOTD() {
            const OOTDarr = [];
            const q = query(collection(db, "OOTD"), where("id", "!=", user.uid));
            const qSnap = await getDocs(q);

            qSnap.forEach((doc) => {
                OOTDarr.push(doc.data());
            });

            const mootd = await getDoc(doc(db,"OOTD",user.uid));
            const mootdData = mootd.data();
            setUpload(checkUpload(mootdData.ootd_time));

            const ofinal = OOTDarr.map((item) => {

                    const liked = item.users_liked.includes(user.uid);
                
                    return <div className="outfit" style={{'backgroundImage': `url(${item.img})`}}>
                        <div className="like">
                               <FontAwesomeIcon onClick={() => likeOOTD(item.id,liked)} icon={liked ? like : nlike} style={{height:'25px', color:'red', paddingRight: '10px', paddingTop: '10px'}} />
                        </div>
                    </div>;
            });
        
            setOOTD(ofinal);
            
            const leadArr = [];
            const qlead = query(collection(db, "users"), orderBy("streak_count", "desc"), limit(3));
            const qleadSnap = await getDocs(qlead);
            qleadSnap.forEach((doc) => {
                leadArr.push(doc.data());
            });
            const leadf = leadArr.map((item,index) => <div className="person"><div className="name">{index+1}. {item.uname}</div><div className="score-is"><p className='streak'>{item.streak_count}</p><div className="itag"></div></div></div>);
            setlead(leadf);
        }

        getOOTD();

        // Set up interval to refetch data every 1 seconds
    	const interval = setInterval(getOOTD, 1000);

    	return () => clearInterval(interval);

    },[]);

    function goToUpload() {
		navigate('/upload'); 
	}
    function goToView() {
        navigate('/view');
    }

	return (
		<div className="Lead">
			<Header></Header>
            <div className="Leadin">
			<div className='score'><p>Your score: </p><div className='num'><p>{streakCount}</p><div className="imag"></div></div></div>
			<div className='board'>
                <div className="leaderBoard">
                    <h6 className='lead'>LeaderBoard</h6>
                    <div className="list">
                        {lead}
                        {/* <div className="person"><div className="name">1. Sophia Martinez</div><div className="score-is"><p className='streak'>1000</p><div className="itag"></div></div></div>
                        <div className="person"><div className="name">2. Sophia Martinez</div><div className="score-is"><p className='streak'>1000</p><div className="itag"></div></div></div>
                        <div className="person"><div className="name">3. Sophia Martinez</div><div className="score-is"><p className='streak'>1000</p><div className="itag"></div></div></div> */}
                    </div>
                </div>
                <div className="title-here">#fashionStreak</div>
                <div className="sub">Share your everyday fashion to maintain your fashion streak and win exciting prizes!</div>
            </div>
            
			<div style={{justifyContent:'center',display:'flex',flexDirection:'column'}}>
            {
                canUpload
                ? <button className="ootd" onClick={goToUpload}>Upload Your #OOTD</button>
                : <button className="ootd" onClick={goToView}>View Your #OOTD</button>
            }</div></div>
            <div className='others'><p>See what others are wearing today</p><FontAwesomeIcon icon={faAngleDown} style={{marginTop:'1%' ,marginLeft:'1%'}}/></div>
            <div className="outfits">
                {OOTDarrf}
            </div>
            
			<Footer></Footer>
		</div>
	);
}

export default Lead;
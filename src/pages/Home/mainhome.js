import { getAuth, signOut } from "firebase/auth"
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function MainHome() {

	const auth = getAuth();
	
	const user = JSON.parse(localStorage.getItem('user'));
	const navigate = useNavigate();
	
	function signout() {
		signOut(auth).then(() => {
			alert("You have signed out successfully !!");
			localStorage.setItem('user',{});
		}).catch((error) => {
			alert("There are some server issues !!");
		});
	}
	function goToLeaderboard() {
		navigate('/Lead'); 
	}
	function goToProduct() {
		navigate('/Accessory'); 
	}
	function goToColor() {
		navigate('/color'); 
	}
	return (
		<div className="mainhome">
			<Header></Header>
			Hello {user.displayName}
			<button onClick={signout}>Logout</button>
			<button onClick={goToLeaderboard}>LeaderBoard</button>
			<button onClick={goToProduct}>Product</button>
			<button onClick={goToColor}>COlor</button>
			<Footer></Footer>
		</div>
	);
}

export default MainHome;
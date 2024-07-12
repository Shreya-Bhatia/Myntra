import { getAuth, signOut } from "firebase/auth"
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { useNavigate } from "react-router-dom";
const auth = getAuth();
import { useEffect, useState } from "react";

function MainHome() {

	const auth = getAuth();
	const user = auth.currentUser;
	const navigate = useNavigate();
	function signout() {
		signOut(auth).then(() => {
			alert("You have signed out successfully !!");
		}).catch((error) => {
			alert("There are some server issues !!");
		});
	}
	function goToLeaderboard() {
		navigate('/leaderboard'); 
	}
	return (
		<div className="mainhome">
			<Header></Header>
			Hello {user.displayName}
			<button onClick={signout}>Logout</button>
			<button onClick={goToLeaderboard}>LeaderBoard</button>
			<Footer></Footer>
		</div>
	);
}

export default MainHome;
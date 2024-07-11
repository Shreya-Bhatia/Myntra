import { getAuth, onAuthStateChanged } from "firebase/auth"
import { useState } from "react";
import { Outlet, Router } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const auth = getAuth();

function Home() {

	const navigate = useNavigate();

	onAuthStateChanged(auth, (user) => {
		if (user) {
			navigate("/home");
		} else {
			navigate("/signin");
		}
	});

	return (
		<div className="home">
			<Outlet/>
		</div>
	);
}

export default Home;
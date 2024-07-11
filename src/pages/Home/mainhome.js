import { getAuth, signOut } from "firebase/auth"

const auth = getAuth();

function MainHome() {

	const user = auth.currentUser;

	function signout() {
		signOut(auth).then(() => {
			alert("You have signed out successfully !!");
		}).catch((error) => {
			alert("There are some server issues !!");
		});
	}

	return (
		<div className="mainhome">
			Hello, {user.displayName}
			<button onClick={signout}>Logout</button>
		</div>
	);
}

export default MainHome;
import './signin.css'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import app from '../../firebase';

const provider = new GoogleAuthProvider();

const auth = getAuth();

function signIn() {
	signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}


function SignIn() {
	return (
		<div className="signin">
			<div className="maintext">
			Let the <span style={{'-webkit-text-stroke' : '1px deeppink', 'color': 'transparent'}}>FASHION</span> journey begin !!
			</div>
			<button className='signinbutton' onClick={signIn}>Sign In To Shop Now</button>
		</div>
	);
}

export default SignIn;
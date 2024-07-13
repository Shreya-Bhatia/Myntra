import './signin.css'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import {app,db} from '../../firebase'
import { doc, getDoc, setDoc } from "firebase/firestore";

const provider = new GoogleAuthProvider();

const auth = getAuth();

function signIn() {
	signInWithPopup(auth, provider)
  .then(async (result) => {
    localStorage.setItem('user',JSON.stringify(auth.currentUser));
    const userRef = doc(db,"users",auth.currentUser.uid);
    const userDoc = await getDoc(userRef);
    if(!userDoc.exists()) {
      await setDoc(
        userRef, {
          uid: auth.currentUser.uid,
          streak_count: 0
        }
      );
    }
  }).catch((error) => {
    alert('There are some server issues....');
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
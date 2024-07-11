// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCljmYqNexQMxu2gv87yL7ktVvKrms1tLI",
  authDomain: "myntra-7957d.firebaseapp.com",
  projectId: "myntra-7957d",
  storageBucket: "myntra-7957d.appspot.com",
  messagingSenderId: "529433622169",
  appId: "1:529433622169:web:6fd033391fcf13c4f82a08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app
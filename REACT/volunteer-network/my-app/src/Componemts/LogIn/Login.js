import React, { useContext } from 'react';
import './LogIn.css'
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Google from '../volunteer-network-main/google.png'
import {Link} from "react-router-dom";
import { useHistory, useLocation } from 'react-router-dom';
import logo from '../volunteer-network-main/logos/Group 1329.png'
import Container from 'react-bootstrap/Container';
import { UserId } from '../../App';

const Login = () => {
const [users,setUser]=useContext(UserId);

    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/Home" } };
    
    const firebaseConfig = {
            apiKey: "AIzaSyDJDOs2F14OKFqjh010cOuV37zu6_0Lrhw",
            authDomain: "volunteer-network-fb8d5.firebaseapp.com",
            projectId: "volunteer-network-fb8d5",
            storageBucket: "volunteer-network-fb8d5.appspot.com",
            messagingSenderId: "733278369999",
            appId: "1:733278369999:web:45ff701fdeb3b839599fba"
     };
      const app = initializeApp(firebaseConfig);

      const handelClick=()=>{
        const provider = new GoogleAuthProvider();
        
        const auth = getAuth();

signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    const {email, displayName,photoURL}=user

    const isSignIn={
          name:displayName,
          email:email,
          photo:photoURL
    }

    localStorage.setItem('data', JSON.stringify(isSignIn))
    
    setUser(isSignIn)
    history.replace(from);
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
  });
      }
    return (
        <div className='body'>
          <Container>
          <div>
         <Link to="/Home">
        <img className="logoSize margin" src={logo} alt="" />
        </Link>
        </div>

            <div className='googleDiv '>
            <button className='GoogleButton ' onClick={handelClick}><img className='google' src={Google} alt="" /> Sign In with Google</button>
            </div>
            </Container>
        </div>
    );
};

export default Login;
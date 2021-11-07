import React, { useContext } from 'react';
import * as firebase from "firebase/app";

// import { initializeApp} from 'firebase/app';
// import firebaseConfig from './firebaseConfig';
// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import "firebase/auth";
import { userId } from '../../App';
// import firebase from 'firebase/index'

// import auth from 'firebase';

const LogIn = () => {
    
    const [user, setUser]=useContext(userId);

    // const app = initializeApp(firebaseConfig);
    const firebaseConfig = {
      apiKey: "AIzaSyAtU4779Lb2fupD8-T5LYPzGTMtFt0u1nE",
      authDomain: "burj-al-arab-32191.firebaseapp.com",
      projectId: "burj-al-arab-32191",
      storageBucket: "burj-al-arab-32191.appspot.com",
      messagingSenderId: "484574932326",
      appId: "1:484574932326:web:60639bea65fb7f44a92ca7"
    };
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
  }
  
    const handelClickGoogle=()=>{
      try{
        const provider = new firebase.auth.GoogleAuthProvider();
     
        firebase.auth().signInWithPopup( provider)
      .then((result) => {
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // console.log(token);
        const user = result.user;
        const {email, displayName, photoURL}=user;
        const SignInUser={
          name:displayName,
          email:email,
          photo:photoURL
        }
        setUser(SignInUser)
        firebase.auth().currentUser.getIdToken( true).then(function(idToken) {
          sessionStorage.setItem('token',idToken)
      
          console.log(idToken);
      
          
        }).catch(function(error) {
          console.log(error);
        });
      }).catch((error) => {
        // const credential = GoogleAuthProvider.credentialFromError(error);
      });

      }catch(err){
        console.log(err);
      }
     
  }
  



    return (
        <div>
            <h1>this is log in</h1>
            <button onClick={handelClickGoogle}>sign In with Google</button>
            <br />
            <button >sign In with PhoneNumber</button>
        </div>   
    );
};

export default LogIn;
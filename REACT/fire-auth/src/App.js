import logo from './logo.svg';
import './App.css';
import * as firebase from "firebase/app"
import { GoogleAuthProvider } from "firebase/auth";
import {getAuth, signInWithPopup ,createUserWithEmailAndPassword,updateProfile,signInWithEmailAndPassword} from "firebase/auth";
import firebaseConfig from './Faiebaceconfig';
import { useState } from 'react';
import { signOut } from "firebase/auth";
import New from './New';
import { FacebookAuthProvider } from "firebase/auth";




firebase.initializeApp(firebaseConfig)
function App() {


  const [newUser, setNewUser]=useState(false)
    
  const provider = new GoogleAuthProvider();
  const fbProvider = new FacebookAuthProvider();
  const [user,setUser]=useState({
    signIn:false,
    name:"",
    email:"",
    password:"",
    photo:"",
    phoneNumber:""
  })

  const handelSubmit=(e)=>{
    if(newUser && user.email && user.password){
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, user.email, user.password)
  .then(userCredential => {
    const user = userCredential.user;
    updateUserName(userCredential.name)

  })
  .catch(error => {
  });
    }

    if(!newUser && user.email && user.password){
      const auth = getAuth();
       signInWithEmailAndPassword(auth, user.email, user.password)
  .then(userCredential => {
    const user = userCredential.user;
    console.log('xxx',userCredential);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
    }
  }


  const handelclickSingIn=()=>{

    const auth = getAuth();
   signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    const {displayName,photoURL,email,phoneNumber}=user;
    const singInUser={
      signIn:true,
      name:displayName,
      email:email,
      photo:photoURL,
      phoneNumber:phoneNumber
    }
    setUser(singInUser)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
  }


  
  const handelFbSignIn=()=>{
    const auth = getAuth();
   signInWithPopup(auth, fbProvider)
  .then((result) => {
    // The signed-in user info.
    const users = result.user;
   console.log("fb user after sign in", users);
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;

    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = FacebookAuthProvider.credentialFromError(error);

    // ...
  });
  }



  const handelclickSingOut=()=>{
    const auth = getAuth();
   signOut(auth).then(() => {
  // Sign-out successful.
  const singOutUser={
    singIn:false,
    name:"",
    email:"",
    photo:"",
    password:"",
    phoneNumber:"",
    error:""
  }
  setUser(singOutUser)
     }).catch((error) => {
  // An error happened.
    });
  }



  const handelBlur=(e)=>{
    let isFileValid=true;
    if (e.target.name==="email"){
      isFileValid=/\S+@\S+\.\S+/.test(e.target.value)
      
    }
    if (e.target.name==="password"){
        const isPasswordValid=e.target.value.length>7;
        const isPasswordTest=/\d{1}/.test(e.target.value)
        isFileValid=isPasswordValid && isPasswordTest
    }
    if(isFileValid){
             let newUserInfo={...user};
             newUserInfo[e.target.name] = e.target.value;
             setUser(newUserInfo);
    }

  }


  const updateUserName=name=>{
    const auth = getAuth();
     updateProfile(auth.currentUser, {
    displayName: name
    }).then(() => {
      console.log("User name update successfully");
    }).catch((error) => {
      console.log(error);
    });
  }
  return (
    <div className="App">
      {
        user.signIn ?<button onClick={handelclickSingOut}>Sing Out</button>:
        <button onClick={handelclickSingIn}>Sing in</button>
      }
      <br />
      <button onClick={handelFbSignIn}>Sing in with Facebook</button>


      {
        user.signIn && 
        <div className="uaerId">
          <img src={user.photo} alt="" />
          <p>Wellcome {user.name}</p>
          <p>Your Email:- {user.email}</p>
        </div>
      }


      <h1>oue own Authentication</h1>
      <p>Name:- {user.name}</p>
      <p>email:- {user.email}</p>
       <h3>password:- {user.password}</h3>
       <br />
       <input type="checkbox" onChange={()=>setNewUser(!newUser)} name="newUser" id="" />
       <label htmlFor="newUser">New user sign up</label>
      <form onSubmit={handelSubmit}>
       {newUser && <input name="name" type="text"  onBlur={handelBlur} placeholder="Your name" />}
        <br />
        <input type="text" name="email" onBlur={handelBlur} placeholder="Enter your Email" required/>
        <br />
        <input type="password" name="password" onBlur={handelBlur} placeholder="Enter 8 caracter Password" required/>
        <br />
        <input type="submit" value="Submit" />
      </form> 
      <p style={{color:"red"}}>{user.error}</p>

   <New></New>

    </div>
  );
}


export default App;

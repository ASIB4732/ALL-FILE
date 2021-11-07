import React from 'react';
import { initializeApp } from 'firebase/app';
import firebaseConfig from '../../firebaseConfig';
import { getAuth, signInWithPopup,updateProfile, GoogleAuthProvider,signOut,createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';
const LogIn = () => {
    const [newUser,setNewUser]=useState(false)
    const [user, setUser]=useState({
        isSignIn:false,
        newUser:false,
        name:"",
        email:"",
        photo:"",
        password:"",
        error:'',
        success:false
      })
      const handelGoogleSignIn=()=>{
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const users = result.user;
        const {displayName,photoURL,email}=users
        const isSignInUser={
        isSignIn:true,
        name:displayName,
        email:email,
        photo:photoURL
       };
       setUser(isSignInUser);
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
      }
      const handelGoogleSignOut =()=>{
        const auth = getAuth();
        signOut(auth).then(() => {
            const isSignOutUser={
                isSignIn:false,
                name:"",
                email:"",
                photo:"",
               };
               setUser(isSignOutUser);
        }).catch((error) => {
        });
      }


    const handelChinge=(e)=>{
        let isFormValid=true;
        if(e.target.name==='email'){
            isFormValid=/\S+@\S+\.\S+/.test(e.target.value)
        }
        if(e.target.name==="password"){
            const isPasswordNumber=e.target.value.length>7;
            const isPasswordTest=/\d{1}/.test(e.target.value);
            isFormValid=isPasswordTest && isPasswordNumber;
        }
        if(isFormValid){
        const newUserInfo={...user}
        newUserInfo[e.target.name]=e.target.value
        setUser(newUserInfo);

        }
    }


    const handelSubmit=(e)=>{
     if(newUser && user.password && user.email){
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, user.email, user.password)
          .then((userCredential) => {
            const user = userCredential.user;
            const newUSerInfo={...user}
              newUSerInfo.error='';
              newUSerInfo.success=true
            setUser(newUSerInfo)
            upDateUserName(user.name)
          })
          .catch((error) => {
            const errorMessage = error.message;
              const newUSerInfo={...user}
              newUSerInfo.error=errorMessage
              newUSerInfo.success=false
            setUser(newUSerInfo)
          });
     }
     if(!newUser && user.password && user.email){
        const auth = getAuth();
        signInWithEmailAndPassword(auth, user.email, user.password)
          .then((userCredential) => {
            const user = userCredential.user;
            const newUSerInfo={...user}
            newUSerInfo.error='';
            newUSerInfo.success=true
          setUser(newUSerInfo)
          console.log("Sigmn in user info0",user);
          })
          .catch((error) => {
            const errorMessage = error.message;
            const newUSerInfo={...user}
            newUSerInfo.error=errorMessage
            newUSerInfo.success=false
          setUser(newUSerInfo)
          });
     }
     e.preventDefault();
    }

    const upDateUserName=name=>{
      const auth = getAuth();
updateProfile(auth.currentUser, {
  displayName: user.name
}).then(() => {
  console.log('UserName updated successfully');
}).catch((error) => {
  console.log(error);
});
    }
    const provider = new GoogleAuthProvider();
      const app = initializeApp(firebaseConfig);
    return (
        <div>
            {
                user.isSignIn ? <button onClick={handelGoogleSignOut}>Sing Out with google</button>: <button onClick={handelGoogleSignIn}>Sing In with google</button>
            }
            
             {
                 user.isSignIn && <div>
                     <h2>Name:- {user.name}</h2>
                     <h2>Email:- {user.email}</h2>
                     <img src={user.photo} alt="" />
                 </div>
             }
             

             <h1>oue own authentication</h1>
                 <h2>Wellcome {user.name}</h2>
                 <h2>Email:- {user.email}</h2>
                 <p>Password:- {user.password}</p>
                 <input type="checkbox" onChange={()=>setNewUser(!newUser)} name="newUser" id="" />
                 <label htmlFor="newUser">Crieat a new account</label>
             <form  onClick={handelSubmit}>
                 {newUser && <input type="text" onBlur={handelChinge} name="name" placeholder="Enter Your Name"/>}
                 <br />
                <input type="email" name="email" onBlur={handelChinge} id="" placeholder="Enter your Email" required/>
                 <br />
                 <input type="password" name="password" id="" onBlur={handelChinge}  placeholder="Enter your Password" required/>
                 <br />
                 <input type="submit" value={newUser ? 'Sign Up' : 'Sing In'} />
             </form>
             <p style={{color:"red"}}>{user.error}</p>
             {user.success && <p style={{color:"green"}}>Successfull {newUser ?"sign up" : "Loged In"}</p>}
        </div>
    );
};

export default LogIn;
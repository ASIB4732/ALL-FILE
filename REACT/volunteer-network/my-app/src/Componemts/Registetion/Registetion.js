import React, { useContext, useState } from 'react';
import './Registetion.css'
import { useParams } from 'react-router';
import logo from '../volunteer-network-main/logos/Group 1329.png'
import {Link} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import { UserId } from '../../App';

const Registetion = () => {
    const {user}=useParams()
    const data = JSON.parse(localStorage.getItem('data'));

    const [userInfo, setUserInfo]=useState({
        name:'',
        email:'',
        date:'',
        Desicription:'',
        Organize:''
    })
   
    console.log(userInfo)
    const HandelForm=(e)=>{

        const name=document.getElementById('name').value
        const email=document.getElementById('email').value
        const date=document.getElementById('date').value
        const Desicription=document.getElementById('Desicription').value
        const Organize=document.getElementById('Organize').value

        const info={...userInfo};
        info.name=name
        info.email=email
        info.date=date
        info.Desicription=Desicription
        info.Organize=Organize
        setUserInfo(info)
        
        e.preventDefault();
    }
    
    return (
        <div>
            <div className="d-flex justify-content-around">
        <div>
         <Link to="/Home">
        <img className="logoSize margin" src={logo} alt="" />
        </Link>
        </div>
        </div>
        
        <Container>
          <div className='form'>
          <h4><strong>Ragister as a volunteer on {user}</strong></h4>

          <form action="">
              <div className='formFlix dflex align-items-center'>
              <p>Name:- </p>
              <input id='name' name='name' type="text"  defaultValue={data.name}/>
              </div>
              
              <div className='formFlix d-flex align-items-center'>
              <p>Email:- </p>
              <input id='email' name='email' type="email" defaultValue={data.email} />
              </div>

              <div className='formFlix d-flex align-items-center'>
              <p>Date:- </p>
              <input id='date' type="date"/>
              </div>

              <div className='formFlix d-flex align-items-center'>
              <p>Desicription:- </p>
              <input id='Desicription' type="text"  defaultValue={'Desicription...'}/>
              </div>

              <div className='formFlix d-flex align-items-center'>
              <p>Organize Books at the library. </p>
              <input id='Organize' type="text"  defaultValue={user}/>
              </div>
               <input onClick={HandelForm} className='inputSubmit ' type="submit" value="Regustation" />
          </form>
          </div>
        </Container>
        </div>
    );
};

export default Registetion;
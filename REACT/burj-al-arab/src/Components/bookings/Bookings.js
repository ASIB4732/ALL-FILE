import React, { useContext, useEffect, useState } from 'react';
import { userId } from '../../App';
import './Bookings.css'
const Bokings = () => {
    const [bookings, setBookings]=useState([]);
    const [user, setUser]=useContext(userId)
    
        useEffect(()=>{
        fetch('http://localhost:5000/bookings?email='+user.email, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization:`Bearer ${sessionStorage.getItem('token')}`
        }
        })
       .then(res=>res.json())
       .then(data=>{
        setBookings(data)
       })
    },[])

    return (
        <div>
            <button>See bookings detail</button>
            <h3>Number of Booking:- {bookings.length}</h3>
            
            {
                bookings.map(data=><li className="box">
                    Name:- {data.name}
                    <br />
                    <h4>Form:-</h4> {data.chakIn}
                    <h4>to:-</h4> {data.chakOut}
                </li>)
            }
        </div>
    );
};

export default Bokings;
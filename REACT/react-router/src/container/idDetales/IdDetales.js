import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./detales.css"

const IdDetales = () => {
    const {id}=useParams()
    const [userId, setUserId] = useState({})
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/users/${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setUserId(data))
        
    },[])
    console.log(userId);
    return (
        <div className="box">
            <h1> Detales of this id:- {id}</h1>
            <p>Name:- {userId.name}</p>
            <p>Phone:- {userId.phone}</p>
            <p>Email:- {userId.email}</p>
            <p>Website:- {userId.website}</p>
            
        </div>
    );
};

export default IdDetales;
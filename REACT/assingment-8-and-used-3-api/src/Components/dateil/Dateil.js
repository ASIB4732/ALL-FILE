import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Dateil.css'
import Comment from '../comment/Comment'
const Dateil = () => {
    const {id}=useParams()
    const [data,setData]=useState({})
    useEffect(()=>{
        const url=`https://jsonplaceholder.typicode.com/posts/${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])

    
    return (
        <div>
           <div className="linkData">
           <h1>this is Data of id number:- {data.id}</h1>
            <h4>USer Id:- {data.userId}</h4>
            <h2>Title:- {data.title}</h2>
            <p>body:- {data.body}</p>
           </div>
           <div>
               <Comment></Comment>
           </div>
        </div>
    );
};

export default Dateil;
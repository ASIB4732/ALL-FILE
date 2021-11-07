import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Comment.css'
const Comment = () => {
    const {id}=useParams()
    const [comment,setComment]=useState({})
    useEffect(()=>{
        const url=`https://jsonplaceholder.typicode.com/comments?postId=${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setComment(data[0]))
    },[])

    return (
        <div className="comment">
            <h1 className="h1">Comment</h1>
            <h1>Name:- {comment.name}</h1>
            <h2>Body:- {comment.body}</h2>
            <p>Email:- {comment.email}</p>
            <p>Id:- {comment.id}</p>
            <p>PostId:- {comment.postId}</p>
        </div>
    );
};

export default Comment;
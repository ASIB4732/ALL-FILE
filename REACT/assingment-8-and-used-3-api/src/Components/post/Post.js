import React, { useEffect, useState } from 'react';
import PostData from '../postData/PostData';
import '../postData/PostData.css'
const Post = () => {
    const [post,SetPost]=useState([])
    useEffect(()=>{
        const url="https://jsonplaceholder.typicode.com/posts"
        fetch(url)
        .then(res=>res.json())
        .then(data=>SetPost(data))
    },[])

    return (
        <div className='post'>
            {
                post.map(data=><PostData post={data}></PostData>)
            }
            
        </div>
    );
};

export default Post;
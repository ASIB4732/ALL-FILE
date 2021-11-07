import React, { useEffect } from 'react';
import { useState } from 'react';
import UserPanel from '../userPanel/UserPanel';

const User = () => {
    const [user, setUser]= useState([])
    useEffect(()=>{
        const url="https://jsonplaceholder.typicode.com/users"
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setUser(data)
        })
    },[])
    return (
        <div>
            {
                user.map(data=><UserPanel data={data}></UserPanel>)
            }
            
        </div>
    );
};

export default User;
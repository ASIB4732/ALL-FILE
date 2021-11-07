import React from 'react';
import "./UserPanel.css"
import {
    BrowserRouter as Router,

    Link
  } from "react-router-dom";
const UserPanel = (props) => {
    const {name,phone,email,id}=props.data
    return (
        <div className="user">
            <h3>Name:- {name}</h3>
            <p>Phone:- {phone}</p>
            <p>Email:- {email}</p>
            <p><Link to={`/${id}`}>Show Detales of {id}</Link></p>
        </div>
    );
};

export default UserPanel;
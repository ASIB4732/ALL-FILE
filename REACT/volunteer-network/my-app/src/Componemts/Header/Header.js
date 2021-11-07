import React from 'react';
import Button from 'react-bootstrap/Button';
import './Header.css'
import {Link} from "react-router-dom";
import logo from '../volunteer-network-main/logos/Group 1329.png'
const Header = () => {
    return (
        <div>
         <div className="d-flex justify-content-around"> 
        <div>
         <Link to="/Home">
        <img className="logo margin" src={logo} alt="" />
        </Link>
        </div>

         
        <nav className=" margin">
            <Link className="Links" to="/Home">Home</Link>
            <Link className="Links" to="/Donation">Donation</Link>
            <Link className="Links" to="/Event">Event</Link>
            <Link className="Links" to="/Blog">Blog</Link>
        </nav>
        <div>
        {/* <Link to="/Register"> */}
        <Link to="/logIn">
            <Button className='margin RegisterButton'>Register</Button>
        </Link>
        <Link to="/Admin">
            <Button className='margin' variant="secondary">Admin</Button>
        </Link>
        </div>
        </div>
        </div>
    );
};

export default Header;
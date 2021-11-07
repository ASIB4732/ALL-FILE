import React from 'react';
import './Header.css'
import logo from './logo.png'
const Header = () => {
    return (
        <div className="headre">
            <img src={logo} alt="" />
           <nav>
               <a href="https://www.udemy.com/">Categoties</a>
               <a href="https://www.udemy.com/organization-growth/request-demo/?locale=en_US&mx_pg=httpcachecontextsme-list&next=https%3A%2F%2Fwww.udemy.com%2F&ref=ufb_header">Udemy dusniess</a>
               <a href="https://www.udemy.com/teaching/?ref=teach_header">Teach on Udemy</a>
               <a href="https://www.udemy.com/join/login-popup/?locale=en_US&response_type=html&next=https%3A%2F%2Fwww.udemy.com%2Fteaching%2F%3Fref%3Dteach_header">Log in</a>
               <a href="https://www.udemy.com/join/instructor-signup/?locale=en_US&response_type=html&next=https%3A%2F%2Fwww.udemy.com%2Fteaching%2F%3Fref%3Dteach_header&ref=bai_header">Sign up</a>
               </nav>
        </div>
    );
};

export default Header;
import React from 'react'
import {RxHamburgerMenu} from "react-icons/rx";
import {BsCurrencyDollar} from "react-icons/bs";
import {RiEnglishInput} from "react-icons/ri";
import { HiOutlineUserCircle } from "react-icons/hi";

const Navbar = () => {
  return (
    <div className="navbar container">
        <div className="left">
            <div className="hamburger icon">
                <RxHamburgerMenu/>
            </div>
            <div className="logo">
                <h1>Hotel<span>.hub</span></h1>
            </div>
            <div className="pages">
                <p>Last Minute Deals</p>
                <p>Blog</p>
                <p>About us</p>
                <p>Contacts</p>
            </div>
        </div>
        <div className="right">
            <div className="currency icon">
                <BsCurrencyDollar/>
            </div>
            <div className="language icon">
                <RiEnglishInput/>
            </div>
            <div className="profile icon">
                <HiOutlineUserCircle/>
            </div>
        </div>
    </div>
  )
}

export default Navbar
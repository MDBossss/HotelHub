import {RxHamburgerMenu} from "react-icons/rx";
import {BsCurrencyDollar} from "react-icons/bs";
import {RiEnglishInput} from "react-icons/ri";
import { HiOutlineUserCircle } from "react-icons/hi";
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar container">
        <div className="left">
            <div className="hamburger icon">
                <RxHamburgerMenu/>
            </div>
            <div className="logo">
                <NavLink to="/" className="no-outline"><h1>Hotel<span>.hub</span></h1></NavLink>
            </div>
            <div className="pages">
                <NavLink to="/deals" className="no-outline"><p>Last Minute Deals</p></NavLink>
                <NavLink to="/blog" className="no-outline"><p>Blog</p></NavLink>
                <NavLink to="/about" className="no-outline"><p>About us</p></NavLink>
                <NavLink to="/contact" className="no-outline"><p>Contacts</p></NavLink>
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
import {RxHamburgerMenu} from "react-icons/rx";
import {BsCurrencyDollar} from "react-icons/bs";
import {RiEnglishInput} from "react-icons/ri";
import { HiOutlineUserCircle } from "react-icons/hi";
import {RxCross1} from "react-icons/rx";
import {NavLink} from "react-router-dom";
import { useState,useEffect } from "react";
import {motion,AnimatePresence} from "framer-motion";

const variants = {
    initial: { opacity: 0, height: 0 },
    animate: { opacity: 1, height: 300 },
    exit: { opacity: 0, height: 0, padding: 0 }
}

const Navbar = () => {

    const [showMobileMenu,setShowMobileMenu] = useState<boolean>(false);

    useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth > 992){
                setShowMobileMenu(false);
            }
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);


  return (
    <>
        <div className="navbar container">
            <div className="left">
                <div className="hamburger icon">
                    {showMobileMenu ? 
                        <RxCross1 onClick={() => setShowMobileMenu(false)}/> :
                        <RxHamburgerMenu onClick={() => setShowMobileMenu(true)}/>
                    } 
                </div>
                <div className="logo">
                    <NavLink to="/" className="no-outline" onClick={() => setShowMobileMenu(false)}><h1>Hotel<span>.hub</span></h1></NavLink>
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
        <AnimatePresence>
        {showMobileMenu && 
        <motion.div 
            className="mobile-pages" 
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            >
            <NavLink 
                to="/deals" 
                className="no-outline" 
                onClick={() => setShowMobileMenu(false)}
                >
                    <p>Last Minute Deals</p>
            </NavLink>
            <NavLink 
                to="/blog" 
                className="no-outline" 
                onClick={() => setShowMobileMenu(false)}
                >
                    <p>Blog</p>
            </NavLink>
            <NavLink 
                to="/about" 
                className="no-outline" 
                onClick={() => setShowMobileMenu(false)}
                >
                    <p>About us</p>
            </NavLink>
            <NavLink 
                to="/contact" 
                className="no-outline" 
                onClick={() => setShowMobileMenu(false)}
                >
                    <p>Contacts</p>
            </NavLink>
            <div className="mobile-settings">
                 <div className="mobile-currency icon">
                    <BsCurrencyDollar/>
                </div>
                <div className="mobile-language icon">
                    <RiEnglishInput/>
                </div>
            </div>
        </motion.div>}
        </AnimatePresence>
    </>
  )
}

export default Navbar

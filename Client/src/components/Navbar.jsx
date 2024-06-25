import React, {useState} from "react";
import { Link } from "react-router-dom";
import LoadingBar from "./Loadingbar";
import { disablePageScroll, enablePageScroll } from 'scroll-lock';
import { MdMenu } from "react-icons/md";

const Navbar = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen,setIsOpen] = useState(false);


  useState(()=>{
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  })


  return (
    <><LoadingBar className={`${isLoading ? "" : "hidden"}`}/>
    <div className={`navbar-container ${isLoading ? "hidden": ""}`}>
      { isLoading ? disablePageScroll() : enablePageScroll() }
    <div className={`nav-main`}>
      <div className="company-logo">
        <Link to="/" className="logo-effect">
          {/* <GiMountainRoad className="mountain"/> */}
          <img src="/images/image.png" alt="" />
          <span>C</span>HALHITSIR
        </Link>
      </div>
      <div className="company-options">
          <Link to="/services" className="link-services">Services</Link>
          <Link to="/about-us" className="link-about">About Us</Link>
          <Link to="/team" className="link-team">Team</Link>
          <Link to="/login" className="link-login">Login</Link>
          <Link to="/signup" id="sign-up">Sign Up</Link>
      </div>
      <MdMenu  className="menu-small" onClick={()=>setIsOpen(!isOpen)}/> 
      { isOpen ? <div className={`company-options-small`}>
          <Link to="/services" className="link-services">Services</Link>
          <Link to="/about-us" className="link-about">About Us</Link>
          <Link to="/team" className="link-team">Team</Link>
          <Link to="/login" className="link-login">Login</Link>
          <Link to="/signup" id="sign-up">Sign Up</Link>
      </div> : <></> }
    </div>
    </div>
    </>
  );
};

export default Navbar;

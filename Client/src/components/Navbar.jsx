import React, {useContext, useEffect, useState} from "react";
import { Link } from "react-router-dom";
import LoadingBar from "./Loadingbar";
import { disablePageScroll, enablePageScroll } from 'scroll-lock';
import { MdMenu } from "react-icons/md";
import { ServiceContext } from "../contexts/ServiceContextProvider";

const Navbar = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen,setIsOpen] = useState(false);


  useEffect(()=>{
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  },[isLoading])

  const { serviceRef } = useContext(ServiceContext);

  const pressService = () => {
    serviceRef.current.scrollIntoView({ behavior: "smooth" });
  }

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
          <button className="link-services" onClick={pressService}>Services</button>
          <Link to="/about-us" className="link-about">About Us</Link>
          <Link to="/team" className="link-team">Team</Link>
          <Link to="/login" className="link-login">Login</Link>
          <Link to="/signup" id="sign-up">Sign Up</Link>
      </div>
      <MdMenu  className="menu-small" onClick={()=>setIsOpen(!isOpen)}/> 
      { isOpen ? <div className={`company-options-small`}>
          <button className="link-services">Services</button>
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

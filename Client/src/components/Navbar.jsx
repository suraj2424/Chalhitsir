import React, {useState} from "react";
import { Link } from "react-router-dom";
import LoadingBar from "./Loadingbar";
const Navbar = () => {
  const [isLoading, setIsLoading] = useState(true);
  useState(()=>{
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  })
  return (
    <div>
      <LoadingBar className={`${isLoading ? "" : "hidden"}`}/>
    <div className={`nav-main ${isLoading ? "hidden": ""}`}>
      <div className="company-logo">
        <Link to="/" className="logo-effect">
          <span>C</span>HAL<span>H</span>IT<span>S</span>IR
        </Link>
      </div>
      <div className="company-options">
          <Link to="/services" className="link-services">Services</Link>
          <Link to="/about-us" className="link-about">About Us</Link>
          <Link to="/team" className="link-team">Team</Link>
          <Link to="/login" className="link-login">Login</Link>
          <Link to="/signup" id="sign-up">Sign Up</Link>
      </div>
    </div>
    </div>
  );
};

export default Navbar;

import React, { useState, useEffect } from "react";
import LoadingBar from "./Loadingbar"

const AboutUs = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 2000ms = 2s, the same duration as the loading bar animation

    return () => clearTimeout(timer); // cleanup on component unmount
  }, []);

  return (
    <div className="about-us-container">
      <LoadingBar />
      <div className={`about-us-inner ${isLoading ? 'hidden' : ''}`}>
        <h1>About Us</h1>

        <p>
          We are a team of passionate software developers. We specialize in web development, mobile app development, and UI/UX design. Our mission is to provide high-quality, responsive, and secure digital solutions that meet our clients' needs.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
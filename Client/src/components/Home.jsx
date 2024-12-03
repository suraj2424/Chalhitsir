import React, { useEffect, useState } from "react";
import Maps from "./Maps";
import Services from "./Services"
const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    document.title = "Homepage - Chalhitsir";
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  });

  const incidents = [
    {
      incident:"Avalanche near Rocky Peak",
      date:"Jan 10, 2024"
    },
    {
      incident:"Hiker lost in Blue Ridge Mountains",
      date:"Feb 5, 2024"
    },
    {
      incident:"Severe weather warning in Alpine Region",
      date:"Mar 15, 2024"
    }
  ];

  return (
    <div className={`landing-page-container ${isLoading ? "hidden" : ""} `}>
      <div className="hero-section">
        <div className="hero-media">
          <video
            src="/videos/homescreen.mp4"
            className=""
            loop
            autoPlay
            muted
            playsInline
          />
        </div>
        <div className="content">
            <h1>Embark on Hassle-Free Journeys Through Serene Rural Routes</h1>
            <p>
              Discover tranquil travel experiences with real-time route
              tracking, affordable rides, and essential travel tools.
            </p>
            <button>Get Started</button>
        </div>
        <div className="filter"></div>
      </div>
      <div className={`landing-page`}>
        <Maps />
        <section className="recent-incidents">
          <div className="incidents">
            <h2>Recent Incidents</h2>
            <div>
              {incidents.map((incident, index) => (
                <div key={index} className="incidents-structure">
                  <div className="incident">
                    <p>{incident.date}</p>
                    <h3>{incident.incident}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Services/>
      </div>
    </div>
  );
};

export default Home;

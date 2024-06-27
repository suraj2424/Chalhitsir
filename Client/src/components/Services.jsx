import React, { useState, useEffect } from "react";

const Services = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`services-container  ${isLoading ? "hidden" : ""}`}>
      <div className={`services-inner`}>
        <h1>Our Services</h1>

        <div className="service-cards">

            <div className="service-card-a">
              <div className="service-card-1"></div>
              <div className="service-card-2">
              <h2>Live Traffic Monitoring</h2>
                <p>
                  We provide Continuous updates on traffic conditions, suggesting alternative routes to avoid congestion.Automatically adjusts your route based on current traffic, road closures, or accidents.
                </p>
                <button>LEARN MORE</button>
              </div>
            </div> 

            <div className="service-card-b">
              <div className="service-card-1"></div>
              <div className="service-card-2">
              <h2>Affordable Ride Services</h2>
                <p>
                  Access low-cost ride options, including local taxis, community drivers, and shuttle services.
                </p>
                <button>LEARN MORE</button>
              </div>
            </div> 

            <div className="service-card-c">
              <div className="service-card-1"></div>
              <div className="service-card-2">
              <h2>Safety and Assistance Services</h2>
                <p>
                  Quick access to emergency services, with features like location sharing. Locate the nearest hospitals, clinics, and police stations with contact information. 
                </p>
                <button>LEARN MORE</button>
              </div>
            </div> 

        </div>

      </div>
    </div>
  );
};

export default Services;

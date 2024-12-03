import React, { useState, useEffect, useRef } from "react";
import { useContext } from "react";
import { ServiceContext } from "../contexts/ServiceContextProvider";

const Services = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const { serviceRef } = useContext(ServiceContext);

  const card_1_ref = useRef(null);

  const showCard_1 = () => {
    card_1_ref.current.showModal();
  }

  return (
    <div className={`services-container  ${isLoading ? "hidden" : ""}`} ref={serviceRef}>
        <ul className="service-circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
      <div className={`services-inner`}>
        <h1>Our Services</h1>

        <div className="service-cards">

            <div className="service-card-a">
              <div className="service-card-2">
              <h2>Live Traffic Monitoring</h2>
                <p>
                  We provide Continuous updates on traffic conditions, suggesting alternative routes to avoid congestion.Automatically adjusts your route based on current traffic, road closures, or accidents.
                </p>
                <button onClick={showCard_1}>LEARN MORE</button>
              </div>
            </div> 

            <div className="service-card-b">
              <div className="service-card-2">
              <h2>Affordable Ride Services</h2>
                <p>
                  Access low-cost ride options, including local taxis, community drivers, and shuttle services.
                </p>
                <button>LEARN MORE</button>
              </div>
            </div> 
            <div className="service-card-c">
              <div className="service-card-2">
              <h2>Safety and Assistance Services</h2>
                <p>
                  Quick access to emergency services, with features like location sharing. Locate the nearest hospitals, clinics, and police stations with contact information. 
                </p>
                <button>LEARN MORE</button>
              </div>
            </div> 
            <dialog ref={card_1_ref} className="card-1-dialog">
              <div className="card-1-dialog-inner">
                <div className="dialog-1-part">
                <h2>Live Traffic Monitoring</h2>
                <div className="dialog-1-part-inside">
                  <div>
                    <img src="/images/traffic.webp" alt="" />
                  </div>
                  <ul>
                    <li>Stay ahead of the traffic with Chalhitsir's real-time traffic monitoring feature.</li>
                    <li>Our website
  provides users with live updates on vehicle collisions, road closures, and traffic congestion,
  allowing you to plan your journey efficiently. With this feature, you can avoid delays, choose
  alternate routes, and make informed decisions about your travel.</li>
                    <li>Stay informed, stay on track,
  and navigate the roads with confidence using Chalhitsir's real-time traffic monitoring feature.
  </li>
                  </ul>
                </div>
                <button onClick={() => card_1_ref.current.close()}>Close</button>
                </div>
              </div>
            </dialog>
        </div>

      </div>
    </div>
  );
};

export default Services;

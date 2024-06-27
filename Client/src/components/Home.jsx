import React, { useEffect, useState } from 'react';
import Maps from "./Maps"
const Home = () => {

    const [isLoading,setIsLoading] = useState(true);
    useEffect(()=>{
      document.title = "Homepage - Chalhitsir";
        const timer = setTimeout(()=>{
            setIsLoading(false);
        },1000);
        return () => clearTimeout(timer);    
    });


    const people = [
      {
        icon: "/images/image-person-1.jpg",
        content:
          "The team delivered a fantastic website for our business. Their attention to detail and dedication is unmatched.",
        position: "CEO of Acme Corp",
        guy_name: "John Doe",
      },
      {
        icon: "/images/image-person-2.jpeg",
        content:
          "Our mobile app's user experience improved drastically thanks to their expertise. Highly recommend!",
        position: "Product Manager at Tech Solutions",
        guy_name: "Jane Smith",
      },
    ];


  return (
    <div className={`landing-page-container ${ isLoading ? "hidden" : "" } `}>
        <div className={`landing-page`}>
        <Maps/>
      {/* <section className="recent-incidents">
        <h2>Recent Incidents</h2>
        <ul>
          <li>Incident 1: Avalanche near Rocky Peak - Jan 10, 2024</li>
          <li>Incident 2: Hiker lost in Blue Ridge Mountains - Feb 5, 2024</li>
          <li>Incident 3: Severe weather warning in Alpine Region - Mar 15, 2024</li>
        </ul>
      </section> */}

<div className="testimonial-container">
        <div className="testimonials">
        <h2>Testimonials</h2>
          {people.map((person) => {
            return (
                <div className="testimonial">
                <div className="testimonial-upper">
                  <div className="testimonial-upper-left">
                    <img src={person.icon} alt="" />
                  </div>
                  <div className="testimonial-upper-right">
                    <p>{person.guy_name}</p>
                    <p>{person.position}</p>
                  </div>
                </div>
                <div className="testimonial-lower">
                  {person.content}
                </div>
              </div>
            );
          })}
        </div>
        </div>
      
      

      </div>
    </div>
  );
};

export default Home;

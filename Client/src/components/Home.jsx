import React, { useEffect, useState } from 'react';

const Home = () => {
    const [isLoading,setIsLoading] = useState(true);
    useEffect(()=>{
      document.title = "Homepage - Chalhitsir";
        const timer = setTimeout(()=>{
            setIsLoading(false);
        },1000);
        return () => clearTimeout(timer);    
    });
  return (
    <div>
        <div className={`landing-page ${ isLoading ? "hidden" : "" }`}>
      <header className="header">
        <h1>Mountain Crisis Travel Aid</h1>
        <p>Your reliable partner in mountain travel emergencies</p>
      </header>
      <section className="info-section">
        <div className="info-box">
          <h2>Emergency Contacts</h2>
          <ul>
            <li>Mountain Rescue: 123-456-7890</li>
            <li>Helpline: 098-765-4321</li>
            <li>Local Authorities: 112</li>
          </ul>
        </div>
        <div className="info-box">
          <h2>Services Offered</h2>
          <ul>
            <li>24/7 Rescue Operations</li>
            <li>Medical Assistance</li>
            <li>Evacuation Services</li>
            <li>Weather Updates</li>
          </ul>
        </div>
      </section>
      <section className="safety-tips">
        <h2>Safety Tips</h2>
        <ul>
          <li>Always inform someone about your travel plans.</li>
          <li>Carry a well-equipped first aid kit.</li>
          <li>Stay updated with the latest weather forecasts.</li>
          <li>Keep your mobile phone fully charged.</li>
          <li>Carry a map and compass even if you have a GPS device.</li>
        </ul>
      </section>
      <section className="recent-incidents">
        <h2>Recent Incidents</h2>
        <ul>
          <li>Incident 1: Avalanche near Rocky Peak - Jan 10, 2024</li>
          <li>Incident 2: Hiker lost in Blue Ridge Mountains - Feb 5, 2024</li>
          <li>Incident 3: Severe weather warning in Alpine Region - Mar 15, 2024</li>
        </ul>
      </section>
      <section className="testimonials">
        <h2>Traveler Testimonials</h2>
        <blockquote>
          "Thanks to Mountain Crisis Travel Aid, we were rescued within hours during a sudden snowstorm. Highly recommended!"
          <cite> - John Doe</cite>
        </blockquote>
        <blockquote>
          "The medical assistance provided was top-notch. The team is extremely professional and caring."
          <cite> - Jane Smith</cite>
        </blockquote>
      </section>
      <section className="cta-section">
        <button className="cta-button">Get Emergency Help</button>
      </section>
    </div>
    </div>
  );
};

export default Home;

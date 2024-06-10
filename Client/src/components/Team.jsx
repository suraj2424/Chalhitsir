import React, { useState, useEffect } from "react";

const Team = () => {
  const [isLoading, setIsLoading] = useState(true);

  const people = [
    {
      icon: "/images/john_doe.jpg",
      content:"John is the visionary behind our company, leading with passion and dedication.",
      position:"CEO of Acme Corp",
      guy_name: "John Doe"
    },
    {
      icon: "/images/jane_smith.jpg",
      content:"Our mobile app's user experience improved drastically thanks to their expertise. Highly recommend!",
      position:"Product Manager at Tech Solutions",
      guy_name: "Jane Smith"
    },
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 1000ms = 1s, the same duration as the loading bar animation

    return () => clearTimeout(timer); // cleanup on component unmount
  }, []);

  return (
    <div className="team-container">
      <div className="team-box">
        <div className={`team-inner ${isLoading ? "hidden" : ""}`}>
          <h1>Meet Our Team</h1>
          <div className="team-members">
          { people.map((person)=>{
          return (
            <div className="team-member">
            <ul>
              <li><img src={person.icon} alt="" className="left"/></li>
              <li id="person-name">{person.guy_name}</li>
              <li id="person-position">{person.position}</li>
              <li>{person.content}</li>
            </ul>
          </div>
          )
        }) }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;

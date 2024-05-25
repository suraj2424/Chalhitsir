import React, { useState, useEffect } from "react";
import LoadingBar from "./Loadingbar";

const Services = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const people = [
    {
      icon: "/images/john_doe.jpg",
      content:
        "The team delivered a fantastic website for our business. Their attention to detail and dedication is unmatched.",
      position: "CEO of Acme Corp",
      guy_name: "John Doe",
    },
    {
      icon: "/images/jane_smith.jpg",
      content:
        "Our mobile app's user experience improved drastically thanks to their expertise. Highly recommend!",
      position: "Product Manager at Tech Solutions",
      guy_name: "Jane Smith",
    },
  ];

  return (
    <div className="services-container">
      <LoadingBar />
      <div className={`services-inner ${isLoading ? "hidden" : ""}`}>
        <h1>Our Services</h1>

        <div className="service-cards">
          <div className="service-card">
            <h2>Web Development</h2>
            <p>
              We provide high-quality web development services. We build
              responsive, fast, and secure websites tailored to your needs.
            </p>
          </div>

          <div className="service-card">
            <h2>Mobile App Development</h2>
            <p>
              We build mobile apps for both Android and iOS platforms. We ensure
              the best performance and user experience for your mobile
              solutions.
            </p>
          </div>

          <div className="service-card">
            <h2>UI/UX Design</h2>
            <p>
              We design user-friendly and intuitive interfaces for web and
              mobile applications, focusing on usability and simplicity.
            </p>
          </div>

          <div className="service-card">
            <h2>SEO Optimization</h2>
            <p>
              Improve your website's visibility on search engines with our SEO
              optimization services. We help you rank higher and reach more
              customers.
            </p>
          </div>

          <div className="service-card">
            <h2>Cloud Services</h2>
            <p>
              Leverage the power of cloud computing with our cloud services. We
              offer scalable and secure cloud solutions tailored to your
              business.
            </p>
          </div>
        </div>
        <h2>Testimonials</h2>
        <div className="testimonials">
          {people.map((person) => {
            return (
              <div className="testinomial">
                <ul>
                  <div className="testimonial-image">
                    <li>
                      <img src={person.icon} alt="" className="left" />
                    </li>
                  </div>
                  <div className="testimonial-card">
                    <li id="person-name">{person.guy_name}</li>
                    <li id="person-position">{person.position}</li>
                  </div>
                  <li>{person.content}</li>
                </ul>
              </div>
            );
          })}
        </div>

        <div className="contact-section">
          <h2>Contact Us</h2>
          <p>
            If you have any questions or would like to start a project with us,
            feel free to contact us:
          </p>
          <p>Email: info@ourservices.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>
    </div>
  );
};

export default Services;

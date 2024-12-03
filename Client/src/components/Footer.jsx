import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const [isLoading,setIsLoading] = useState(true);
  useEffect(()=>{
    const timer = setTimeout(()=>{
      setIsLoading(false)
    },1000)
    return ()=> clearTimeout(timer)
  },[])
  return (
    <div className={`footer ${isLoading ? "hidden" : ""}`}>
      <section className="footer-section1">
        <div className="section1-left">
          <span>Get connected with us on social networks:</span>
        </div>
        <div className="section1-right">
          <a href="/" className="section-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 30 30"
            >
              <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"></path>
            </svg>
          </a>
          <a  href='/' className="section-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 30 30"
            >
              <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
            </svg>
          </a>
          <a  href='/' className="section-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 30 30"
            >
              <path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"></path>
            </svg>
          </a>
          <a  href='/' className="section-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 30 30"
            >
              <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
            </svg>
          </a>
        </div>
      </section>

      <section className="footer-section2">
        <div className="section2-container">
          <div className="section2-row">
            <div className="section2-col1">
              <h4>COMPANY</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                nam minima reiciendis quae hic, provident repudiandae magni
                doloribus eos quo?
              </p>
            </div>
            <div className="section2-col2">
              <h4>USEFUL LINKS</h4>
              <p>
                <Link to="/services" className="section-link">
                  Services
                </Link>
              </p>
              <p>
                <Link to="/about-us" className="section-link">
                  About Us
                </Link>
              </p>
              <p>
                <Link to="/team" className="section-link">
                  Team
                </Link>
              </p>
              <p>
                <Link to="/login" className="section-link">
                  Login
                </Link>
              </p>
              <p>
                <Link to='/contactus' className='section-link'>
                Contact Us
                </Link>
              </p>
              <p>
                <Link to='/career' className='section-link'>
                Career
                </Link>
              </p>
            </div>
            <div className="section2-col3">
              <h4>CONTACT</h4>
              <p> Address</p>
              <p>Phone</p>
              <p> Email</p>
            </div>
          </div>
        </div>
      </section>

      <div className="footer-copyright">
        © 2024 Copyright:
        <a  href='/' className="section-link copy-link">Chalhitsir</a>
      </div>
    </div>
  );
}
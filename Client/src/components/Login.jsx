import React, { useState, useEffect } from "react";
import LoadingBar from "./Loadingbar";

const Login = () => {const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 1000ms = 1s, the same duration as the loading bar animation

    return () => clearTimeout(timer); // cleanup on component unmount
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Normally, here you would handle form submission, e.g., sending data to the server.
    setSubmitted(true);
  };

  return (
    <div className="signup-container">
      <LoadingBar />
      <div className="signup-box">
        <div className={`signup-inner ${isLoading ? "hidden" : ""}`}>
          <h1>Login</h1>
          {submitted ? (
            <p>Thank you for signing up, {formData.name}!</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="submit-button">
                Login
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );}

export default Login
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  let navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [errors, setErrors] = useState({});
  const [submitAttempted, setSubmitAttempted] = useState(false);

  useEffect(() => {
    document.title = "Signup - Chalhitsir";
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const validateField = (name, value) => {
    switch (name) {
      case "email":
        if (!/\S+@\S+\.\S+/.test(value)) {
          return "Email is invalid";
        }
        break;
      case "phone":
        if (!/^\d{10}$/.test(value)) {
          return "Phone number must be 10 digits";
        }
        break;
      case "password":
        if (value.length < 6) {
          return "Password must be at least 6 characters";
        }
        break;
      default:
        if (!value) {
          return "This field is required";
        }
    }
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
    // Validate field and update errors state
    const error = validateField(name, value);
    setErrors({
      ...errors,
      [name]: error,
    });
  };

  const HandleRegistration = async (e) => {
    e.preventDefault();
    if(!user.name || !user.email || !user.phone || !user.password){
      setSubmitAttempted(true);
      return;
    }
    try {
      const response = await fetch("http://localhost:3001/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      console.log(data);

      if (response.ok) {
        navigate("/login");
      }
    } catch (error) {
      console.error("Failed to fetch:", error);
    }
  };

  return (
    <>
      <div className={`signup-container ${isLoading ? "hidden" : ""}`}>
        <div className="signup-inner-1"></div>
        <div className="signup-inner-2">
          <h1>Register</h1>
          <form action="/user/register" method="post">
            <p>Full Name</p>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              onChange={handleChange}
              required
            />
            {submitAttempted && errors.name && (
              <div className="signup-post-error-check">{errors.name}</div>
            )}
            <p>Email</p>
            <input
              type="text"
              pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
              required
              name="email"
              placeholder="Enter your email"
              onChange={handleChange}
            />
            {submitAttempted && errors.email && (
              <div className="signup-post-error-check">{errors.email}</div>
            )}
            <p>Mobile Number</p>
            <input
              type="number"
              name="phone"
              placeholder="Enter your phone number"
              onChange={handleChange}
              required
            />
            {submitAttempted && errors.phone && (
              <div className="signup-post-error-check">{errors.phone}</div>
            )}
            <p>Password</p>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              onChange={handleChange}
              required
            />
            {submitAttempted && errors.password && (
              <div className="signup-post-error-check">{errors.password}</div>
            )}
            <p>Already have an Account?</p>
            <a href="/login">Login</a>
            <button type="submit" onClick={HandleRegistration}>
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;

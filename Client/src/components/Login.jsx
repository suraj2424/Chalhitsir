import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const InputField = ({ type, name, placeholder, value, handleChange, error }) => (
  <>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      required
    />
    {error && <div className="login-post-error-check">{error}</div>}
  </>
);

const LoginForm = ({ user, handleChange, handleLogin, errors, submitAttempted, isSubmitting }) => (
  <form onSubmit={handleLogin}>
    <label htmlFor="email">Email</label>
    <InputField
      type="text"
      name="email"
      placeholder="Email"
      value={user.email}
      handleChange={handleChange}
      error={submitAttempted && errors.email}
    />
    <label htmlFor="password">Password</label>
    <InputField
      type="password"
      name="password"
      placeholder="Password"
      value={user.password}
      handleChange={handleChange}
      error={submitAttempted && errors.password}
    />
    <p>Don't have an Account? <Link to="/signup">Sign Up</Link></p>
    <button type="submit" disabled={isSubmitting}>
      {isSubmitting ? 'Logging in...' : 'Login'}
    </button>
  </form>
);

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [errors, setErrors] = useState({});
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    document.title = "Login - Chalhitsir";
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const validateField = (name, value) => {
    let error = "";
    if (!value) {
      error = `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
    } else if (name === "email" && !/\S+@\S+\.\S+/.test(value)) {
      error = "Email is invalid";
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    const error = validateField(name, value);
    setErrors({ ...errors, [name]: error });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const formErrors = Object.keys(user).reduce((acc, key) => {
      const error = validateField(key, user[key]);
      if (error) acc[key] = error;
      return acc;
    }, {});

    setErrors(formErrors);
    setSubmitAttempted(true);

    if (Object.values(formErrors).some((error) => error)) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success('Login successful!');
        // Navigate after a short delay
        setTimeout(() => navigate("/"), 1500);
      } else {
        toast.error(data.message || 'Login failed.');
      }
    } catch (error) {
      console.error("Failed to fetch:", error);
      setErrors({ submit: "Network error: Unable to reach the server." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className={`login-container ${isLoading ? "hidden" : ""}`}>
        <div className="login-inner-1"></div>
        <div className="login-inner-2">
          <div className="login-inner-2-centered">
            <div className="login-inner-left">
              <div className="login-company-logo">
                <Link to="/" className="login-logo-effect">
                  <img src="/images/image.png" alt="Logo" />
                  <span>C</span>HALHITSIR
                </Link>
              </div>
            </div>
            <div className="login-inner-right">
              <div className="home">
                <Link to="/"><IoIosArrowRoundBack className="back-arrow"/>Go back to Homepage</Link>
              </div>
              <h1>Login</h1>
              {errors.submit && <div className="login-post-error-check">{errors.submit}</div>}
              <LoginForm
                user={user}
                handleChange={handleChange}
                handleLogin={handleLogin}
                errors={errors}
                submitAttempted={submitAttempted}
                isSubmitting={isSubmitting}
              />
              <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
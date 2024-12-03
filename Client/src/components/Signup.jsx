// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { IoIosArrowRoundBack } from "react-icons/io";
// const Signup = () => {
//   let navigate = useNavigate();

//   const [isLoading, setIsLoading] = useState(true);
//   const [errors, setErrors] = useState({});
//   const [submitAttempted, setSubmitAttempted] = useState(false);

//   useEffect(() => {
//     document.title = "Signup - Chalhitsir";
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 1000);

//     return () => clearTimeout(timer);
//   }, []);

//   const [user, setUser] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     password: "",
//   });

//   const validateField = (name, value) => {
//     switch (name) {
//       case "email":
//         if (!/\S+@\S+\.\S+/.test(value)) {
//           return "Email is invalid";
//         }
//         break;
//       case "phone":
//         if (!/^\d{10}$/.test(value)) {
//           return "Phone number must be 10 digits";
//         }
//         break;
//       case "password":
//         if (value.length < 6) {
//           return "Password must be at least 6 characters";
//         }
//         break;
//       default:
//         if (!value) {
//           return "This field is required";
//         }
//     }
//     return "";
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUser({
//       ...user,
//       [name]: value,
//     });
//     // Validate field and update errors state
//     const error = validateField(name, value);
//     setErrors({
//       ...errors,
//       [name]: error,
//     });
//   };

//   const HandleRegistration = async (e) => {
//     e.preventDefault();
//     if (!user.name || !user.email || !user.phone || !user.password) {
//       setSubmitAttempted(true);
//       return;
//     }
//     try {
//       const response = await fetch("/user/register", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(user),
//       });
//       const data = await response.json();
//       console.log(data);

//       if (response.ok) {
//         navigate("/login");
//       }
//     } catch (error) {
//       console.error("Failed to fetch:", error);
//     }
//   };

//   return (
//     <>
//       <div className={`signup-container ${isLoading ? "hidden" : ""}`}>
//         <div className="signup-inner-1"></div>
//         <div className="signup-inner-2">
//           <div className="signup-inner-2-centered">
//             <div className="signup-inner-left">
//             <div className="signup-company-logo">
//         <Link to="/" className="signup-logo-effect">
//           {/* <GiMountainRoad className="mountain"/> */}
//           <img src="/images/image.png" alt="" />
//           <span>C</span>HALHITSIR
//         </Link>
//       </div>
//             </div>
//             <div className="signup-inner-right">
//               <div className="home">
//               <a href="/"><IoIosArrowRoundBack className="back-arrow"/>Go back to Homepage</a>
//               </div>
//               <h1>Create Account</h1>
//               <form action="/user/register" method="post">
//                 {/* <p>Full Name</p> */}
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Full Name"
//                   onChange={handleChange}
//                   required
//                 />
//                 {submitAttempted && errors.name && (
//                   <div className="signup-post-error-check">{errors.name}</div>
//                 )}
//                 {/* <p>Email</p> */}
//                 <input
//                   type="text"
//                   pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
//                   required
//                   name="email"
//                   placeholder="Email"
//                   onChange={handleChange}
//                 />
//                 {submitAttempted && errors.email && (
//                   <div className="signup-post-error-check">{errors.email}</div>
//                 )}
//                 {/* <p>Mobile Number</p> */}
//                 <input
//                   type="number"
//                   name="phone"
//                   placeholder="Mobile Number"
//                   onChange={handleChange}
//                   required
//                 />
//                 {submitAttempted && errors.phone && (
//                   <div className="signup-post-error-check">{errors.phone}</div>
//                 )}
//                 {/* <p>Password</p> */}
//                 <input
//                   type="password"
//                   name="password"
//                   placeholder="Password"
//                   onChange={handleChange}
//                   required
//                 />
//                 {submitAttempted && errors.password && (
//                   <div className="signup-post-error-check">
//                     {errors.password}
//                   </div>
//                 )}
//                 <p>
//                   Already have an Account?<a href="/login">Login</a>
//                 </p>

//                 <button type="submit" onClick={HandleRegistration}>
//                   Register
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Signup;






























import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";


const InputField = ({ id,type, name, placeholder, value, handleChange, error }) => (
  <>
    <label htmlFor={`${id}`}></label>
    <input
      id={id}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      required
    />
    {error && <div className="signup-post-error-check">{error}</div>}
  </>
);



const SignupForm = ({ user, handleChange, handleRegistration, errors, submitAttempted, isSubmitting }) => (
  <form onSubmit={handleRegistration}>
    <InputField
      id="fullname"
      type="text"
      name="name"
      placeholder="Full Name"
      value={user.name}
      handleChange={handleChange}
      error={submitAttempted && errors.name}
    />
    <InputField
      id="email"
      type="text"
      name="email"
      placeholder="Email"
      value={user.email}
      handleChange={handleChange}
      error={submitAttempted && errors.email}
    />
    <InputField
      id="mnumber"
      type="number"
      name="phone"
      placeholder="Mobile Number"
      value={user.phone}
      handleChange={handleChange}
      error={submitAttempted && errors.phone}
    />
    <InputField
      id="password"
      type="password"
      name="password"
      placeholder="Password"
      value={user.password}
      handleChange={handleChange}
      error={submitAttempted && errors.password}
    />
    <p>Already have an Account? <Link to="/login">Login</Link></p>
    <button type="submit" disabled={isSubmitting}>
      {isSubmitting ? 'Registering...' : 'Register'}
    </button>
  </form>
);


const Signup = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [errors, setErrors] = useState({});
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  useEffect(() => {
    document.title = "Signup - Chalhitsir";
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const validateField = (name, value) => {
    let error = "";
    if (!value) {
      error = `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
    } else {
      switch (name) {
        case "email":
          if (!/\S+@\S+\.\S+/.test(value)) error = "Email is invalid";
          break;
        case "phone":
          if (!/^\d{10}$/.test(value)) error = "Phone number must be 10 digits";
          break;
        case "password":
          if (value.length < 6) error = "Password must be at least 6 characters";
          break;
        default:
          break;
      }
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    const error = validateField(name, value);
    setErrors({ ...errors, [name]: error });
  };

  const handleRegistration = async (e) => {
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
      const response = await fetch(`${process.env.REACT_APP_API_URL || 'http://localhost:3001'}/user/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      const data = await response.json();
      if (response.ok) {
        navigate("/login");
      } else {
        setErrors({ submit: data.message || "Registration failed." });
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
      <div className={`signup-container ${isLoading ? "hidden" : ""}`}>
        <div className="signup-inner-1"></div>
        <div className="signup-inner-2">
          <div className="signup-inner-2-centered">
            <div className="signup-inner-left">
              <div className="signup-company-logo">
                <Link to="/" className="signup-logo-effect">
                  <img src="/images/image.png" alt="Logo" />
                  <span>C</span>HALHITSIR
                </Link>
              </div>
            </div>
            <div className="signup-inner-right">
              <div className="home">
                <Link to="/"><IoIosArrowRoundBack className="back-arrow"/>Go back to Homepage</Link>
              </div>
              <h1>Create Account</h1>
              {errors.submit && <div className="signup-post-error-check">{errors.submit}</div>}
              <SignupForm
                user={user}
                handleChange={handleChange}
                handleRegistration={handleRegistration}
                errors={errors}
                submitAttempted={submitAttempted}
                isSubmitting={isSubmitting}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;




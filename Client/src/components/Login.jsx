// import React, { useState,useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Login = () => {

//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 1000);

//     return () => clearTimeout(timer);
//   }, []);

//   let navigate = useNavigate();

//   const [user, setUser] = useState({
//     email: '',
//     password: ''
//   })

//   const [errorMessage, setErrorMessage] = useState('')


//   const handleChange = (e) => {
//     setUser({
//       ...user,
//       [e.target.name]: e.target.value
//     })
//   }


//   const HandleLogin = async (e) => {
//     e.preventDefault()
//     if (!user.email || !user.password) {
//       setErrorMessage('Both email and password fields are required.');
//       return; // Stop the function from proceeding further
//     }
//     try {
//       const response = await fetch('http://localhost:3001/user/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(user)
//       })
  
//       const data = await response.json()
//       console.log(data)
  
//       if (response.ok) {
//         navigate("/");
//         toast.success('Login successful!');
//       }
//       else{
//         setErrorMessage('Incorrect email or password')
//         console.log(errorMessage); // Add this line
//       }
//     } catch (error) {
//       setErrorMessage('Failed to fetch')
//       console.error('Failed to fetch:', error)
//     }
//   }

//   useEffect(() => {
//     console.log(errorMessage);
//   }, [errorMessage]);

//   return (
//     <>
//     <div className={`login-container ${isLoading ? "hidden" : ""}`}>
//       <div className='login-inner-1'>
//       </div>
//       <div className='login-inner-2'>
//         <h1>Login</h1>
//         <form onSubmit={HandleLogin}>
//           <p>Email</p>
//           <input type="email" name="email" placeholder="Enter your email" onChange={handleChange} />
//           <p>Password</p>
//           <input type="password" name="password" placeholder="Enter your password" onChange={handleChange} />
//           {errorMessage && <div className='login-error-check'>{errorMessage}</div>}
//           <button type="submit">Login</button>
//           <ToastContainer/>
//         </form>
//       </div>
//     </div>
//     </>
//   )
// }

// export default Login














// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Login = () => {
//   const [isLoading, setIsLoading] = useState(true);
//   const [user, setUser] = useState({
//     email: '',
//     password: ''
//   });
//   let navigate = useNavigate();

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 1000);

//     return () => clearTimeout(timer);
//   }, []);

//   const handleChange = (e) => {
//     setUser({
//       ...user,
//       [e.target.name]: e.target.value
//     });
//   };

//   const HandleLogin = async (e) => {
//     e.preventDefault();

//     if (!user.email || !user.password) {
//       toast.error('Both email and password fields are required.');
//       return;
//     }

//     try {
//       const response = await fetch('http://localhost:3001/user/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(user)
//       });

//       const data = await response.json();

//       if (response.ok) {
//         toast.success('Login successful!');
//         navigate("/");
//       } else {
//         toast.error('Incorrect email or password');
//       }
//     } catch (error) {
//       toast.error('Failed to fetch');
//       console.error('Failed to fetch:', error);
//     }
//   };

//   return (
//     <>
//       <div className={`login-container ${isLoading ? "hidden" : ""}`}>
//         <div className='login-inner-1'></div>
//         <div className='login-inner-2'>
//           <h1>Login</h1>
//           <form onSubmit={HandleLogin}>
//             <p>Email</p>
//             <input type="email" name="email" placeholder="Enter your email" onChange={handleChange} />
//             <p>Password</p>
//             <input type="password" name="password" placeholder="Enter your password" onChange={handleChange} />
//             <button type="submit">Login</button>
//           </form>
//         </div>
//       </div>
//       <ToastContainer />
//     </>
//   );
// };

// export default Login;






// ALMOST SUCCESSFUL ALL WORKING BUT BECAUSE OF BROWSER PROMPT NOT WORKING

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Login = () => {
//   const [isLoading, setIsLoading] = useState(true);
//   const [user, setUser] = useState({
//     email: '',
//     password: ''
//   });
//   let navigate = useNavigate();

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 1000);
//     return () => clearTimeout(timer);
//   }, []);

//   const handleChange = (e) => {
//     setUser({
//       ...user,
//       [e.target.name]: e.target.value
//     });
//   };

//   const HandleLogin = async (e) => {
//     e.preventDefault();

//     if (!user.email || !user.password) {
//       toast.error('Both email and password fields are required.');
//       return;
//     }

//     try {
//       const response = await fetch('http://localhost:3001/user/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(user)
//       });

//       const data = await response.json();
//       console.log("Response Data:", data); // Debug log

//       if (response.ok) {
//         toast.success('Login successful!');
//         navigate("/");
//       } else {
//         toast.error(data.message || 'Incorrect email or password');
//       }
//     } catch (error) {
//       toast.error('Failed to fetch');
//       console.error('Failed to fetch:', error);
//     }
//   };

//   return (
//     <>
//       <div className={`login-container ${isLoading ? "hidden" : ""}`}>
//         <div className='login-inner-1'></div>
//         <div className='login-inner-2'>
//           <h1>Login</h1>
//           <form onSubmit={HandleLogin}>
//             <p>Email</p>
//             <input type="email" name="email" placeholder="Enter your email" onChange={handleChange} />
//             <p>Password</p>
//             <input type="password" name="password" placeholder="Enter your password" onChange={handleChange} />
//             <button type="submit">Login</button>
//           </form>
//         </div>
//       </div>
//       <ToastContainer />
//     </>
//   );
// };

// export default Login;








// Toast Successful but issue some browser causing it to hide immediately

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Login = () => {
//   const [isLoading, setIsLoading] = useState(true);
//   const [user, setUser] = useState({ email: '', password: '' });
//   const [loginSuccess, setLoginSuccess] = useState(false); // Added success flag
//   let navigate = useNavigate();

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 1000);

//     return () => clearTimeout(timer);
//   }, []);

//   const handleChange = (e) => {
//     setUser({
//       ...user,
//       [e.target.name]: e.target.value
//     });
//   };

//   const HandleLogin = async (e) => {
//     e.preventDefault();

//     if (!user.email || !user.password) {
//       toast.error('Both email and password fields are required.');
//       return;
//     }

//     try {
//       const response = await fetch('http://localhost:3001/user/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(user)
//       });

//       if (response.ok) {
//         toast.success('Login successful!');
//         setLoginSuccess(true); // Set success flag
//       } else {
//         const data = await response.json();
//         toast.error(data.message || 'Incorrect email or password');
//       }
//     } catch (error) {
//       toast.error('Failed to fetch');
//       console.error('Failed to fetch:', error);
//     }
//   };

//   useEffect(() => {
//     if (loginSuccess) {
//       // Delay navigation to allow toast to show
//       const timer = setTimeout(() => {
//         navigate("/");
//       }, 500); // 0.5 seconds delay

//       return () => clearTimeout(timer); // Cleanup the timer
//     }
//   }, [loginSuccess, navigate]);

//   return (
//     <>
//       <div className={`login-container ${isLoading ? "hidden" : ""}`}>
//         <div className='login-inner-1'></div>
//         <div className='login-inner-2'>
//           <h1>Login</h1>
//           <form onSubmit={HandleLogin}>
//             <p>Email</p>
//             <input type="email" name="email" placeholder="Enter your email" onChange={handleChange} />
//             <p>Password</p>
//             <input type="password" name="password" placeholder="Enter your password" onChange={handleChange} />
//             <button type="submit">Login</button>
//           </form>
//         </div>
//       </div>
//       <ToastContainer />
//     </>
//   );
// };

// export default Login;



















import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({ email: '', password: '' });
  const [loginSuccess, setLoginSuccess] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const HandleLogin = async (e) => {
    e.preventDefault();

    if (!user.email || !user.password) {
      toast.error('Both email and password fields are required.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3001/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });

      if (response.ok) {
        toast.success('Login successful!', { autoClose: 3000 }); // Extended autoClose
        setLoginSuccess(true);
      } else {
        const data = await response.json();
        toast.error(data.message || 'Incorrect email or password');
      }
    } catch (error) {
      toast.error('Failed to fetch');
      console.error('Failed to fetch:', error);
    }
  };

  useEffect(() => {
    if (loginSuccess) {
      const timer = setTimeout(() => {
        navigate("/", { state: { fromLogin: true } });
      }, 2000); // 2 seconds delay

      return () => clearTimeout(timer);
    }
  }, [loginSuccess, navigate]);

  return (
    <>
      <div className={`login-container ${isLoading ? "hidden" : ""}`}>
        <div className='login-inner-1'></div>
        <div className='login-inner-2'>
          <h1>Login</h1>
          <form onSubmit={HandleLogin}>
            <p>Email</p>
            <input type="email" name="email" placeholder="Enter your email" onChange={handleChange} />
            <p>Password</p>
            <input type="password" name="password" placeholder="Enter your password" onChange={handleChange} />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Login;

import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  let navigate = useNavigate();

  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const [errorMessage, setErrorMessage] = useState('')


  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }


  const HandleLogin = async (e) => {
    e.preventDefault()
    if (!user.email || !user.password) {
      setErrorMessage('Both email and password fields are required.');
      return; // Stop the function from proceeding further
    }
    try {
      const response = await fetch('http://localhost:3001/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      })
  
      const data = await response.json()
      console.log(data)
  
      if (response.ok) {
        navigate("/");
      }
      else{
        setErrorMessage('Incorrect email or password')
        console.log(errorMessage); // Add this line
      }
    } catch (error) {
      setErrorMessage('Failed to fetch')
      console.error('Failed to fetch:', error)
    }
  }

  useEffect(() => {
    console.log(errorMessage);
  }, [errorMessage]);

  return (
    <>
    <div className={`login-container ${isLoading ? "hidden" : ""}`}>
      <div className='login-inner-1'>
      </div>
      <div className='login-inner-2'>
        <h1>Login</h1>
        <form onSubmit={HandleLogin}>
          <p>Email</p>
          <input type="email" name="email" placeholder="Enter your email" onChange={handleChange} />
          <p>Password</p>
          <input type="password" name="password" placeholder="Enter your password" onChange={handleChange} />
          {errorMessage && <div className='login-error-check'>{errorMessage}</div>}
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
    </>
  )
}

export default Login
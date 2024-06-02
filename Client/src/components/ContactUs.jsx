import React from 'react';
import { useState } from 'react';
import axios from 'axios';

export default function ContactUs() {

  const [contactUsData, setcontactUsData]= useState({});

  const addData = async(contactus)=>{
    // const res = await axios.post('http://localhost:3001/contactus',contactus)
    console.log(contactus);
    // setProduct(res.data);
  }

  const handleChange = (e)=>{
    setcontactUsData({
      ...contactUsData,[e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    // addData(contactUsData);
    console.log(contactUsData);
    document.getElementById("contactus-form").reset();
    
  }

  return (
  <div className='main-block'>
    <h1 className='contact-heading'>
      Contact Us
    </h1>
    
    <form className='contactus-form' id='contactus-form' onSubmit={handleSubmit}>
       
        <div className="info">
          
          <input  className="contactus-input" type="text" name="name" placeholder="Name" onChange={handleChange}/>
          
          
          <input className="contactus-input" type="text" name="email" placeholder="Email" onChange={handleChange}/>
          
          <input className="contactus-input" type="text" name="number" placeholder="Phone number" onChange={handleChange}/>
          
        </div>
        
        <div>
          <textarea className='contactus-input contactus-textarea' rows="5" placeholder='Message' name='message' onChange={handleChange}/>
        </div>
        <div className='contact-button'>
        <button className="contact-submit" type="submit" href="/">Submit</button>
        </div>
      </form>
    
  </div>
  );
}

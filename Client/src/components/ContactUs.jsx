import React from 'react';
import { useState } from 'react';
import axios from 'axios';

export default function ContactUs() {

  const [contactUsData, setcontactUsData]= useState({});

  
  const modalSucessClose= ()=>{
    var modal = document.getElementById("modal-sucess");
      modal.style.display = "none";
  }
  const modalFailedClose= ()=>{
    var modal = document.getElementById("modal-failed");
      modal.style.display = "none";
  }

  const addData = async(contactus)=>{
    try{
      await axios.post('http://localhost:3001/contactus',contactus).then((res)=>{
        if(res.status===200){
          var modal = document.getElementById("modal-sucess");
          modal.style.display = "block";
        }
      })
        .catch((err)=>{
          var modal = document.getElementById("modal-failed");
          modal.style.display = "block";;
        console.log(err,'then')
      })

    }catch (err){
      var modal = document.getElementById("modal-failed");
      modal.style.display = "block";
        console.log(err,'catch')
    }
    
     
  }

  const handleChange = (e)=>{
    setcontactUsData({
      ...contactUsData,[e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    addData(contactUsData);
    // console.log(contactUsData);
    document.getElementById("contactus-form").reset();
    
  }

  return (
    <div className="main-block">
      <h1 className="contact-heading">Contact Us</h1>

      <form
        className="contactus-form"
        id="contactus-form"
        onSubmit={handleSubmit}
      >
        <div className="info">
          <input
            className="contactus-input"
            type="text"
            name="name"
            placeholder="Name"
            required
            onChange={handleChange}
          />

          <input
            className="contactus-input"
            type="text"
            name="email"
            placeholder="Email"
            required
            onChange={handleChange}
          />

          <input
            className="contactus-input"
            type="number"
            name="phone"
            placeholder="Phone number"
            required
            onChange={handleChange}
          />
        </div>

        <div>
          <textarea
            className="contactus-input contactus-textarea"
            rows="5"
            placeholder="Message"
            name="message"
            required
            onChange={handleChange}
          />
        </div>
        <div className="contact-button">
          <button className="contact-submit" type="submit" href="/">
            Submit
          </button>
        </div>
      </form>

      
      
      <div id="modal-sucess" className="modal">
        <div className="modal-content">
          <span className="close" onClick={modalSucessClose}>&times;</span>
          <p className='modal-message'>Data Saved Successfully</p>
        </div>
      </div>
      
      <div id="modal-failed" className="modal">
        <div className="modal-content">
          <span className="close" onClick={modalFailedClose}>&times;</span>
          <p className='modal-message'>Something Went Wrong</p>
        </div>
      </div>

    </div>
  );
}


import React, { useState, useRef } from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {Button, Card, Row, Col, ButtonGroup} from 'react-bootstrap';
import "./register.css";


import NavbarMenu from "../navbar/navbar";
import RestaurantTile from "../restaurantTile/restaurantTile";

import axios from 'axios';

const sendDataToAPI = (formData) => {
  axios.post('https://mockend.com/api/pragnya97/foodConnect/main/post', formData)
    .then(response => {
      console.log('Data sent successfully:', response.data);
      // Optionally, you can handle the success response here
    })
    .catch(error => {
      console.error('Error sending data:', error);
      // Optionally, you can handle the error here
    });
};



const Register = () => {
  const [formData, setFormData] = useState({
    shopName: '',
    location: '',
    openTime: '',
    closeTime: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    console.log(formData);
    e.preventDefault();
 
    // Call the function to send data to the API
    sendDataToAPI(formData);

    // Optionally, reset the form after submission
    setFormData({
      shopName: '',
      location: '',
      openTime: '',
      closeTime: ''
    });
  };

  return (
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-6">
    <div className="card text-center border-dark mb-3 mt-3 ">
        <div className="card-header">Register shop</div>
<div className="card-body text-dark">

    <form onSubmit={handleSubmit}>
    
      <div className="form-group">
      <label>
        Shop Name:
        <input type="text" placeholder="Enter shop name" className="form-control mb-3 mt-1" name="shopName" value={formData.shopName} onChange={handleChange} />
      </label>
      </div>
      <div className="form-group">
      <label>
        Location:
        <input type="text" placeholder="Enter location" className="form-control mb-3 mt-1" name="location" value={formData.location} onChange={handleChange} />
      </label>
      </div>
      <div className="form-group">
      <label>
        Open Time:
        <input type="text" placeholder="09:30" className="form-control mb-3 mt-1" name="openTime" value={formData.openTime} onChange={handleChange} />
      </label>
      </div>
      <div className="form-group">
      <label>
        Close Time:
        <input type="text" placeholder="12:00" className="form-control mb-3 mt-1" name="closeTime" value={formData.closeTime} onChange={handleChange} />
      </label>
      </div>
      <button type="submit" className="btn btn-secondary mt-2">Register</button>
    </form>
    </div>
    </div>
    </div>
    </div>
    </div>
  );
};




// const Register = (props) => {


// return (
//   <div>
//     <form>
//     <h2>Register shop</h2>    
//      <div className="form-group">
//        <label htmlFor="name">Shop Name: 
//        <input type="text" className="form-control" id="name" />
//        </label>
//      </div>
//      <div className="form-group">
//        <label  htmlFor="address">Address</label>
//        <input type="address" className="form-control" id="address" />
//      </div>
//      <div className="form-group">
//        <label  htmlFor="email">Email</label>
//        <input type="email" className="form-control" id="email" />
//      </div>
//      <div>
//      <button type="register" className="btn btn-secondary">Register</button>
//      </div>
     
//     </form>
//   </div>
// )
// }

export default Register; 

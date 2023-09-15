import React, { useState, useRef } from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {Button, Card, Row, Col} from 'react-bootstrap';
import "./home.css";


import NavbarMenu from "../navbar/navbar";
import RestaurantTile from "../restaurantTile/restaurantTile";

const Home = (props) => {

  const cardSectionRef = useRef(null);

  const scrollToLeft = () => {
    cardSectionRef.current.scrollBy({
      left: -300, // Adjust the scroll distance as per your card width
      behavior: 'smooth',
    });
  };

  const scrollToRight = () => {
    cardSectionRef.current.scrollBy({
      left: 300, // Adjust the scroll distance as per your card width
      behavior: 'smooth',
    });
  };


    return (
        <div>
          <NavbarMenu/>

        <Container className='mx-22 my-0.1' style={{width: "58%"}}>

        <div className="justify-content-start mx-22">
            <Row >
            <Col className='p-0 m-1'  >
            <Card className='shadow-2xl' style={{  height: '15rem'}}>
            <Card.Img src = " https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80"
            style={{height: '80%', borderRadius: '0px'}}></Card.Img>

             
            <Card.Body className='text-center flex align-items-center justify-content-center ' style = {{backgroundColor:'black'}}>
                <Card.Text  style = {{'color':'white'}} > Veg Appetizers</Card.Text>

            </Card.Body>
            </Card>
            </Col>
            <Col className='p-0 m-1'>
            <Card className='shadow-2xl' style={{  height: '15rem'}}>
            <Card.Img src = " https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80"
            style={{height: '80%', borderRadius: '0px'}}></Card.Img>

             
            <Card.Body className='text-center flex align-items-center justify-content-center ' style = {{backgroundColor:'black'}}>
                <Card.Text  style = {{'color':'white'}} > Non Veg Appetizers</Card.Text>

            </Card.Body>
            </Card>
            </Col>
            <Col  className='p-0 m-1' style={{borderRadius: '18px'}}>
            <Card className='shadow-2xl' style={{  height: '15rem'}}>
            <Card.Img src = "https://images.pexels.com/photos/16936596/pexels-photo-16936596/free-photo-of-meat-fries-and-food-in-bowl.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            style={{height: '80%', borderRadius: '0px'}}></Card.Img>

             
            <Card.Body className='text-center flex align-items-center justify-content-center ' style = {{backgroundColor:'black'}}>
                <Card.Text  style = {{'color':'white'}} > Main Course</Card.Text>

            </Card.Body>
            </Card>
            
            </Col>
            <Col className='p-0 m-1'>
            <Card className='shadow-2xl' style={{  height: '15rem'}}>
            <Card.Img src = " https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80"
            style={{height: '80%', borderRadius: '0px'}}></Card.Img>

             
            <Card.Body className='text-center flex align-items-center justify-content-center ' style = {{backgroundColor:'black'}}>
                <Card.Text  style = {{'color':'white'}} > Soups and Salads</Card.Text>

            </Card.Body>
            </Card>
            </Col>
            <Col className='p-0 m-1'>
            <Card className='shadow-2xl' style={{  height: '15rem'}}>
            <Card.Img src = " https://images.pexels.com/photos/16871293/pexels-photo-16871293/free-photo-of-chocolate-cake-with-strawberries.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            style={{height: '80%', borderRadius: '0px'}}></Card.Img>

             
            <Card.Body className='text-center flex align-items-center justify-content-center ' style = {{backgroundColor:'black'}}>
                <Card.Text  style = {{'color':'white'}} > Deserts</Card.Text>

            </Card.Body>
            </Card>
            </Col>
            </Row>
            </div>

            <RestaurantTile/>

            <RestaurantTile/>
            <RestaurantTile/>

            <RestaurantTile/>
            
            <RestaurantTile/>
            <RestaurantTile/>
            <RestaurantTile/>


            <RestaurantTile/>

          


        </Container>
        </div>
    );
}

export default Home; 
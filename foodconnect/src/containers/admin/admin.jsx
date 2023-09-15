import React, { useState, useRef } from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {Button, Card, Row, Col, ButtonGroup} from 'react-bootstrap';
import "./admin.css";


import NavbarMenu from "../navbar/navbar";
import RestaurantTile from "../restaurantTile/restaurantTile";


const Admin = (props) => {

    return (
        <div>
          <NavbarMenu/>

          <Container className='mx-22 my-0.1' style={{width: "58%"}}>

        <div className="justify-content-start mx-22">
            <Row >
            <Col className='p-0 m-1'  >
            <ButtonGroup aria-label="Basic example">
                           
                                <Button variant="outline-dark" size="sm">Register shop</Button>
            </ButtonGroup>
            </Col>

            
            </Row>
            </div>

            <RestaurantTile/>

            <RestaurantTile/>
            <RestaurantTile/>

            


            <RestaurantTile/>

          


        </Container>
        </div>
    );

}


export default Admin; 
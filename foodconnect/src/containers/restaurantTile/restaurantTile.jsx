import React, {useState} from 'react';
import {Card,Row,Col, CardImg , Container,ListGroup, Button, ButtonGroup} from 'react-bootstrap';
import starIcon from './star.png';
 
const RestaurantTile = (props) => {

    const [quantity , setQuantity] = useState(0);

    return (
        <div>
            <Card style={{width:'100%'}} className='relative shadow-2xl my-4'>
               <Row>
                
                <Col>
                <CardImg src = "https://static.vecteezy.com/system/resources/previews/010/411/845/original/restaurant-logo-design-template-free-vector.jpg" 
                style = {{width: '14rem', height :'10rem'}}  className='float-left'/>
                </Col>
                <Col><Card.Body className='relative'>
                <Card.Title className='relative text-center flex align-items-center justify-content-center'>HomeMade Pizza with cheese</Card.Title>
                
                <Card.Text className='relative text-center flex align-items-center justify-content-center'>Location: Windsor</Card.Text>
                <Card.Text className='relative text-center flex align-items-center justify-content-center'>Owner: <img src={starIcon} className='h-3 m-1'/> 9.8</Card.Text>
                </Card.Body>
                </Col>
                <Col>

                    <Container className='relative text-center flex align-items-center justify-content-center'>
                    <ListGroup variant="flush" style={{border: '0px'}} >
                        <ListGroup.Item>Cuisine: Italian</ListGroup.Item>
                        <ListGroup.Item>Aprx for 2 : 10 - 100 CAD</ListGroup.Item>
                    </ListGroup>
                    </Container>

                </Col>
                
                 
                 </Row>
            </Card>


        </div>
    );
}

export default RestaurantTile;
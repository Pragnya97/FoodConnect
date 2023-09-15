import React from 'react';
import {Card,Row,Col, CardImg , Container,ListGroup, Button, ButtonGroup} from 'react-bootstrap';

const FoodTile = (props) =>{
    return (
        <div>
            <Card style={{width:'100%'}} className='relative shadow-2xl my-2'>
               <Row>
                

                <Col>

                    <Container className='relative text-center flex align-items-center justify-content-center'>
                    <ListGroup variant="flush" style={{border: '0px'}} >
                        <ListGroup.Item><strong>Pizza with Vegetables</strong></ListGroup.Item>
                        <ListGroup.Item><strong>10 CAD</strong></ListGroup.Item>
                        <ListGroup.Item > 
                            <ButtonGroup aria-label="Basic example">
                                <Button variant="outline-dark" size="sm" > - </Button>
                                <p className='mx-2'>  </p>
                                <Button variant="outline-dark" size="sm"> + </Button>
                            </ButtonGroup>
                        </ListGroup.Item>
                    </ListGroup>
                    </Container>

                </Col>

                <Col>
                <CardImg src = "https://st.depositphotos.com/1003814/5052/i/950/depositphotos_50523105-stock-photo-pizza-with-tomatoes.jpg" 
                style = {{width: '14rem', height :'10rem'}}  className='float-right'/>
                </Col>
                
                 
                 </Row>
            </Card>
        </div>
    );
}

export default FoodTile;
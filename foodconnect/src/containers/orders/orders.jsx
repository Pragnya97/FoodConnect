import React from 'react';
import { Container, Navbar ,ListGroup,Card} from 'react-bootstrap';
import NavbarMenu from '../navbar/navbar';
import starIcon from './star.png';

import FoodTile from '../foodTile/foodTile';
const Orders = (props) => {
    return (
        <div>
            <NavbarMenu/>
            <Navbar className="bg-body-tertiary relative shadow-md" style={{'backgroundColor': 'white'}} sticky="top" >
        <Container >
          <Navbar.Brand href="#">
            <h3>
            Restaurant Title</h3>
          </Navbar.Brand>
          <Navbar className="justify-content-end">
          <Navbar.Text>
          <Container className='relative text-center flex align-items-center justify-content-center'>
                    <ListGroup variant="flush" style={{border: '0px'}} >
                        <ListGroup.Item > <Card.Text className='relative text-center flex align-items-center justify-content-center'>Owner: <img src={starIcon} className='h-3 m-1'/> 9.8</Card.Text></ListGroup.Item>
                        <ListGroup.Item>Address: Huron Church</ListGroup.Item>
                    </ListGroup>
                    </Container>
          </Navbar.Text>
          <Navbar.Text>
          
          </Navbar.Text>

        </Navbar>
        </Container>
      </Navbar>

      <Container className='mx-22' style={{width: "50%"}}>

        <FoodTile/>

        <FoodTile/>
        <FoodTile/>
        <FoodTile/>
        <FoodTile/>
        <FoodTile/>
        <FoodTile/>
        <FoodTile/>
        <FoodTile/>
        <FoodTile/>


      </Container>
        </div>
    );
}

export default Orders;
import React from 'react';
import { Container, Navbar, Button } from 'react-bootstrap';
import brandImage from './logo.png';

const NavbarMenu = (props) => {
    return (
        <div>
        <Navbar className="bg-body-tertiary border border-sky-500" style={{'backgroundColor': 'white'}}  sticky="top" >
        <Container fluid>
          <Navbar.Brand href="/home">
            <img
              alt=""
              src={brandImage}
              width="300"
              height="50"
              //className="d-inline-block align-top"
            />{''}
          </Navbar.Brand>
          <Navbar className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login"> Mark Otto </a>
          </Navbar.Text>
          <Navbar.Text>
          <Button variant="light">Logout</Button>{' '}
          </Navbar.Text>

        </Navbar>
        </Container>
      </Navbar>
        </div>
    );
}

export default NavbarMenu;
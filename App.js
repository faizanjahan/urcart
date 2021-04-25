import './App.css';
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { DropdownButton } from 'react-bootstrap'
import { ButtonGroup } from 'react-bootstrap'
import { Dropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Background from '../src/2593125.jpg';
import { Jumbotron } from 'react-bootstrap';
import MensCollection from '../src/image/mens1.jpg';
import Women from '../src/image/women.jpg';
import Kids from '../src/image/kids.jpg';
import Grooming from '../src/image/Grooming.jpg';
import { Carousel } from 'react-bootstrap';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, FormControl } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import addproduct from './Page/addproduct';
import updateproduct from './Page/updateproduct';
import viewproduct from './Page/viewproduct';
import Home from './Page/Home';


function App() {
  return (
    <div className="App">
      <h1>
        Welcome to UrCart Shopping 
      </h1>
    <Navbar bg="dark" variant="dark" expand="lg">
  <Navbar.Brand href="#">Browse</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#">Home</Nav.Link>
      <NavDropdown title="Category" id="basic-nav-dropdown">
        <NavDropdown.Item href="#">Men's</NavDropdown.Item>
        <NavDropdown.Item href="#">Women's</NavDropdown.Item>
        <NavDropdown.Item href="#">Kid's</NavDropdown.Item>
        <NavDropdown.Divider />
      </NavDropdown>

      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#">Add Product</NavDropdown.Item>
        <NavDropdown.Item href="#">View Prodcut</NavDropdown.Item>
        <NavDropdown.Item href="#">Update Product</NavDropdown.Item>
        <NavDropdown.Divider />
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
<div>
  
<Carousel fade>
  <Carousel.Item>
    <img height="1000px"
      className="d-block w-100"
      src={MensCollection}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>MENS's COLLECTION</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Women}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>BEAUTIFULL LADY COLLECTION</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item >
    <img
      className="d-block w-100"
      src={Kids}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>BABY KIDS</h3>
      
    </Carousel.Caption>
  </Carousel.Item>

  
</Carousel>
   </div>
  </div>
  );

}

export default App;

import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import treintayseisnftDrive from "../img/treintayseisnftDrive.png"
export function MyMenu() {
  return (
    <>
      {['sm'].map((expand) => (
        <Navbar key={expand} bg="dark" variant="dark" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand as={Link} to="/"><img  src={treintayseisnftDrive} alt="treintayseisnftDrive" /></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton className="lateral">
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} >
                NFT Drive
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3" className="lateral">
                  <Nav.Link as={Link} to="/">Home</Nav.Link>
				  <Nav.Link as={Link} to="/nftdrive">Up file</Nav.Link>	
                  
				  
                 
                </Nav>
               
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

















//import Container from 'react-bootstrap/Container';
//import Nav from 'react-bootstrap/Nav';
//import Navbar from 'react-bootstrap/Navbar';
//
//export function MyMenu() {
//  return (
//    <>
//      <Navbar bg="dark" variant="dark">
//        <Container>
//          <Navbar.Brand href="/">Blockpaper</Navbar.Brand>
//          <Nav className="me-auto">
//            <Nav.Link href="/">Inicio</Nav.Link>
//            <Nav.Link href="/manager">Manager</Nav.Link>
//            <Nav.Link href="/test">Test</Nav.Link>
//          </Nav>
//        </Container>
//      </Navbar>
//      <br />
//      
//
//      <br />
//
//    </>
//  );
//}














//import {Navlink} from 'react-router-dom'
//import '../styles.css'
//import * as React from "react";
//import { Link } from "react-router-dom";
//import { Button } from 'react-bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';


//export function Navbar(){
//	return (
//	<div className="menu">
//	
//	<Container >
//      <Row>
//	  
//        < Col sm={4} md={4} lg={4} xl={4}><Link to='/'>Inicio</Link></Col>
//		< Col sm={4} md={4} lg={4} xl={4}><Link to='/manager'>Manager</Link></Col>
//		< Col sm={4} md={4} lg={4} xl={4}><Link to='/test'>Test</Link></Col>
//		
//      </Row>
//    </Container>
//	<Container >
//      <Row>
//	  
//        < Col sm={12} md={12} lg={12} xl={12}><h3>BlockPaper</h3></Col>
//		
//		
//      </Row>
//    </Container>
//	
//	
//	
//	
//	
//	</div>
//)}
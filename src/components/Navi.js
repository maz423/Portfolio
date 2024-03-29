
import './Navi.css'
import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { useState } from 'react';

import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'







export const Navi = (props) => {

const handleSubmitClick = (e) => { //handle submit event.
  
    }
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
        

return (


    <Navbar collapseOnSelect expand="lg"  variant="dark">
    <Container fluid>
    
    <Navbar.Brand className='logo' ><motion.img 
      initial={{y:-250,opacity:0}}
      animate={{y:5,opacity:1}}
      transition={{delay:1.2}}
      
      src='https://drive.google.com/thumbnail?id=1dlH43CZrs-RMqiIV3wN_D_hKfOSRNbl4&sz=w1000" alt=""/'
      
      className='logo'
      width={50}
      height={50}
      
      alt='...'
      style={{ maxWidth: '24rem' }}
    /></Navbar.Brand>
    
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      
      <Nav className="me-auto">
       {/* <Nav.Link href="/">About</Nav.Link> */}
       <motion.div whileHover={{y:-5,scale : 1.3}}>
       <Nav.Link  as={Link} to='/'  >About</Nav.Link>
       </motion.div>
{/*<motion.div whileHover={{y:-5,scale : 1.3}}>
       <Nav.Link as={Link} to='/Skills'>Skills</Nav.Link>
       </motion.div>*/}
       <motion.div whileHover={{y:-5,scale : 1.3}}>
       <Nav.Link as={Link} to='/Projects'>Projects</Nav.Link>
       </motion.div>
      </Nav>
     
      <Nav>
        
        <motion.div whileHover={{y:-5,scale : 1.3}}>
        <Nav.Link eventKey={2} href="#memes" onClick={handleShow}>
          Contact me
        </Nav.Link>
        </motion.div>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contact information</Modal.Title>
        </Modal.Header>
        <Modal.Body> Email: Mohammad.Zargar@usask.ca<br></br>
                     Phone: +1 306-221-1921<br></br>
                     
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
      
      </Nav>
    </Navbar.Collapse>
    </Container>
    
  </Navbar>

  

    


   

 











);


}

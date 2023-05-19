import './DisplayProjects.css'
import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { useState } from 'react';
import {motion} from 'framer-motion'
import { Projects } from './Projects';
import {ProjectData} from './ProjectData';
import Dropdown from 'react-bootstrap/Dropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';








export const DisplayProjects = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    

    return (
    
       
    <section>
      
      {/* <div style={{ textAlign: 'right' }}>
      <Button className="Sort" variant="danger" onClick={handleShow}>
        Filter Projects
      </Button>
    </div>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title> Filter by</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas> */}
    {/* <Dropdown className='Sort'>
      <Dropdown.Toggle variant="dark" id="dropdown-basic">
        Sort by Tech Stack
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Java</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Python</Dropdown.Item>
        <Dropdown.Item href="#/action-3">C++</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown> */}

    {ProjectData.map((project) => (
        <Projects
          title={project.title}
          description={project.description}
          pictures={project.pictures}
          captions={project.captions}
          Git={project.githubLink}
          // Pass other project data as props as needed
        />
      ))}
    
    
    
    </section>
    
    
    );
    
    
    }
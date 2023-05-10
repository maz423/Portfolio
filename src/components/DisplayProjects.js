import './About.css'
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






export const DisplayProjects = (props) => {

    

    return (
    
       
    <section>

    {ProjectData.map((project) => (
        <Projects
          title={project.title}
          description={project.description}
          pictures={project.pictures}
          captions={project.captions}
          // Pass other project data as props as needed
        />
      ))}
    
    
    
    </section>
    
    
    );
    
    
    }
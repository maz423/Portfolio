
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
import {Skills} from './components/Skills'
import {Projects} from './components/Projects'
import { About } from './components/About';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import {AnimatePresence} from 'framer-motion'




export const AnimatedRoutes = (props) => {


        

return (

<Routes  >

<Route exact path='/' element={<About/>}/>
<Route exact path='/Skills' element={<Skills/>}/>
<Route exact path='/Projects' element={<Projects/>}/>

</Routes>

                    
);


}
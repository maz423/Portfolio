import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import './App.css';
import { Navi } from "./components/Navi";
import { About } from './components/About';
import {Skills} from './components/Skills'
import {Projects} from './components/Projects'

import {AnimatedRoutes} from './AnimatedRoutes'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';





export default function App() {
  return (
    <div className="App">

     
    
     
     <Router>
     <Navi/>
     <AnimatedRoutes/>
     </Router>
     
     {/* <header className="App-header"></header> */}
     
    
    </div>
  );
}
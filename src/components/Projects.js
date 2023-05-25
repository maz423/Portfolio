import './Projects.css'
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
import Carousel from 'react-bootstrap/Carousel'
import projectData from './ProjectData';







export const Projects = (props) => {


        

return (
<div className='page'>   




{/* ------------------------------------------------------ */}

<motion.div 
initial={{x:-1000}} animate={{x: 30 }} transition={{delay:0.4}}
className='skill-div'
>
   
<Row>

<Row><Col><h1 className='skill-head' > {props.title} </h1></Col> <Col><p style={{ fontWeight: 'bold' , marginTop:"10px" }}> Date: {props.date} </p></Col></Row>


<Col><p className='skills'> {props.description}
</p > 
<Row>
  {props.title == "Diet Genie" ? <div><motion.p animate={{x:50}} className='small-txt' > Links : <br></br><br></br><li ><a href={props.Git}><motion.img whileHover={{scale : 1.3}} className='Git' src='https://miro.medium.com/v2/resize:fit:720/format:webp/1*UBZYjKJigowCJOK4SaHicw.jpeg' height={50} width={50} /></a></li>
</motion.p>
<motion.p className='small-txt' initial={{x:-1000}} animate={{x: 200, y:-45 }} transition={{delay:0.4}}> Figma</motion.p></div>:(
  <div>
<motion.p animate={{x:50}} className='small-txt' > Links : <br></br><br></br><li ><a href={props.Git}><motion.img whileHover={{scale : 1.3}} className='Git' src='data:image/png;base64,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' height={50} width={50} /></a></li>
</motion.p>
<motion.p className='small-txt' initial={{x:-1000}} animate={{x: 200, y:-45 }} transition={{delay:0.4}}> Github</motion.p></div>)}
</Row>
<Row>
<motion.p animate={{x:50}} className='small-txt' >  <li ><a href='https://github.com/'><motion.img whileHover={{scale : 1.3}} className='Git' src='https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg' height={50} width={50} /></a></li>
</motion.p>
<motion.p className='small-txt' initial={{x:-1000}} animate={{x: 200, y:-45 }} transition={{delay:0.4}}> Comming soon</motion.p>
</Row>
<p className='skills' style={{ textAlign: 'left', marginLeft:"10px", fontSize:"Meduim" }}> <strong><span style={{ color: "#0b6fea" }}>Technologies used:</span></strong> {props.tech.join(", ")}</p>
</Col>


{ props.pictures.length == 0 ? <Col></Col> : 
<Col className='cor-img-div'>
  
    <Carousel>
      {
        (() => {
          const carouselItems = [];
          for (let index = 0; index < props.pictures.length; index++) {
            const picture = props.pictures[index];
            const caption = props.captions[index];

            carouselItems.push(
              <Carousel.Item key={index}>
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  src={picture}
                  height={400}
                  width={700}
                />
                <Carousel.Caption className='caption'>
                  <div className='carousel-div'>
                    <p>{caption}</p>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
            );
          }
          return carouselItems;
        })()
      }
    </Carousel>
  
</Col>}



</Row>
</motion.div>

{/* ------------------------------------------------------ */}










</div>                  
                 
);


}

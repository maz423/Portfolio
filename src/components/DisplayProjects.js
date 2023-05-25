import './DisplayProjects.css'
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import { useState,useEffect } from 'react';
import { Projects } from './Projects';
import {ProjectData} from './ProjectData';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Form, FormControl } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';
import './Skills.css';





export const DisplayProjects = (props) => {
  const [sorted,setSorted] = useState([]);
  const [data,setData]  = useState([]);
  const [show, setShow] = useState(false);
  const availableTechnologies = ['Java', 'Docker', 'Python', "GUI" , "MVC","OOP", "UI/UX", "ReactJs","JavaScript","npm", "HTML/CSS","Bootstrap","Muti-thrading", "Sockets", "TCP"];
  const availableTimeOptions = ['Latest to Oldest', 'Oldest to Newest'];
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);
  const [selectedTime, setSelectedTime] = useState('');
  

useEffect(() => {
    if(selectedTechnologies.length == 0 ){
      setData(ProjectData);
      }
  

  }, []);

  useEffect(() => {
   
    setSorted(data.sort((a, b) => new Date(b.date) - new Date(a.date)));


  }, [data]);


 






  const handleTechnologyChange = (event) => {
    const { checked, nextSibling } = event.target;
    const label = nextSibling.textContent;
    
    if (checked) {
      setSelectedTechnologies((prevSelected) => [...prevSelected, label]);
     
      
    } else {
      setSelectedTechnologies((prevSelected) =>
        prevSelected.filter((tech) => tech !== label)
      );
      
    }
  };


  const handleTimeChange = (event) => {
    setSelectedTime(event.target.nextSibling.textContent);
  };


  const handleApplyClick = () => {
    // Handle the selected options here

    console.log('Selected Technologies:', selectedTechnologies);
    console.log('Selected Time:', selectedTime);

    if(selectedTechnologies.length == 0){
      setData(ProjectData);
    }

    else{

      var temp = [];

      selectedTechnologies.forEach(selectedtech => {
        ProjectData.forEach(element => {
          element.Tech.forEach(tech => {
            if (tech === selectedtech && !temp.includes(element)) {
              temp.push(element);
            }
          });
        });
      });
      
      setData(temp);
      }
  
  };

  const handleReset = () => {
    setSelectedTechnologies([]);
    setSelectedTime([]);
    setData(ProjectData);
  };


return (
    
      
<section className='Display'>

<h1></h1>

<div  style={{ display: "flex", justifyContent: "flex-end", marginRight:"10px" }}>
  <Button variant="danger" onClick={handleShow}>
    Filter Projects
  </Button>
</div>

      
      

<Offcanvas show={show} onHide={handleClose} placement="end">
  <Offcanvas.Header closeButton>
    <Offcanvas.Title style={{ fontWeight: 'bold'  }}> Filter by</Offcanvas.Title>
  </Offcanvas.Header>
<Offcanvas.Body>

  <Form style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridGap: '10px', maxWidth: '400px' }}>
  <p style={{ gridColumn: '1 / -1', fontWeight: 'bold' }}>By Technology:</p>
  {availableTechnologies.map((technology) => (
    <div key={technology} className="mb-3">
      <Form.Check
        label={technology}
        name="group1"
        checked={selectedTechnologies.includes(technology)}
        onChange={handleTechnologyChange}
        type="checkbox"
        style={{ gridColumn: '1 / -1' }}
      />
    </div>
  ))}
   </Form>

  {/* <Form>
   <p style={{ fontWeight: 'bold' }}>By Time:</p>
   {availableTimeOptions.map((option) => (
    <div className="mb-3">
      <Form.Check
        label={option}
        name="group1"
        checked={selectedTime === option}
        onChange={handleTimeChange}
        type="radio"
      />
    </div>
  ))}
  </Form> */}
        
            
<div style={{ textAlign: 'center' }}>
      
      <Button  variant="success" onClick={handleApplyClick}>
        Apply
      </Button>&nbsp;
      <Button  variant="danger" onClick={handleReset}>
        Reset filters
      </Button>
</div>
 </Offcanvas.Body>
</Offcanvas>
     
    {sorted.length == 0 ? <h1>if:{data.length}</h1>:   
    <div>
    {data.map((project) => (
        <Projects
          title={project.title}
          description={project.description}
          pictures={project.pictures}
          captions={project.captions}
          Git={project.githubLink}
          date={project.date}
          tech={project.Tech}
          // Pass other project data as props as needed
        />
      ))}</div>}
    
  
</section>
    
    
    );
    
    
    }
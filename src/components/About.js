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




export const About = (props) => {


        

return (
<motion.div 

>
<motion.Container> 
<Row>
<Col>
<motion.h1 initial={{x:-500}} animate={{x: 50 }} transition={{delay:0.5}} className='welcome'> Hello, Welcome to my Portfolio <br></br> 
                         </motion.h1>
                         <motion.p  initial={{opacity:0,x:60}} animate={{opacity:1 }} transition={{delay:1}} className='about' >  My name is Mohammad Aman Zargar, and I am a recent graduate from the University of Saskatchewan with a degree in Computer Science. <br></br> 
                        
                       </motion.p>

                       <motion.h2 initial={{x:-500}} animate={{x: 50 }} transition={{delay:0.5}} className='welcome'> Brief summary of my Computer Science education <br></br></motion.h2>
                       <motion.p  initial={{opacity:0,x:60}} animate={{opacity:1 }} transition={{delay:1}} className='about' >  Throughout my studies, I have developed a strong foundation in programming, including expertise in Python, C, and object-oriented programming. I have also gained experience in data structures and algorithms, full-stack web development, mobile and cloud computing, as well as other key areas such as software engineering, human-computer interaction, and operating systems.

My passion for technology has driven me to explore advanced topics such as deep learning and artificial intelligence, which I have studied in-depth during my academic career. I believe that these cutting-edge technologies have the potential to revolutionize the world, and I am excited to be part of the next generation of innovators who will bring these ideas to fruition. <br></br> 
                        
                        </motion.p>
                       
                         <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.4}}>
                         <motion.h3 initial={{x:-500}} animate={{x: 50 }} transition={{delay:0.5}} className='welcome'> Links: <br></br><br></br></motion.h3>
                         <Row>
                         <Col>
                         <li><a href='https://www.linkedin.com/in/mohammad-amaan-zargar-3758a1172/'><motion.img whileHover={{scale : 1.3}} className='Git'src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACECAMAAABmmnOVAAAAY1BMVEUAd7f///8AcLQAdbYmfbri6/Tf7fV+rNGLt9f2+vwAbrN6q9FSj8I9isAAcrWiwdwAarF2ps4Ufrrn8PbA1+i2zeSFstQAZa8wgbzL3exel8a30eXZ6PJpmMdrocymxt+Yu9n0n1coAAAD00lEQVR4nO2cW8OyIAyAkWkpKmmmqZX6/3/lZwcrbSQvfYIX7KIbDz0M2MYYEucuXp7Ge6JR9nGae48/J7ffLATGAXRCAHAGYfaCOLhUK8AThLqHAaJNTBDcJWnvEAeDDD3F4QqRuSYZCHGzHiKkZiFo6BBP76T4FACP5MwsAyEsJyk3DcFTEhvujb4/YrI3D6HVXahIb90p5SYV1buX8hIWRXopmSkQDml193BOVjVgYgZBUm+cN9lEiXZlAD85E2l1QwBUU4be1ertEUQPVzlpNe/JDmNwHF+jt4UowCECjQb+eMAZ+g7RFoEBiBicoNSlCtoJIRxf1wzhyPQcRFdEDGQjhsiOeiBIKZgbN9FkKqD8wuDoshSr0ISbiRkCXWMCc16DVLqsFWvFEJ0uHwaxGCLS5jyOZ+O90ZvMRgRRa4xrmMCN5lpX74B2yEbvwhn2iK3IXM2hLt9/6KIqtS89YBpV+MzAIgyo2w6ZTsfbuYYySsDcqMhPh3wbERNqeHJQliSMms5pWfldADinnDHei2J/Qv/4WMZ5kn60jGWcn+csIXFa+F3b7vxtU7JEIX8PkO4m0rw3h0X+5HJXP406sLJps1GQGFRFTP86y7HoqnrpgvmIayn4Q0dljgWIQdXwP9lcPLjqhqaAi112bmtEBmha4Sbn+g8hKhDUi54HCB6i/xHyvifwS4NURFoZ4HrYGzZPiC0OQYF/iU9v4sWyI0MZQpxUeEogS6EKcRQPhzcKyfSCIkRaSDD0wRGRolCEaL+tH9/vkwoTFSGkpZGZIktDbGR8ydIQV4tiHkIm4bM4hMxSbnkIibXc8hASC6nlIST6QwPEbtZg/QiRteklujQd+pKHnJeF2KTXgPJaJXKsxdmv+UKFXyBOyau3IRG6tKCeG5k/QOTjBSMTJutnN+jVIc7T9jFRj3RzlkId4iOHAXvBnbMbasoQ7WfzqCDamk0EKkMge2S8xm+d9WGqEBX24gS/N1hKEwU22BJ8aAYLjYkATToLZmkwF10pQuBVSiK1zRWPKELgA16UpJ5bfqiG/Gg3Q42vBOZ2mxUhChxCsOm9kCbw6jkRxEKasBAWwkJYCAthISyEhbAQFsJCWAgLYSEshIX4fxBqpQt4zlwVgjD0bMXzZAUQ9LWCBBBHW5TN77rgJ11e5SwF0rqtYPOAR1hJo0x9KW0KfyTF5b28iEaTy34RCZvGy+3kZn8rV9LIJzVMdPzURwnU1xKmmXqp1cgqDiiu4qjmKg6truL47ioOMq/iSPc6Drev4pj/Oj54sI5PP6zjIxiO4c+B/AM/001B1JuukQAAAABJRU5ErkJggg==' height={50} width={50}/></a></li>
                         </Col>
                         <Col>
                         <li ><a href='https://github.com/'><motion.img whileHover={{scale : 1.3}} className='Git' src='data:image/png;base64,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' height={50} width={50} /></a></li>
                         </Col>
                         <Col>
                         <li ><a href='https://github.com/'><motion.img whileHover={{scale : 1.3}} className='Git' src='data:image/png;base64,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' height={50} width={50} /></a></li>
                         </Col>
                         </Row>
                         </motion.div>
                         </Col>
                        
                         
      <Col>
      
      {/* <motion.img 
      initial={{y:-250,opacity:0}}
      animate={{y:100,opacity:1}}
      transition={{delay:1.2}}
      src='https://drive.google.com/uc?export=view&id=1dlH43CZrs-RMqiIV3wN_D_hKfOSRNbl4'
      className='img-thumbnail'
      width={250}
      height={200}
      
      alt='...'
      style={{ maxWidth: '24rem' }}
    /> */}
    
      </Col>

</Row>
    

</motion.Container> 
                         
</motion.div>
                    

    );


}
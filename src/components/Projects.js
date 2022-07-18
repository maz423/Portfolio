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




export const Projects = (props) => {


        

return (
<div>   




{/* ------------------------------------------------------ */}

<motion.div
initial={{x:-1000}} animate={{x: 30 }} transition={{delay:0.4}}
className='skill-div'
>
   
<Row>

<h1 className='skill-head' >Ecommerce-app :</h1>   



<p className='skills'> The web app allows University students to buy or sell used books and Allows Book stores to list their books. <br></br>This is a Team-based project where I am responsible for designing and implementing the front end of the web application using React, Bootstrap, HTML, CSS, JavaScript..</p>


<Col>
<motion.p animate={{x:35}} className='small-txt' >Here is some of the code i have written in python : <li ><a href='https://github.com/'><motion.img whileHover={{scale : 1.3}} className='Git' src='data:image/png;base64,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' height={50} width={50} /></a></li>
</motion.p>
</Col>

<Col>
<Carousel>
      <Carousel.Item>
      <motion.img initial={{opacity:0}} animate={{opacity:0.7}}    src='https://drive.google.com/uc?export=view&id=1meZF5I-NWwO_NbLz3BStYZUoHpt9eOQy' height={400} width={700} />

        <Carousel.Caption>
          <div className='corousel-div'>
          <h3  className='font-Roman'> Homepage</h3>
          <p>Click arrow to see more</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <motion.img initial={{opacity:0}} animate={{opacity:0.7}} transition={{delay:1.5}}   src='https://drive.google.com/uc?export=view&id=1YovSFusdHr7JbCrUsssZGhx7cXBGCxIF' height={400} width={700} />


        <Carousel.Caption>
        <div className='corousel-div'>
          <h3 className='font-Roman' >Buy Books
          </h3>
          <p>Users have the option of making an offer or adding a book to their wishlist</p>
          </div>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <motion.img initial={{opacity:0}} animate={{opacity:0.7}} transition={{delay:1.5}}   src='https://drive.google.com/uc?export=view&id=14KTb_8P3_-6OmBRZbYoPBLlTH0PMUdyE' height={400} width={700} />


        <Carousel.Caption>
        <div className='corousel-div'>
          <h3 className='font-Roman' >Send offers to buyers</h3>
        </div>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

</Col>


</Row>
</motion.div>

{/* ------------------------------------------------------ */}

<motion.div
initial={{x:-1000}} animate={{x: 30 }} transition={{delay:0.2}}
className='skill-div'
>
   
<Row>

<h1 className='skill-head' >Portfolio web app :</h1>   


<p className='skills'> The web app allows University students to buy or sell used books and Allows Book stores to list their books. <br></br>This is a Team-based project where I am responsible for designing and implementing the front end of the web application using React, Bootstrap, HTML, CSS, JavaScript..</p>


<Col>
<motion.p animate={{x:35}} className='small-txt' >Here is some of the code i have written in python : <li ><a href='https://github.com/'><motion.img whileHover={{scale : 1.3}} className='Git' src='data:image/png;base64,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' height={50} width={50} /></a></li>
</motion.p>
</Col>




</Row>
</motion.div>

{/* ------------------------------------------------------ */}

<motion.div
className='skill-div'
initial={{x:-1000}} animate={{x: 30 }} transition={{delay:0.6}}
>
   
<Row>

<h1 className='skill-head' > Online registeration system for a CBO :</h1>   


<p className='skills'> Designed a 3 tier Web application to help the organization in keeping track of their staff members and manage the records of their customers.<br></br> Using React, JavaScript, HTML, MySQL, and Docker (Full-stack web development). </p>


<Col>
<motion.p animate={{x:35}} className='small-txt' >Here is some of the code i have written in python : <li ><a href='https://github.com/'><motion.img whileHover={{scale : 1.3}} className='Git' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIMAAACDCAMAAACZQ1hUAAAAY1BMVEUAAAD///+jo6PPz8/V1dUZGRlERETq6urj4+NmZmb8/PxYWFiRkZFLS0v09PS7u7sKCgp3d3dvb28uLi6BgYEnJyfCwsKwsLBSUlIzMzOpqalfX1/d3d06OjqLi4uZmZkgICA24B/YAAAFb0lEQVR4nO1c65ayOgwFAcu1ihcUwYH3f8pDdRigSekNhbPWt//MWs4Etm2S7ibtOG4PfxcFzrcQRDv/783O78/D/mvv77E/TDiQ6OsMGCIycPCOq1BwnKPXc/BWYsDgvTmQtUaB4UheHNbxhR4R43BYlYLjHDoO3w/KKfau469MwekY7Nam0DFY1yMZIud7a4QI6zP4hyUQXM/3/Ichv5+vwdcz/j29+cQdg/i3NPna+5PUd0Xwmy/w2Dd1LGTAEIfNZ7N/UswT+KVRfG4wLqECgTfCy0cY5OoMGEi+OINM7Ici+PdlKey0GTAsuSZXRP4+FKRaikKjEgw44mYRBsFB/qoZHBZYmku9cIAIS1sKmfk89IgzOwqVPYWOhJVnJktQ6EhY5O5kEQYMxiTKZUaBITZ0zKttRIwRXo04eAtSMCww3Bal4Lo3fQrR9AmnKN/VVPmFtN7l0Wn6mfaO7jh933tn/EzVWND0+fr76XpPdZU3t0j89J+f5DrCP/V/nE5/oVnp4IYxHsmRfFjIKSFhWIchIcP4kJGK41PcCb5oBlxY0vHvrsxbqdfkUVa270/KLMobjxG5TWKQm7pQhwI3iLxxlZ5Rs3PKrQx8hkk1OPAJ0rR6yKeYWN204UzdwpBDwT9IWVa1QD4uxoG0ipY/vOViczEKcgngWkUMOUA9rhgaJ2DoUjNhGiBpVS1HYDrabOOWI09SS5aYcnkYcXggT1IKT4w8MVMgV2x/pjKkiG4w1qSYJlbQEQHCXTWgIGCYu0Tu3yW00lpqOCCaVC5vL9DIpqZi9DiQXqcLtzZgipAn/hrYmMVlDxiftcykhC5p112AWZfIHAJGk2Fu6HEGX0oa6RFvIR86CeDkygYW+rGpdugBnVwWGLyStHVJLO/KVCV0Y9sCHywryr4VHDnbyhrkIJtdqL5s5wKOrD4Hg/3yBNAfZOoUcrDth0NZJuMA/cG2GQ03ybK5gKxtVm4GuHrLZhd68eK5WhrtUPjYVTixKqtMliGK1q4thKg5maqtoIndggGd3JUNbAZ1j8aGHQGcCiqrobeICLXpjiFzG7YyI6QyanN+yuhx2P7MvHG7R54mX4CwWr15qsQqifJNW4tYGW+0kMB03VZuh5XKqdlsIEGm5l2gIMZgVIg5om1RFU2EbDg71PpNkBIqagalB+Gtk1C3e50InqNkjE6Gq+uYqDsqTkU3hqIGQahe8z6J+lBUcU7/dAxNk9Nh/LQ6V3nEc+aohKoyvE8MsnS87JAin9c050sx12hR9qq/FJGyY7dVwH2tsNjlVQusrqfLo5CcUlBferLBhjUJ0j2MMix9KxwV0Wh9D7mSPrtn/+x5FYDWEJ7Soxo6K/AwEC59tUv47Tiu70TxaDIMkxU8PDpXkkzHWVDfw+rTY+htG8d95s7ylk71lSjC5o+M6PabR2Wk+DUb2ZiESGrPT4ZeW2/6ldi+qAivwycEb6nhskk6eDMYnDzuZj8r9k7QeHVYe48ZMTFDwWT5vw8O9l5nEtI4bbJ3Sk+87ogpUKNTY0M80lf7Ong0ndokTjVzIE/MwXC3NtTHhnbcc75xLqRgXFEaSijkqWYhomBRzBk2izRVaqsJKFhtWUcRSh99fbUUb/4+QIHfdsVhHbJw0eNgW9lD9356HKwp4PlXh4N5M2yEDMoCdQ7E8sBejyOopShzKJa72HChRhzooiec28KAQ2FXVYSYKCkVDv4nDpuPdi5yDuHyR7x/WfiKHPxPMWDIbsw7xcVeVmqmt4XiUYigmr3qkaTVv3tG/2esP3vBJu7rbeHe4hbub27hHusm7vNu4V7zJu53b+Ge+ybu+2/i/x64W/j/Dy/ts9r/wfgPlr45bzQOO30AAAAASUVORK5CYII=' height={50} width={50} /></a></li>
</motion.p>
</Col>

<Col>
<motion.img initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.5}} whileHover={{scale : 1.3}} className='Git' src='data:image/webp;base64,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' height={50} width={50} />

</Col>

</Row>
</motion.div>

{/* ------------------------------------------------------ */}

{/* ------------------------------------------------------ */}


{/* ------------------------------------------------------ */}










</div>                  
                    
);


}
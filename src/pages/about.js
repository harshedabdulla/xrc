import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import im1 from '../assets/img/im1.jpg';
import im2 from '../assets/img/im2.jpg';
import p2 from '../assets/img/p2.png';
import Card from 'react-bootstrap/Card';

const About = () => {
return (
	<div>
    <div className='maincontent'>
	
	<div className='main2'>
	<div className='pf1'>
	<h1>About</h1>
	<hr />

	<p className='pf3'>Given the choice, people prefer to engage in activities that involve the physical presence of other people, whether those activities be collaborating on a project, seeing a movie or play, going to a music concert or museum, dining at a restaurant, watching sports, or just chatting over coffee.

The NYU Future Reality explores how people will use future mixed reality technologies to better communicate and interact with each other when they are in the same physical space. Doing this right involves great technical challenges, but also great potential benefits.

In our optimistic view, the future can be a place where language itself will eventually take on new and rich visual dimensions, a sort of combination of Harry Potter and Harold and the Purple Crayon.

</p>
<br />

<h1>Description</h1>
<hr />
<p className='pf3'>Given the choice, people prefer to engage in activities that involve the physical presence of other people, whether those activities be collaborating on a project, seeing a movie or play, going to a music concert or museum, dining at a restaurant, watching sports, or just chatting over coffee.
</p>
	</div>
	<br />
	<br />
	<div className='aboutcol'>
		 <Container>
      <Row>
        <Col className='sec3col1'>
		<img src={p2} className='p2img'></img>
		<div className='addres1'>
		<h5>Cochin University of Science and Technology</h5>
		<p>University Road, South Kalamassery, Kalamassery, Kochi, Kerala 682022</p>
		</div>
		</Col>
		
        <Col className='sec3col2'>
		<h5>Sasigopalan</h5>
		<p>Director</p>
		<p>Professor and Head,</p>
		<p>Department of Mathematics,</p>
		<p>Cochin University of Science and Technology</p>
		<p>sgcusat@gmail.com</p></Col>
      </Row>
	  </Container>
	  </div>
	</div>
	</div>
	</div>

);
};

export default About;

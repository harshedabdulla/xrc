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

	<p className='pf2'>Given the choice, people prefer to engage in activities that involve the physical presence of other people, whether those activities be collaborating on a project, seeing a movie or play, going to a music concert or museum, dining at a restaurant, watching sports, or just chatting over coffee.

The NYU Future Reality explores how people will use future mixed reality technologies to better communicate and interact with each other when they are in the same physical space. Doing this right involves great technical challenges, but also great potential benefits.

In our optimistic view, the future can be a place where language itself will eventually take on new and rich visual dimensions, a sort of combination of Harry Potter and Harold and the Purple Crayon.

</p>
	
	</div>
	<Container className='enthiran'>
	<Row>
	<h2 className='sec2head1'>Events</h2>
	
	</Row>
	<div className='events1'>
	<Row><Col>
	<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={im1} />
      <Card.Body>
        	
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
	</Col>
	<Col>
	<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={im1} />
      <Card.Body>
       	
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
	</Col>
	<Col>
	<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={im1} />
      <Card.Body>
      	
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       
      </Card.Body>
    </Card>
	</Col>
	</Row>
	</div>
        
	</Container>
	<br />
	<br />
	<Container>
	<Row>
	
	<h2 className='sec2head2'>Blogs</h2>
	</Row>
	<div className='events1'>
	<Row><Col>
	<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={im2} />
      <Card.Body>
        	
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
	</Col>
	<Col>
	<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={im2} />
      <Card.Body>
       	
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
	</Col>
	<Col>
	<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={im2} />
      <Card.Body>
      	
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       
      </Card.Body>
    </Card>
	</Col>
	</Row>
	</div>
        
	</Container>

	<Container>
      <Row className='two sections'>
        <Col className='labcol1'>
		<Row><h2>Lab News</h2></Row>
		<Row><h6>Thank you Trebuchet for the kind support our research</h6></Row>
		<Row><h6>Lab News</h6></Row>
		<Row><h6>Lab News</h6></Row>
		</Col>

        <Col>
		<Row><h2>Tweets</h2></Row>
		<Row><h6>Thank you Trebuchet for the kind support our research</h6></Row>
		<Row><h6>Lab News</h6></Row>
		<Row><h6>Lab News</h6></Row>
		</Col>
      </Row>
	  </Container>
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

);
};

export default About;

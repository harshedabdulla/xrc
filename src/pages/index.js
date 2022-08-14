import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import im1 from '../assets/img/im1.jpg';
import im2 from '../assets/img/im2.jpg';
import Card from 'react-bootstrap/Card';

const Home = () => {
return (
	<div>
    <div className='maincontent'>
	<img src='.//assets/img/p1.png' alt='' />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<div className='main2'>
	<h1>Prototyping Human Interation</h1>
	<p className='pf1'>In a few years smartphones will be replaced by small high quality VR/AR glasses, enabling computer-supported face-to-face communication, and that will change everything. At XR lap Cusat, we are helping to make that future better, friendlier and more human centred to creating advancements in computer vision, augmented reality and virtual reality.</p>
	<button className='bt1'>Learn more</button>
	
	<Container className='enthiran'>
	<Row>
	<h2>Events</h2>
	</Row>
	<div className='events1'>
	<Row><Col>
	<Card style={{ width: '20rem' }}>
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
	
	<h2>Blogs</h2>
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
        <Col>
		<Row><h2>Lab News</h2></Row>
		<Row><h4>Thank you Trebuchet for the kind support our research</h4></Row>
		<Row><h4>Lab News</h4></Row>
		<Row><h4>Lab News</h4></Row>
		</Col>

        <Col>
		<Row><h2>Tweets</h2></Row>
		</Col>
      </Row>
	  </Container>

	</div>
	</div>
	</div>

);
};

export default Home;

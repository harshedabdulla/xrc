import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import im1 from '../assets/img/im1.jpg';
import im2 from '../assets/img/im2.jpg';
import p2 from '../assets/img/p2.png';
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
	<div className='pf1'>
	<h1>Prototyping Human Interation</h1>
	<p className='pf2'>In a few years smartphones will be replaced by small high quality VR/AR glasses, enabling computer-supported face-to-face communication, and that will change everything. At XR lap Cusat, we are helping to make that future better, friendlier and more human centred to creating advancements in computer vision, augmented reality and virtual reality.</p>
	<button className='bt1'>Learn more</button>
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
	
	<hr />
	<p>© copyrights @xrc cusat 2022</p></div>
	</div>
	</div>

);
};

export default Home;

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import icon from '../../assets/img/icon.PNG';



function Nbar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="index"><img src={icon} className='icon1'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="about">About</Nav.Link>
            <Nav.Link href="#events">Events</Nav.Link>
			<Nav.Link href="blogs">Blogs</Nav.Link>
            <Nav.Link href="contact">Contact</Nav.Link>
			<Nav.Link href="sign-up">Sign in</Nav.Link>
            </Nav>
          <Nav>
            <Nav.Link href="#=research">Research</Nav.Link>
            <Nav.Link eventKey={2} href="#members">
              Members
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nbar;
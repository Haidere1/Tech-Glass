import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../styles/navstyle.css'

function CollapsibleExample() {
  return (
    
    <Navbar collapseOnSelect expand="lg" bg="transparent" variant="light" style={{fontSize:"medium"}}>
      <Container>
      <Navbar.Brand>GreenTech Glass</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          
         <Nav.Item style={{paddingTop:"8px"}}>Home</Nav.Item>
          
          
          <Nav.Item style={{paddingLeft:"30px",paddingTop:"8px"}}>How To Choose Glass</Nav.Item>
          <Nav.Item style={{paddingLeft:"30px",paddingTop:"8px"}}>Latest Projects</Nav.Item>
          <Nav.Item style={{paddingLeft:"30px",paddingTop:"8px"}}>Low-E Glass</Nav.Item>
          <Nav.Item style={{paddingLeft:"30px",paddingTop:"8px"}}>Certifications/QC</Nav.Item>
            <NavDropdown style={{paddingLeft:"30px"}} title="Products" id="collasible-nav-dropdown">
              <NavDropdown.Item >Flat And Tempered Glass</NavDropdown.Item>
              <NavDropdown.Item >
                Heat Strengthened Glass
              </NavDropdown.Item>
              <NavDropdown.Item >Tempered Glass</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item >
                Go To Top
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Facilities" id="collasible-nav-dropdown">
              <NavDropdown.Item >Flat And Tempered Glass</NavDropdown.Item>
              <NavDropdown.Item >
                Heat Strengthened Glass
              </NavDropdown.Item>
              <NavDropdown.Item >Tempered Glass</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item >
                Go To Top
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link>About Us</Nav.Link>
          
            
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
}

export default CollapsibleExample;
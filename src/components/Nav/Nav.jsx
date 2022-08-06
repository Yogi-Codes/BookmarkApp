import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';


function CusNavbar(props) {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
      <Container>
        <li/>
        <li/>
        <li/>
        <li/>
        <li/>
        <li/>
        <li/>
        <li/>
        <li/>
        <li/>
        <li/>
        <li/>
        <li/>
        <li/>
        <li/>
        <li/>
        <li/>
        <li/>
        <li/>
        <li/>
        <li/>
        <li/>
        
        <Navbar.Brand href="#home">{props.title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          
              
            
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CusNavbar;
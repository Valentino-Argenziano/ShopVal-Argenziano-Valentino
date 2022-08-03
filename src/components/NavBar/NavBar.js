import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';


function CollapsibleExample() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="warning" variant="warning">
            <Container>
                <Navbar.Brand href="#home" id="title">Shop-Val</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Inicio</Nav.Link>
                        <Nav.Link href="#pricing">Zapatillas</Nav.Link>
                        <Nav.Link href="#pricing">Camisetas</Nav.Link>
                        <Nav.Link href="#pricing">Pelotas</Nav.Link>
                    </Nav>
                    <Nav>
                        <CartWidget/>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CollapsibleExample;
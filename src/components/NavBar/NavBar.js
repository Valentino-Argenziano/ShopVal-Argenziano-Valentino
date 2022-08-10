import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import {Link} from 'react-router-dom'


function CollapsibleExample() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="warning" variant="warning">
            <Container>
                <Navbar.Brand as={Link} to="/" id="title">Shop-Val</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/categoria/zapatillas">Zapatillas</Nav.Link>
                        <Nav.Link as={Link} to="/categoria/camisetas">Camisetas</Nav.Link>
                        <Nav.Link as={Link} to="/categoria/pelotas">Pelotas</Nav.Link>
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
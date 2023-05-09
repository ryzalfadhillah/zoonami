import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../../assets/images/logo.png';

function Navigation() {
    return (
        <Navbar expand="lg" fixed='top' className='mx-auto' style={{ backgroundColor: '#3C6255', maxWidth: 1280}}>
        <Container>
            <Navbar.Brand className="mr-auto">
            <Link to="/">
                <img
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="Logo"
                />
            </Link>
            <span className="ml-2 text-white">zoonami</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar" />
            <Navbar.Collapse id="navbar" className="justify-content-end">
            <Nav>
                <Nav.Item>
                <Link to="/" className="nav-link text-white">Home</Link>
                </Nav.Item>
                <Nav.Item>
                <Link to="/animals" className="nav-link text-white">Animals</Link>
                </Nav.Item>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}

export default Navigation;
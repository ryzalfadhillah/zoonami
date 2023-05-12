import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import About from '../../components/AboutUs/AboutUs';

const Welcome = () => {
    return (
        <>
            <div className="bg-light py-5">
                <Container className="d-flex align-items-center justify-content-center">
                    <div className="text-center">
                    <h1 className="mb-3">Selamat Datang di Zoonami</h1>
                    <Link to='/dashboard/animals'>
                    <Button variant="success" size="lg" className="px-5">
                        Management Binatang
                    </Button>
                    </Link>
                    </div>
                </Container>
            </div>
            <About />
        </>
    );
};

export default Welcome;

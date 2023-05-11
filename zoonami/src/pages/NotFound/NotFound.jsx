import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NotFoundPage() {
    return (
        <Container className="d-flex vh-100 justify-content-center align-items-center my-5 text-center">
        <Row>
            <Col>
            <h1>404 - Halaman tidak ditemukan</h1>
            <p className="lead">Maaf, halaman yang Anda cari tidak ditemukan.</p>
            <Link to="/">
                <Button variant="success" className="mt-3">Kembali ke Beranda</Button>
            </Link>
            </Col>
        </Row>
        </Container>
    );
}

export default NotFoundPage;

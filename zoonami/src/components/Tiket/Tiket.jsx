import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Ticket() {
    return (
        <Container className="ticket my-5 p-4 rounded-5" style={{ backgroundColor: '#A6BB8D'}}>
            <h2>Tiket Masuk</h2>
            <Row className="mt-4 d-flex justify-content-center">
                <Col md={6} lg={4} className="my-3">
                    <Card className="h-100 text-white rounded-5" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
                        <Card.Body>
                            <Card.Title>Tiket Dewasa</Card.Title>
                            <Card.Text>
                            Jadikan waktu luangmu lebih berarti dengan mengunjungi Kebun Binatang Zoonami. Dapatkan tiket dewasa dan nikmati pengalaman melihat berbagai macam binatang dari seluruh penjuru dunia.
                            </Card.Text>
                            <Card.Text>
                                <strong>Harga:</strong> Rp 25.000/orang
                            </Card.Text>
                            <Button type="button" class="btn btn-success">Beli Tiket</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4} className="my-3">
                    <Card className="h-100 text-white rounded-5" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
                        <Card.Body>
                            <Card.Title>Tiket Anak-anak</Card.Title>
                            <Card.Text>
                            Nikmati pengalaman tak terlupakan bersama keluarga di Kebun Binatang Zoonami dengan membeli tiket khusus anak-anak. Jelajahi keindahan alam dan berinteraksi dengan hewan yang lucu dan menggemaskan.
                            </Card.Text>
                            <Card.Text>
                                <strong>Harga:</strong> Rp 20.000/orang
                            </Card.Text>
                            <Button type="button" class="btn btn-success">Beli Tiket</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Ticket;

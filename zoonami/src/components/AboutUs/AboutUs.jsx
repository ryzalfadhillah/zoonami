// import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function About() {
    return (
        <Container className="about my-4 text-secondary-emphasis">
            <Row>
                <Col md={6}>
                    <div className="about-text rounded-3 d-flex flex-column justify-content-center align-items-center" style={{ backgroundColor: '#A6BB8D', height: '100%' }}>
                        <h2>About Us</h2>
                        <p>Selamat datang di Zoonami, sebuah kebun binatang modern yang didedikasikan untuk melestarikan dan melindungi keanekaragaman hayati. Kami menghadirkan pengalaman interaktif yang tak terlupakan bagi pengunjung segala usia. Bergabunglah dengan kami dan eksplorasi dunia binatang bersama Zoonami. </p>
                    </div>
                </Col>
                <Col md={6}>
                    <div className="about-image rounded-3">
                        <img src='https://images.unsplash.com/photo-1584706368162-73c7dab84d68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80' alt="About Us" height={400} className="img-fluid rounded-3" />
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default About;

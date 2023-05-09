import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ZooAnimals() {
    const animalsList = [
        {
            name: 'Harimau',
            image: 'https://source.unsplash.com/random/?tiger',
            description: 'Harimau adalah hewan karnivora terbesar ketiga setelah beruang kutub dan beruang coklat.'
        },
        {
            name: 'Gajah',
            image: 'https://source.unsplash.com/random/?elephant',
            description: 'Gajah adalah hewan terbesar di darat dan memiliki kecerdasan yang sangat tinggi.'
        },
        {
            name: 'Jerapah',
            image: 'https://source.unsplash.com/random/?girafe',
            description: 'Jerapah adalah hewan bertubuh tinggi dan memiliki leher panjang sehingga dapat mencapai daun-daun di atas pepohonan.'
        },
        {
            name: 'Singa',
            image: 'https://source.unsplash.com/random/?lion',
            description: 'Singa adalah hewan karnivora terbesar di Afrika dan merupakan lambang kekuatan dan keganasan.'
        }
    ];

    return (
        <Container className="my-5 p-3 rounded-5" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
            <h2 className='text-success'>Binatang di Zoonami</h2>
            <Row>
                {animalsList.slice(0, 4).map((animal, index) => {
                    const description = animal.description.split(' ').slice(0, 10).join(' ') + '...';
                    return (
                        <Col key={index} xs={12} md={6} lg={3} className="my-3 text-secondary-emphasis">
                            <Link to={`/animals/${animal.name}`} className="text-decoration-none">
                                <div className="animal-card p-3 rounded-3 " style={{ backgroundColor: '#A6BB8D' }}>
                                <img src={animal.image} alt={animal.name} className="img-fluid mb-3 rounded-top" style={{ height: '200px', objectFit: 'cover' }} />
                                <h4 className="text-success">{animal.name}</h4>
                                <p className="text-secondary">{description}</p>
                                </div>
                            </Link>
                        </Col>
                    );
                })}
            </Row>
            <div className="d-flex justify-content-center">
                <Link to="/animals" className="btn btn-outline-success mt-3">Lihat Lainnya</Link>
            </div>
        </Container>
    );
}

export default ZooAnimals;

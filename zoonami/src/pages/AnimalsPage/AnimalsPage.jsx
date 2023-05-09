import { useState } from 'react';
import { Container, Row, Col, Form, FormControl, Button } from 'react-bootstrap';
import Navigation from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';

const AnimalsPage = () => {
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
        },
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
        },{
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

    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredAnimalsList = animalsList.filter(animal => {
        return animal.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        <div style={{ backgroundColor: '#61876E' }}>
            <Navigation />
            <div className='mb-5'>.</div>
            <Container className="my-5 p-3 rounded-5" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
                <h2 className='text-success'>Binatang di Zoonami</h2>
                <Form className="d-flex mt-3">
                    <FormControl
                        type="search"
                        placeholder="Cari binatang..."
                        className="me-2"
                        aria-label="Search"
                        value={searchTerm}
                        onChange={handleInputChange}
                    />
                    <Button variant="success">Cari</Button>
                </Form>
                <Row>
                    {
                        filteredAnimalsList.length > 0 ?
                        filteredAnimalsList.map((animal, index) => {
                            const description = animal.description.split(' ').slice(0, 10).join(' ') + '...';
                            return (
                                <Col key={index} xs={12} md={6} lg={3} className="my-3">
                                    <Link to={`/animals/${animal.name}`} className="text-decoration-none">
                                        <div className="animal-card p-3 rounded-3 " style={{ backgroundColor: '#A6BB8D' }}>
                                        <img src={animal.image} alt={animal.name} className="img-fluid mb-3 rounded-top" style={{ height: '200px', objectFit: 'cover' }} />
                                        <h4 className="text-success">{animal.name}</h4>
                                        <p className="text-secondary">{description}</p>
                                        </div>
                                    </Link>
                                </Col>
                            );
                        }) : 
                        <p className="mt-4 text-white">Ops, binatang yang anda cari tidak ada di Zoonami :(</p>
                    }
                </Row>
            </Container>
            <Footer />
        </div>
    );
}

export default AnimalsPage;

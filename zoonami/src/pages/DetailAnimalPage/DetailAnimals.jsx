import { useEffect, useState } from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import Footer from '../../components/Footer/Footer'
import Navigation from '../../components/Navbar/Navbar'
import { GET_ANIMALS } from '../../config/apollo/query-mutation'
import { useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom'
import { FaPaw } from 'react-icons/fa'

const DetailAnimals = () => {
    const { id } = useParams()
    const { data, loading, error } = useQuery(GET_ANIMALS, {
        variables: { id: { _eq: id } },
    })
    const [animal, setAnimal] = useState([])

    useEffect(() => {
        if (!loading && error === undefined) {
            setAnimal(data.animals[0])
        }
    }, [data, loading, error])

    return (
        <>
            <div
                className='bg-gradient'
                style={{ backgroundColor: '#61876E' }}
            >
                <Navigation />
                <div className='mb-5'>.</div>
                <Container
                    className='my-5 p-3 rounded-5 shadow'
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
                >
                    <h2 className='text-success'>
                        <FaPaw className='me-2' />
                        {animal?.name}
                    </h2>
                    {loading && (
                        <div className='text-center my-5'>
                            <div className='spinner-border' role='status'>
                                <span className='visually-hidden'>
                                    Loading...
                                </span>
                            </div>
                        </div>
                    )}
                    {!loading && error !== undefined && (
                        <div className='alert alert-danger' role='alert'>
                            Error loading data. Please try again later.
                        </div>
                    )}
                    {!loading && error === undefined && animal && (
                        <Row className='mt-3 d-flex align-items-center'>
                            <Col md={4}>
                                <Image
                                    src={animal.image}
                                    alt={animal.name}
                                    fluid
                                    className='rounded-5'
                                    style={{ height: '300px', objectFit: 'cover' }}
                                />
                            </Col>
                            <Col md={8}>
                                <ul className='list-group list-group-flush rounded-5'>
                                    <li className='list-group-item'>
                                        <strong>Makanan:</strong>{' '}
                                        {animal.makanan}
                                    </li>
                                    <li className='list-group-item'>
                                        <strong>Lokasi Kandang:</strong>{' '}
                                        {animal.lokasi_kandang}
                                    </li>
                                    <li className='list-group-item'>
                                        <strong>Jumlah:</strong>{' '}
                                        {animal.jumlah}
                                    </li>
                                    <li className='list-group-item'>
                                        <strong>Habitat:</strong>{' '}
                                        {animal.habitat}
                                    </li>
                                    <li className='list-group-item'>
                                        <strong>Deskripsi:</strong>{' '}
                                        {animal.deskripsi}
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    )}
                    {
                        !animal && (
                            <p className="text-succes mt-3">Parameter ID tidak valid</p>
                        )
                    }
                </Container>
                <Footer />
            </div>
        </>
    )
}

export default DetailAnimals

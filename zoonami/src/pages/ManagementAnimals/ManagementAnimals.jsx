import { useEffect, useState } from 'react';
import { Table, Button, Form, FormControl } from 'react-bootstrap';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { DELETE_ANIMALS, GET_ALL_ANIMALS } from '../../config/apollo/query-mutation';
import { useMutation, useQuery } from '@apollo/client';

const ManagementAnimals = () => {
    
    const {data, loading, error} = useQuery(GET_ALL_ANIMALS)
    const [animalsList, setAnimalsList] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [deleteAnimals, {data: dataDelete}] = useMutation(DELETE_ANIMALS, {
        refetchQueries: [
            {
                query: GET_ALL_ANIMALS
            }
        ]
    })

    useEffect(() => {
        if(!loading && error === undefined){
            setAnimalsList(data.animals)
        }
    },[data, loading, error, dataDelete])

    const filteredAnimalsList = animalsList.filter(animal => {
        return animal.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleDeleteAnimal = (id) => {
        if(window.confirm('Are you sure you want to delete?')){
            deleteAnimals({variables: {id: id}})
        }
    };

    return (
        <>
            <h3 className='my-3'>Daftar Binatang di Zoonami</h3>
            <Form className="d-flex my-3">
                <FormControl
                    type="search"
                    placeholder="Cari binatang..."
                    className="me-2"
                    aria-label="Search"
                    value={searchTerm}
                    onChange={handleInputChange}
                />
            </Form>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nama</th>
                        <th>Makanan</th>
                        <th>Lokasi Kandang</th>
                        <th>Jumlah</th>
                        <th>Habitat</th>
                        <th>Deskripsi</th>
                        <th>Gambar</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                    filteredAnimalsList.length > 0?
                    filteredAnimalsList.map((animal) => (
                        <tr key={animal.id}>
                            <td>{animal.id}</td>
                            <td>{animal.name}</td>
                            <td>{animal.makanan}</td>
                            <td>{animal.lokasi_kandang}</td>
                            <td>{animal.jumlah}</td>
                            <td>{animal.habitat}</td>
                            <td>{`${animal.deskripsi.split(' ').slice(0,5).join('.')}...`}</td>
                            <td>
                                <img src={animal.image} alt={animal.name} width="50" height="50" />
                            </td>
                            <td>
                                <Button variant="success" className="me-2">
                                    <FaEdit />
                                </Button>
                                <Button variant="danger" onClick={() => handleDeleteAnimal(animal.id)}>
                                    <FaTrashAlt />
                                </Button>
                            </td>
                        </tr>
                    )): 
                    <tr>
                        <td colSpan="9">
                            <p className="mt-4 text-success text-center">Oops, binatang yang Anda cari tidak ada di Zoonami :(</p>
                        </td>
                    </tr>
                    }   
                </tbody>
            </Table>
        </>
    );
};

export default ManagementAnimals;

import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { ADD_ANIMALS, GET_ALL_ANIMALS } from '../../config/apollo/query-mutation';
import { useMutation } from '@apollo/client';
import { storage } from '../../config/firebase/firebaseConfig'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid'

const FormAnimals = () => {
    const [animalData, setAnimalData] = useState({
        id: uuidv4(),
        name: '',
        makanan: '',
        lokasi_kandang: '',
        jumlah: 0,
        habitat: '',
        deskripsi: '',
        image: ''
    });
    const navigate = useNavigate()
    const [addAnimal, { loading, error }] = useMutation(ADD_ANIMALS, {
        refetchQueries: [
            {
                query: GET_ALL_ANIMALS
            }
        ]
    });
    const [uploadingImg, setUploadingImg] = useState(0)

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setAnimalData({ ...animalData, [name]: value });
    };

    const handleLokasiKandangChange = (event) => {
        const { value } = event.target;
        setAnimalData({ ...animalData, lokasi_kandang: value });
    }

    const handleImageChange = (event) => {
        let value = event.target.files[0]
            if(value && value.type.match('image.*')){
                const storageRef = ref(storage, `/files/${value.name}`)
                const uploadImg = uploadBytesResumable(storageRef, value)
                uploadImg.on(
                    'state_changed',
                    (snapshot) => {
                        const percent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
                        setUploadingImg(percent);
                    },
                    (err) => {
                        console.log(err.message);
                    },
                    () => {
                        getDownloadURL(uploadImg.snapshot.ref)
                        .then(url => {
                            setAnimalData({...animalData, image: url});
                            setUploadingImg(0);
                        })
                        .catch(err => {
                            console.log(err.message);
                        })
                    }
                )
            }else{
                alert('Please select an image file (jpg, png, gif).')
                event.target.value = null
                value = event.target.value
            }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { id, name, makanan, lokasi_kandang, jumlah, habitat, deskripsi, image } = animalData;
        
        try {
            await addAnimal({
                variables: {
                    object: {
                        id,
                        name,
                        makanan,
                        lokasi_kandang,
                        jumlah: jumlah.toString(),
                        habitat,
                        deskripsi,
                        image: image
                    }
                }
            });
            setAnimalData({
                id: '',
                name: '',
                makanan: '',
                lokasi_kandang: '',
                jumlah: 0,
                habitat: '',
                deskripsi: '',
                image: ''
            });

            alert('Binatang berhasil ditambahkan!');
            navigate('/dashboard/animals')
        } catch (error) {
            console.log(error);
            alert('Terjadi kesalahan, binatang gagal ditambahkan!');
        }
    };

    return (
        <div className='my-3'>
            <h3 className="mb-3 text-success">Tambah Binatang</h3>
            <Form onSubmit={handleSubmit} className="d-flex flex-column ms-lg-3 p-lg-5">
                <Form.Group className="mb-3" controlId="id">
                    <Form.Label className="d-flex text-success">ID</Form.Label>
                    <Form.Control type="text" name="id" value={animalData.id} onChange={handleInputChange} disabled required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="name">
                    <Form.Label className="d-flex text-success">Nama Binatang</Form.Label>
                    <Form.Control type="text" name="name" value={animalData.name} onChange={handleInputChange} required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="makanan">
                    <Form.Label className="d-flex text-success">Makanan</Form.Label>
                    <Form.Control type="text" name="makanan" value={animalData.makanan} onChange={handleInputChange} required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="lokasi_kandang">
                    <Form.Label className="d-flex text-success">Lokasi Kandang</Form.Label>
                    <Form.Control as="select" name="lokasi_kandang" value={animalData.lokasi_kandang} onChange={handleLokasiKandangChange} required>
                        <option value="" disabled>Pilih Lokasi Kandang</option>
                        <option value="Zona Predator">Zona Predator</option>
                        <option value="Zona Mamalia">Zona Mamalia</option>
                        <option value="Zona Petting">Zona Petting</option>
                        <option value="Zona Primata">Zona Primata</option>
                        <option value="Zona Reptil">Zona Reptil</option>
                        <option value="Zona Burung">Zona Burung</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" controlId="jumlah">
                    <Form.Label className="d-flex text-success">Jumlah</Form.Label>
                    <Form.Control type="number" name="jumlah" value={animalData.jumlah} onChange={handleInputChange} required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="habitat">
                    <Form.Label className="d-flex text-success">Habitat</Form.Label>
                    <Form.Control type="text" name="habitat" value={animalData.habitat} onChange={handleInputChange} required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="deskripsi">
                    <Form.Label className="d-flex text-success">Deskripsi</Form.Label>
                    <Form.Control as="textarea" rows={3} name="deskripsi" value={animalData.deskripsi} onChange={handleInputChange} required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="image">
                    <Form.Label className="d-flex text-success">Gambar</Form.Label>
                    <Form.Control type="file" accept="image/*" name="image" onChange={handleImageChange} required />
                </Form.Group>
                {
                    uploadingImg > 0 &&
                        <p>Uploading image : {uploadingImg}%</p>
                }

                <Button variant="success" type="submit" disabled={loading || uploadingImg != 0}>
                    {loading ? 'Menambahkan...' : 'Tambah'}
                </Button>
            </Form>

            {error && <p className="text-danger mt-3">{error.message}</p>}
        </div>
    );
}

export default FormAnimals
import { Container, Row, Col } from 'react-bootstrap';

function Facilities() {
    const facilitiesList = [
        {
            name: 'Ramah Terhadap Penyandang Disabilitas',
            description: 'Zoonami menyediakan fasilitas khusus untuk penyandang disabilitas seperti Rute yang ramah penyandang disabilitas, Alat bantu mobilitas, Fasilitas khusus di kandang hewan, dan Toilet dan fasilitas akses'
        },
        {
            name: 'Tempat Ibadah',
            description: 'Zoonami menyediakan tempat ibadah berupa masjid yang nyaman dan bersih'
        },
        {
            name: 'Toko Suvernir',
            description: 'Bagi Anda yang ingin membawa kenang-kenangan dari Kebun Binatang Zoonami bisa langsung menuju ke pojok suvenir. Di sini tersedia banyak suvenir mulai dari kaus, boneka, topi dan masih banyak lagi lainnya.'
        },
        {
            name: 'Permainan Edukasi dan Rekreasi',
            description: 'Tersedia banyak sekali permainan seru di Kebun Binatang Zoonami, mulai dari ATV, perahu kayuh, bumper boat, dan masih banyak lagi lainnya. Kemudian ada pula area sebagai sarana edukasi seperti bird ave, kolam tangkap, dan area untuk memberi makan hewan ternak.'
        },
        {
            name: 'Kantin dan Food Court',
            description: 'Di dalam Kebun Binatang Gembira Loka juga tersedia kantin dan food court yang menjual makanan serta minuman. Jadi Anda tak perlu takut kelaparan saat menyambangi Kebun Binatang Gembira Loka ini.'
        },
        {
            name: 'Taring (Kereta Keliling)',
            description: 'Untuk yang lelah berjalan kaki, bisa menggunakan fasilitas Taring atau kereta keliling di Kebun Binatang Zoonami. Jika Anda hendak naik taring secara tidak terbatas di seluruh halte, akan dikenai biaya Rp 25 ribu per orang.'
        },
        {
            name: 'Toilet',
            description: 'Toilet juga banyak tersedia di setiap sudut Kebun Binatang Zoonami. Sebagian besar toilet yang disediakan juga ramah untuk pengguna kursi roda.'
        },
        {
            name: 'Tempat Parkir yang Luas',
            description: 'Tak perlu khawatir jika Anda membawa kendaraan pribadi, karena tempat parkir di Kebun Binatang Zoonami ini terbilang sangat luas dan nyaman.'
        }
    ];

    return (
        <Container className="facilities my-4 rounded-5 p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
            <h2 className="text-success">Fasilitas Kebun Binatang Zoonami</h2>
            <Row>
                {facilitiesList.map((facility, index) => (
                    <Col key={index} xs={12} md={6} lg={4} className="my-3">
                        <div className="facility-card p-3 rounded-5" style={{ backgroundColor: '#A6BB8D', height:260 }}>
                            <h4 className="text-success">{facility.name}</h4>
                            <p className="text-secondary-emphasis">{facility.description}</p>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Facilities;

// import React from 'react';

import { Link } from "react-router-dom";

export default function HeroImage() {
    return (
        <header style={{ paddingLeft: 0 }}>
        <div
            className='text-center bg-image'
            style={{ backgroundImage: "url('https://source.unsplash.com/random/?zoo')", height: 400 }}
        >
            <div className='mask h-100' style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
            <div className='d-flex justify-content-center align-items-center h-100'>
                <div className='text-white'>
                <h1 className='mb-3 text-success'>Zoonami</h1>
                <h5 className='mb-3'>Kebun binatang masa kini</h5>
                <Link className='btn btn-outline-success btn-lg' to='/animals' role='button'>
                    Lihat binatang
                </Link>
                </div>
            </div>
            </div>
        </div>
        </header>
    );
}
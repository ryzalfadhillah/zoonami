// import React from 'react'
import './LandingPage.css'
import About from "../../components/AboutUs/aboutUs"
import HeroImage from "../../components/HeroSection/Hero"
import Navigation from "../../components/Navbar/Navbar"
import Footer from '../../components/Footer/Footer'
import Facilities from '../../components/Fasilitas/Fasilitas'

const LandingPage = () => {
    return (
        <div style={{ backgroundColor: '#61876E' }}>
            <Navigation />
            <HeroImage />
                <About />
            <Facilities />
            <Footer />
        </div>
    )
}

export default LandingPage
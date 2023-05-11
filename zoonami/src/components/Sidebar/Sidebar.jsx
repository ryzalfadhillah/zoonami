import { useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { FaTachometerAlt, FaList, FaPlusSquare, FaSignOutAlt, FaHome } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

import logo from '../../assets/images/logo.png';

const Sidebar = () => {
    const [show, setShow] = useState(false);
    const navigate = useNavigate()

    const handleLogout = () => {
        if(window.confirm('Are you sure you want to logout?')){
            sessionStorage.removeItem('accessToken');
            sessionStorage.removeItem('email')
            navigate('/')
        }
    }

    return (
        <Navbar style={{ backgroundColor: '#3C6255' }} variant='dark' expand='lg' className='flex-lg-column text-white'>
            <Navbar.Brand className='my-lg-5'>
                <img src={logo} alt='Logo' width='30' height='30'/>
                <span style={{ display: 'inline-block' }}>Zoonami</span>
            </Navbar.Brand>
            <Navbar.Toggle onClick={() => setShow(!show)} aria-controls='sidebar-nav' />
            <Navbar.Collapse id='sidebar-nav' className={`${show ? 'show' : ''}`}>
                <Nav className='flex-lg-column'>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <Link to='/' className='nav-link'>
                            <FaHome /> <span style={{ display: 'inline-block' }}>Home</span>
                        </Link>
                        <Link to='/dashboard' className='nav-link'>
                            <FaTachometerAlt /> <span style={{ display: 'inline-block' }}>Dashboard</span>
                        </Link>
                        <Link to='/dashboard/animals' className='nav-link'>
                            <FaList /> <span style={{ display: 'inline-block' }}>Daftar Binatang</span>
                        </Link>
                        <Link to='/dashboard/animals-form' className='nav-link'>
                            <FaPlusSquare /> <span style={{ display: 'inline-block' }}>Form Binatang</span>
                        </Link>
                        <button onClick={handleLogout} className='m-4 px-3 nav-link btn btn-danger rounded-5'>
                            <FaSignOutAlt /> <span style={{ display: 'inline-block' }}>Logout</span>
                        </button>
                    </div>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Sidebar;

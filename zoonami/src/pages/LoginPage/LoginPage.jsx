import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import logo from '../../assets/images/logo.png';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div className="container-fluid vh-100 d-flex justify-content-center align-items-center">
        <div className="card w-100" style={{ maxWidth: '500px',}}>
            <div className="card-body">
                <img src={logo} alt="Logo" width="100" height="100" />
                <h1 className='mb-3 text-success'>Zoonami</h1>
                <h4 className="mb-3 fw-normal">Please sign in</h4>

                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                    />
                    </Form.Group>

                    <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        required
                    />
                    </Form.Group>

                    <Button variant="success" type="submit" className="w-100">
                        Sign in
                    </Button>
                </Form>

                <div className="mt-3">
                    <Link to="/forgot-password" className='text-success'>Forgot password?</Link>
                </div>
            </div>
        </div>
        </div>
    );
};

export default LoginPage;

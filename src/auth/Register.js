import React, { useState, useContext } from 'react'
import { AuthContext } from '../context/authContext'
import { Form, Button } from "react-bootstrap";


const RegisterContent = () => {
    const [state, setState] = useState({ email: "", password: "", name: "" })
    const { register } = useContext(AuthContext)

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    };

    const handleOnSubmit = (event) => {
        event.preventDefault();
        register(state)
    }

    return (
        <div onSubmit={handleOnSubmit}>
            <h1>Register</h1>
            <Form>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Name</Form.Label>
                    <Form.Control placeholder="Name" />
                    {/* onChange={handleChange} value={state.name} */}
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    {/* onChange={handleChange} value={state.email} */}
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                    {/* onChange={handleChange} value={state.password} */}
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
        
    )
}

export default RegisterContent
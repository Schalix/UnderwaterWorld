import React, {useState, useContext } from 'react'
import { Form, Button } from "react-bootstrap";
import { AuthContext } from "../context/authContext";


const LogInContent = () => {

    const [state, setState] = useState({ email: "", password: ""})
    const { login } = useContext(AuthContext)

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    };

    const handleOnSubmit = (event) => {
        event.preventDefault();
        login(state)
    }

    return (
        <div>
            <h1>LOG IN</h1>
            <Form onSubmit={handleOnSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={handleChange} value={state.email} />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={handleChange} value={state.password} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Log In
                </Button>
            </Form>
        </div>
        
    )
}

export default LogInContent
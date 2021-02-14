import React, { useState, useContext } from 'react'
import { Form, Button } from "react-bootstrap";
import { AuthContext } from '../context/authContext'



const RegisterContent = () => {
    const [state, setState] = useState({ email: "", password: "", name: "" })
    const { register } = useContext(AuthContext)

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    };

    const handleOnSubmit = (event) => {
        event.preventDefault();
        console.log('AuthState:', state)
        register(state)
    }

    return (
        <div>
            <h1>Register</h1>
            <Form>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control placeholder="Name" controlId="formBasicPassword" onChange={handleChange} value={state.name} name="name"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" controlId="formBasicEmail" onChange={handleChange} value={state.email} name="email"/>
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" controlId="formBasicPassword" onChange={handleChange} value={state.password} name="password" />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleOnSubmit}>
                    Submit
                </Button>
            </Form>
        </div>
        
    )
}

export default RegisterContent
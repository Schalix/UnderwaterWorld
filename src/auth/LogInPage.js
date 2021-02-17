import React, {useState, useContext } from 'react'
import { Form, Button } from "react-bootstrap";
import { AuthContext } from "../context/authContext";
import { Redirect } from "react-router-dom";


const LogInContent = () => {

    const [state, setState] = useState({ email: "", password: ""})
    const { login ,isAuthenticated} = useContext(AuthContext)

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    };

    const handleOnSubmit = (event) => {
        event.preventDefault();
        console.log('Login Authstate: ', state)
        login(state)
    }
    if(isAuthenticated) return(<Redirect to="/" />)

    return (
        <div>
            <h1>log-in</h1>
            <Form onSubmit={handleOnSubmit}>
                <Form.Group controlid="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={handleChange} value={state.email} name="email"/>
                </Form.Group>
                <Form.Group controlid="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={handleChange} value={state.password} name="password"/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Log-in 
                </Button>
            </Form>
        </div>
        
    )
}

export default LogInContent
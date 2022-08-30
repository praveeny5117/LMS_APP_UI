import * as React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import bgImg from "../assets/login_bgimage.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import {useNavigate} from 'react-router-dom'
import {useState} from 'react'
import TextField from '@mui/material/TextField';
import Grid from "@material-ui/core/Grid";


function Login() {
    let navigate = useNavigate()
    const [userName, setName] = useState('')
    const [userPassword, setPassword] = useState('')

   function userLogin(){
let obj = {
    username:userName,
    password:userPassword
}

    navigate('/dashboard')
   }

    return (
        <div style={{ backgroundImage: `url(${bgImg})`, height: '715px' }}>
            <div className="d-flex align-items-center justify-content-center shadow rounded" style={{ padding: '125px' }}>
                <div className="d-flex align-items-center" style={{ height: "500px" }}>
                    <Card style={{ width: '26rem', height: '33rem' }}>
                        <Card.Body>
                            <Card.Title style={{ paddingTop: '1rem' }} className="d-flex align-items-center justify-content-center">Log In
                            </Card.Title>
                            <Card.Text>
                                <Form style={{ padding: '21px' }}>
                                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                        <Form.Label column>
                                            User Name*
                                        </Form.Label>
                                        <Col sm="10" >
                                            <Form.Control style={{ width: '20rem', height: '3rem' }} type="text" 
                                            placeholder="User Name" onChange={(e)=>setName(e.target.value)} value={userName} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                        <Form.Label column>
                                            Password*
                                        </Form.Label>
                                        <Col sm="10">
                                            <Form.Control style={{ width: '20rem', height: '3rem' }} type="password"
                                             placeholder="Password" onChange={(e)=>setPassword(e.target.value)} value={userPassword} />
                                        </Col>
                                    </Form.Group>
                                </Form>
                            </Card.Text>
                            <Button style={{ width: '8rem', height: '3rem', marginLeft: '3rem' }} class="btn btn-danger rounded-pill" >Cancel</Button>
                            <Button style={{ width: '8rem', height: '3rem', marginLeft: '1rem' }} onClick={userLogin}
                                class="btn btn-primary rounded-pill" >Login</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Login;

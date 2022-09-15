import * as React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import bgImg from "../assets/login_bgimage.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { signin } from '../service/onBoardService';
import { useAlert } from 'react-alert'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

function Login() {
    const alert = useAlert()
    let navigate = useNavigate()
    const [email, setName] = useState('')
    const [userPassword, setPassword] = useState('')

    async function userLogin() {
        let obj = {
            email: email,
            password: userPassword
        }
        let loggedIn = await signin(obj)
        if (loggedIn?.status === 200) {
            navigate('/dashboard')
        } else if (loggedIn?.response?.status === 400) {
            alert.show(loggedIn.response.data.message, {
                timeout: 4000,
                type: 'error',
            })
        } else {
            alert.show("Server Down Please try after some time", {
                timeout: 4000,
                type: 'error'
            })
        }
    }

    return (
        <div style={{ backgroundImage: `url(${bgImg})`, height: '715px' }}>
            <div className="d-flex align-items-center justify-content-center shadow rounded" style={{ padding: '125px' }}>
                <div className="d-flex align-items-center" style={{ height: "500px" }}>
                    <Card style={{ width: '26rem', height: '33rem' }}>
                        <Card.Body>
                            <Card.Title style={{ paddingTop: '1rem' }} className="d-flex align-items-center justify-content-center">SignIn
                            </Card.Title>
                            <Card.Text>
                                <Form style={{ padding: '21px' }}>
                                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                        <Form.Label column>
                                            User Name*
                                        </Form.Label>
                                        <Col sm="10" >
                                            <Form.Control style={{ width: '20rem', height: '3rem' }} type="text"
                                                placeholder="User Name" onChange={(e) => setName(e.target.value)} value={email} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                        <p>
                                        <Form.Label column>
                                            Password*
                                        </Form.Label>
                                        <Col sm="10">
                                            <Form.Control style={{ width: '20rem', height: '3rem'}} type="password"
                                                placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={userPassword} />
                                        <i class="far fa-eye" id="togglePassword"></i>
                                        <i class="far fa-eye-slash" id="togglePassword"></i>
                                        <VisibilityIcon />
                                        <VisibilityOffIcon />
                                        </Col>
                                        </p>
                                    </Form.Group>
                                    <span style={{ float: 'right' }}><a href='/forgetpassword'>Forgot Password?</a></span>
                                </Form>
                            </Card.Text>
                            <Button style={{ width: '8rem', height: '3rem', marginLeft: '3rem' }} class="btn btn-danger rounded-pill" >Cancel</Button>
                            <Button style={{ width: '8rem', height: '3rem', marginLeft: '1rem' }} onClick={userLogin}
                                class="btn btn-primary rounded-pill" >SignIn</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Login;

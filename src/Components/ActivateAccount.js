import * as React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import bgImg from "../assets/login_bgimage.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
// import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
// import { useAlert } from 'react-alert'

function ActivateAccount() {
    // const alert = useAlert()
    // let navigate = useNavigate()
    const [passcode, setpasscode] = useState('')
    const [newPassword, setPassword] = useState('')
    const [rePassword, setrePassword] = useState('')
    const [showPassFields, setPassFields] = useState(false)


    return (
        <div style={{ backgroundImage: `url(${bgImg})`, height: '715px' }}>
            <div className="d-flex align-items-center justify-content-center shadow rounded" style={{ padding: '125px' }}>
                <div className="d-flex align-items-center" style={{ height: "500px" }}>
                    <Card style={{ width: '26rem', height: '33rem' }}>
                        {!showPassFields && <Card.Body>
                            <Card.Title style={{ paddingTop: '1rem' }} className="d-flex align-items-center justify-content-center">Verify Account
                            </Card.Title>
                            <span className="d-flex align-items-center justify-content-center"><a href='/'>SignIn?</a></span>
                            <Card.Text>
                                <Form style={{ padding: '21px' }}>
                                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                        <Form.Label column>
                                            Code
                                        </Form.Label>
                                        <Col sm="10" >
                                            <Form.Control style={{ width: '20rem', height: '3rem' }} type="text"
                                                placeholder="Enter Code" onChange={(e) => setpasscode(e.target.value)} value={passcode} />
                                        </Col>
                                    </Form.Group>
                                    
                                </Form>
                            </Card.Text>
                            <Button style={{ width: '8rem', height: '3rem', marginLeft: '3rem' }} class="btn btn-secondary rounded-pill" >Cancel</Button>
                            <Button style={{ width: '8rem', height: '3rem', marginLeft: '1rem' }} onClick={(e) => { setPassFields(true) }}
                                class="btn btn-primary rounded-pill" >Verify Code</Button>

                        </Card.Body>
                        }
                        {showPassFields && <Card.Body>
                            <Card.Title style={{ paddingTop: '1rem' }} className="d-flex align-items-center justify-content-center">Activate Account
                            </Card.Title>
                            <span className="d-flex align-items-center justify-content-center"><a href='/'>SignIn?</a></span>

                            <Card.Text>
                                <Form style={{ padding: '21px' }}>
                                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                        <Form.Label column>
                                            Set Password*
                                        </Form.Label>
                                        <Col sm="10" >
                                            <Form.Control style={{ width: '20rem', height: '3rem' }} type="text"
                                                placeholder="User Name" onChange={(e) => setPassword(e.target.value)} value={newPassword} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                        <Form.Label column>
                                            Retype Password*
                                        </Form.Label>
                                        <Col sm="10">
                                            <Form.Control style={{ width: '20rem', height: '3rem' }} type="password"
                                                placeholder="Password" onChange={(e) => setrePassword(e.target.value)} value={rePassword} />
                                        </Col>
                                    </Form.Group>
                                </Form>
                            </Card.Text>
                            <Button style={{ width: '8rem', height: '3rem', marginLeft: '3rem' }} class="btn btn-secondary rounded-pill" >Cancel</Button>
                            <Button style={{ width: '8rem', height: '3rem', marginLeft: '1rem' }} onClick={(e) => { setPassFields(false) }}
                                class="btn btn-primary rounded-pill" >Activate</Button>

                        </Card.Body>
                        }
                            <span className="d-flex align-items-center justify-content-center">Didn't receive the code / Code expired?</span>
                            <span className="d-flex align-items-center justify-content-center" style={{paddingBottom:'7rem'}}><a href='#'>Resend Code</a></span>


      
                    </Card>
                    
                </div>
                
            </div>
        </div>
    )
}

export default ActivateAccount;

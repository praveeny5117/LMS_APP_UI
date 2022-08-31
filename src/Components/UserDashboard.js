import * as React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom'
import img from '../assets/img.jpg'


function UserDashboard() {
let navigate = useNavigate()
    return (
        <div style={{ backgroundColor: '#EFEEEE', width: '100%;', height: '650px' }}>
            <div className="d-flex align-items-center justify-content-center shadow rounded">
                <div className="d-flex align-items-center" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>

                    <Card style={{ height: '550px', width: '80rem' }}>
                        <Card.Body>
                            <Card.Title style={{ paddingTop: '1rem' }} className="d-flex align-items-center justify-content-center">User Profile
                            </Card.Title>
                            <Card.Text>
                                <Form style={{ padding: '21px' }}>
                                    <div class='col-12'>
                                        <div class='row'>
                                            <div class='col-4'>
                                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                                    <Form.Label column>
                                                        Emp ID
                                                    </Form.Label>
                                                    <Col>
                                                        <Form.Control style={{ width: '17rem', height: '3rem' }} type="text"
                                                            placeholder="Employee ID" />
                                                    </Col>
                                                </Form.Group>
                                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                                    <Form.Label column>
                                                        Email ID
                                                    </Form.Label>
                                                    <Col>
                                                        <Form.Control style={{ width: '17rem', height: '3rem' }} type="text"
                                                            placeholder="Email" />
                                                    </Col>
                                                </Form.Group>
                                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                                    <Form.Label column>
                                                        Gender
                                                    </Form.Label>
                                                    <Col>
                                                        <Form.Control style={{ width: '17rem', height: '3rem' }} type="text"
                                                            placeholder="Gender" />
                                                    </Col>
                                                </Form.Group>
                                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                                    <Form.Label column>
                                                        Date of Birth
                                                    </Form.Label>
                                                    <Col >
                                                        <Form.Control style={{ width: '17rem', height: '3rem' }} type="text"
                                                            placeholder="DOB" />
                                                    </Col>
                                                </Form.Group>


                                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                                    <Form.Label column>
                                                        City
                                                    </Form.Label>
                                                    <Col >
                                                        <Form.Control style={{ width: '17rem', height: '3rem' }} type="text"
                                                            placeholder="City" />
                                                    </Col>
                                                </Form.Group>
                                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                                    <Form.Label column>
                                                        Country
                                                    </Form.Label>
                                                    <Col >
                                                        <Form.Control style={{ width: '17rem', height: '3rem' }} type="text"
                                                            placeholder="Country" />
                                                    </Col>
                                                </Form.Group>
                                            </div>
                                            <div class='col-4'>  
                                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                                <Form.Label column>
                                                    Emp Name
                                                </Form.Label>
                                                <Col >
                                                    <Form.Control style={{ width: '17rem', height: '3rem' }} type="text"
                                                        placeholder="Emp Name" />
                                                </Col>
                                            </Form.Group>
                                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                                    <Form.Label column>
                                                        Phone
                                                    </Form.Label>
                                                    <Col >
                                                        <Form.Control style={{ width: '17rem', height: '3rem' }} type="text"
                                                            placeholder="Phone" />
                                                    </Col>
                                                </Form.Group>

                                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                                    <Form.Label column>
                                                        Blood Group
                                                    </Form.Label>
                                                    <Col >
                                                        <Form.Control style={{ width: '17rem', height: '3rem' }} type="text"
                                                            placeholder="B+" />
                                                    </Col>
                                                </Form.Group>

                                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                                    <Form.Label column>
                                                        Date of Join
                                                    </Form.Label>
                                                    <Col >
                                                        <Form.Control style={{ width: '17rem', height: '3rem' }} type="text"
                                                            placeholder="DOJ" />
                                                    </Col>
                                                </Form.Group>
                                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                                    <Form.Label column>
                                                        State
                                                    </Form.Label>
                                                    <Col >
                                                        <Form.Control style={{ width: '17rem', height: '3rem' }} type="text"
                                                            placeholder="State" />
                                                    </Col>
                                                </Form.Group>
                                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                                    <Form.Label column>
                                                        Pin
                                                    </Form.Label>
                                                    <Col >
                                                        <Form.Control style={{ width: '17rem', height: '3rem' }} type="text"
                                                            placeholder="Pin" />
                                                    </Col>
                                                </Form.Group>
                                            </div>
                                            <div class='col-4'>
                                                <Button class="btn btn-primary" style={{ float: 'right' }} >Edit</Button>

                                                <div style={{ paddingLeft: '50px' }}>
                                                    <img style={{
                                                        margin: '0px 0 10 02px',
                                                        background: 'black',
                                                        borderRadius: '50px',
                                                        borderTopLeftRadius: '150px',
                                                        borderTopRightRadius: '150px',
                                                        borderBottomLeftRadius: '150px',
                                                        borderBottomRightRadius: '150px',
                                                        width: '280px',
                                                        height: '380px'
                                                    }} src={img}></img>

                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <Button class="btn btn-primary" style={{ width: '10rem', marginLeft: '7rem' }}
                                    onClick={()=>{navigate('/leavehistory')}} >Apply Leave</Button>
                                    <Button cxlass="btn btn-primary" style={{ width: '10rem', marginLeft: '3rem' }}
                                     onClick={()=>{navigate('/permissionhistory')}}>Apply Permission</Button>
                                    <Button class="btn btn-primary" style={{ width: '10rem', marginLeft: '3rem' }}
                                    onClick={()=>{navigate('/wfhhistory')}}>Apply WFH</Button>
                                </Form>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
}
export default UserDashboard;
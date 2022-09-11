import * as React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom'
import img from '../assets/img.jpg'
import { Modal } from 'react-bootstrap'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from 'react'
import { getSingleEmployeeList } from '../service/onBoardService'


function UserDashboard() {
    let navigate = useNavigate()
    const [isOption, setOption] = useState(false)
    const [empID, setEmpID] = useState(null);
    const [empName, setEmpName] = useState('');
    const [empEmail, setEmpEmail] = useState('');
    const [empPhone, setEmpPhone] = useState('');
    const [empGender, setEmpGender] = useState('');
    const [empBlood, setEmpBlood] = useState('');
    const [empDesignation, setEmpDesignation] = useState('');
    const [empDOB, setEmpDOB] = useState('');
    const [empDOJ, setEmpDOJ] = useState('');
    const [empCity, setEmpCity] = useState('');
    const [empState, setEmpState] = useState('');
    const [empCountry, setEmpCountry] = useState('');



    useEffect(() => {
        async function getEmployee() {
            const data = await getSingleEmployeeList({ email: 'admin@admin.com' });
            if (data.status === 200) {
                setEmpEmail(data.data.empEmail)
                setEmpName(data.data.empName)
                setEmpID(data.data.empID)
                setEmpBlood(data.data.empBlood)
                setEmpCity(data.data.empCity);
                setEmpCountry(data.data.empCountry);
                setEmpDOB(data.data.empDOB)
                setEmpDOJ(data.data.empDOJ)
                setEmpDesignation(data.data.empDesignation)
                setEmpGender(data.data.empGender)
                setEmpPhone(data.data.empPhone)
                setEmpState(data.data.empState)
            }
        }
        getEmployee();
    }, [])

    return (
        <div style={{ backgroundColor: '#EFEEEE', width: '100%;', height: '650px' }}>
            <div className="d-flex align-items-center justify-content-center shadow rounded">
                <div className="d-flex align-items-center" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>

                    <Card style={{ height: '550px', width: '80rem' }}>
                        <Card.Body>
                            <Card.Title style={{ paddingTop: '1rem' }} className="d-flex align-items-center justify-content-center">Profile
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
                                                            placeholder="Employee ID" readOnly={true} value={empID} />
                                                    </Col>
                                                </Form.Group>
                                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                                    <Form.Label column>
                                                        Email ID
                                                    </Form.Label>
                                                    <Col>
                                                        <Form.Control style={{ width: '17rem', height: '3rem' }} type="text"
                                                            placeholder="Email" value={empEmail} />
                                                    </Col>
                                                </Form.Group>
                                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                                    <Form.Label column>
                                                        Gender
                                                    </Form.Label>
                                                    <Col>
                                                        <Form.Control style={{ width: '17rem', height: '3rem' }} type="text"
                                                            placeholder="Gender" readOnly={true} value={empGender} />
                                                    </Col>
                                                </Form.Group>
                                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                                    <Form.Label column>
                                                        Date of Birth
                                                    </Form.Label>
                                                    <Col >
                                                        <Form.Control style={{ width: '17rem', height: '3rem' }} type="text"
                                                            placeholder="DOB" readOnly={true} value={empDOB}/>
                                                    </Col>
                                                </Form.Group>


                                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                                    <Form.Label column>
                                                        City
                                                    </Form.Label>
                                                    <Col >
                                                        <Form.Control style={{ width: '17rem', height: '3rem' }} type="text"
                                                            placeholder="City" readOnly={true} value={empCity} />
                                                    </Col>
                                                </Form.Group>
                                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                                    <Form.Label column>
                                                        State
                                                    </Form.Label>
                                                    <Col >
                                                        <Form.Control style={{ width: '17rem', height: '3rem' }} type="text"
                                                            placeholder="State" readOnly={true} value={empState}/>
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
                                                            placeholder="Emp Name" readOnly={true} value={empName} />
                                                    </Col>
                                                </Form.Group>
                                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                                    <Form.Label column>
                                                        Phone
                                                    </Form.Label>
                                                    <Col >
                                                        <Form.Control style={{ width: '17rem', height: '3rem' }} type="text"
                                                            placeholder="Phone" readOnly={true} value={empPhone}/>
                                                    </Col>
                                                </Form.Group>
                                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                                    <Form.Label column>
                                                        Designation
                                                    </Form.Label>
                                                    <Col >
                                                        <Form.Control style={{ width: '17rem', height: '3rem' }} type="text"
                                                            placeholder="Designation" readOnly={true} value={empDesignation}/>
                                                    </Col>
                                                </Form.Group>
                                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                                    <Form.Label column>
                                                        Blood Group
                                                    </Form.Label>
                                                    <Col >
                                                        <Form.Control style={{ width: '17rem', height: '3rem' }} type="text"
                                                            placeholder="B+" readOnly={true} value={empBlood} />
                                                    </Col>
                                                </Form.Group>

                                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                                    <Form.Label column>
                                                        Date of Join
                                                    </Form.Label>
                                                    <Col >
                                                        <Form.Control style={{ width: '17rem', height: '3rem' }} type="text"
                                                            placeholder="DOJ" readOnly={true} value={empDOJ}/>
                                                    </Col>
                                                </Form.Group>
                                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                                    <Form.Label column>
                                                        Country
                                                    </Form.Label>
                                                    <Col >
                                                        <Form.Control style={{ width: '17rem', height: '3rem' }} type="text"
                                                            placeholder="Country" readOnly={true} value={empCountry} />
                                                    </Col>
                                                </Form.Group>
                                            </div>
                                            <div class='col-4'>
                                                <Button class="btn btn-primary" style={{ float: 'right' }} onClick={() => setOption(true)}>Edit</Button>

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
                                        onClick={() => { navigate('/leavehistory') }} >Apply Leave</Button>
                                    <Button cxlass="btn btn-primary" style={{ width: '10rem', marginLeft: '3rem' }}
                                        onClick={() => { navigate('/permissionhistory') }}>Apply Permission</Button>
                                    <Button class="btn btn-primary" style={{ width: '10rem', marginLeft: '3rem' }}
                                        onClick={() => { navigate('/wfhhistory') }}>Apply WFH</Button>
                                </Form>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <div>
                <Modal show={isOption}  >
                    <Modal.Header closeButton onClick={() => setOption(false)}>
                        <Modal.Title>Edit Employee</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form style={{ padding: '21px' }}>
                            <div class='col-12'>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column>
                                        Emp ID
                                    </Form.Label>
                                    <Col>
                                        <Form.Control style={{ width: '17rem', height: '3rem' }} type="text"
                                            placeholder="Employee ID" value={empID} />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column>
                                        Emp Name
                                    </Form.Label>
                                    <Col >
                                        <Form.Control style={{ width: '17rem', height: '3rem' }} type="text"
                                            placeholder="Emp Name" value={empName} />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column>
                                        Email ID
                                    </Form.Label>
                                    <Col>
                                        <Form.Control style={{ width: '17rem', height: '3rem' }} type="text"
                                            placeholder="Email" value={empEmail} />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column>
                                        Phone
                                    </Form.Label>
                                    <Col >
                                        <Form.Control style={{ width: '17rem', height: '3rem' }} type="text"
                                            placeholder="Phone" value={empPhone} />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column>
                                        Designation
                                    </Form.Label>
                                    <Col >
                                        <Form.Control style={{ width: '17rem', height: '3rem' }} type="text"
                                            placeholder="Designation" value={empDesignation} />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column>
                                        Blood Group
                                    </Form.Label>
                                    <Col >
                                        <Form.Control style={{ width: '17rem', height: '3rem' }} type="text"
                                            placeholder="B+" value={empBlood} />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column>
                                        Gender
                                    </Form.Label>
                                    <Col>
                                        <Form.Control style={{ width: '17rem', height: '3rem' }} type="text"
                                            placeholder="Gender" value={empGender} />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column>
                                        Date of Birth
                                    </Form.Label>
                                    <Col >
                                        <Form.Control style={{ width: '17rem', height: '3rem' }} type="text"
                                            placeholder="DOB" value={empDOB}/>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column>
                                        Date of Join
                                    </Form.Label>
                                    <Col >
                                        <Form.Control style={{ width: '17rem', height: '3rem' }} type="text"
                                            placeholder="DOJ" value={empDOJ} />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column>
                                        City
                                    </Form.Label>
                                    <Col >
                                        <Form.Control style={{ width: '17rem', height: '3rem' }} type="text"
                                            placeholder="City" value={empCity}/>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column>
                                        State
                                    </Form.Label>
                                    <Col >
                                        <Form.Control style={{ width: '17rem', height: '3rem' }} type="text"
                                            placeholder="State" value={empState}/>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column>
                                        Country
                                    </Form.Label>
                                    <Col >
                                        <Form.Control style={{ width: '17rem', height: '3rem' }} type="text"
                                            placeholder="Country" value={empCountry}/>
                                    </Col>
                                </Form.Group>
                            </div>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button type='button' class="btn btn-secondary btn-sm" onClick={() => setOption(false)} >Close</Button>
                        <Button class="btn btn-primary btn-sm">Update</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
}
export default UserDashboard;
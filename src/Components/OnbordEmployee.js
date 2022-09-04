import * as React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom'
import img from '../assets/img.jpg'
import TextField from '@mui/material/TextField';
import Grid from "@material-ui/core/Grid";
import { Modal } from 'react-bootstrap'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import { onboard } from '../service/onBoardService';
import { useAlert } from 'react-alert'


function OnBoardEmployee() {
    let navigate = useNavigate()
  const alert = useAlert()

    const [empID, setEmpID] = useState('');
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

    async function save(){
        let obj ={
            empID:empID,
            empName:empName,
            empEmail:empEmail,
            empPhone:empPhone,
            empGender:empGender,
            empBlood:empBlood,
            empDesignation:empDesignation,
            empDOB:empDOB,
            empDOJ:empDOJ,
            empCity:empCity,
            empState:empState,
            empCountry:empCountry
        }
        console.log(obj)
        const data = await onboard(obj);
        if(data.status === 200){
            alert.show('Employee Onboareded Successfully', {
                timeout: 2000, 
                type: 'success',
                onClose: () => {
                    navigate("/employeelist");
                } 
              })
        }
        if(data.response.status === 500){
            alert("error")
        }

    }

    return (
        <div style={{ backgroundColor: '#EFEEEE', width: '100%;', height: '650px' }}>
            <div className="d-flex align-items-center justify-content-center shadow rounded">
                <div className="d-flex align-items-center" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
                    <Card style={{ height: '550px', width: '70rem' }}>
                        <Card.Body>
                            <Card.Title style={{ paddingTop: '1rem' }} className="d-flex align-items-center justify-content-center">On Board Employee
                            </Card.Title>
                            <Card.Text>
                                <Form style={{ padding: '21px' }}>
                                    <div class='col-12'>
                                        <div class='row'>
                                            <div class='col-1'></div>
                                            <div class='col-5'>
                                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                                    <Form.Label column>
                                                        Emp ID
                                                    </Form.Label>
                                                    <Col>
                                                        <Form.Control style={{ width: '17rem', height: '3rem' }} type="text"
                                                            placeholder="Employee ID" value={empID} onChange={(e)=>setEmpID(e.target.value)} />
                                                    </Col>
                                                </Form.Group>
                                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                                    <Form.Label column>
                                                        Email ID
                                                    </Form.Label>
                                                    <Col>
                                                        <Form.Control style={{ width: '17rem', height: '3rem' }} type="text"
                                                            placeholder="Email" value={empEmail} onChange={(e)=>setEmpEmail(e.target.value)} />
                                                    </Col>
                                                </Form.Group>
                                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                                    <Form.Label column>
                                                        Gender
                                                    </Form.Label>
                                                    <Col>
                                                        <Form.Control style={{ width: '17rem', height: '3rem' }} type="text"
                                                            placeholder="Gender" value={empGender} onChange={(e)=>setEmpGender(e.target.value)}/>
                                                    </Col>
                                                </Form.Group>
                                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                                    <Form.Label column>
                                                        Date of Birth
                                                    </Form.Label>
                                                    <Col >
                                                        <Form.Control style={{ width: '17rem', height: '3rem' }} type="text"
                                                            placeholder="DOB" value={empDOB} onChange={(e)=>setEmpDOB(e.target.value)}/>
                                                    </Col>
                                                </Form.Group>
                                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                                    <Form.Label column>
                                                        City
                                                    </Form.Label>
                                                    <Col >
                                                        <Form.Control style={{ width: '17rem', height: '3rem' }} type="text"
                                                            placeholder="City" value={empCity} onChange={(e)=>setEmpCity(e.target.value)}/>
                                                    </Col>
                                                </Form.Group>
                                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                                    <Form.Label column>
                                                        State
                                                    </Form.Label>
                                                    <Col >
                                                        <Form.Control style={{ width: '17rem', height: '3rem' }} type="text"
                                                            placeholder="State" value={empState} onChange={(e)=>setEmpState(e.target.value)} />
                                                    </Col>
                                                </Form.Group>
                                                <Button class="btn btn-secondary" style={{ width: '10rem', float: 'right' }}
                                                >Cancel</Button>
                                            </div>
                                            <div class='col-5'>
                                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                                    <Form.Label column>
                                                        Emp Name
                                                    </Form.Label>
                                                    <Col >
                                                        <Form.Control style={{ width: '17rem', height: '3rem' }} type="text"
                                                            placeholder="Emp Name" value={empName} onChange={(e)=>setEmpName(e.target.value)} />
                                                    </Col>
                                                </Form.Group>
                                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                                    <Form.Label column>
                                                        Phone
                                                    </Form.Label>
                                                    <Col >
                                                        <Form.Control style={{ width: '17rem', height: '3rem' }} type="text"
                                                            placeholder="Phone" value={empPhone} onChange={(e)=>setEmpPhone(e.target.value)}/>
                                                    </Col>
                                                </Form.Group>
                                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                                    <Form.Label column>
                                                        Designation
                                                    </Form.Label>
                                                    <Col >
                                                        <Form.Control style={{ width: '17rem', height: '3rem' }} type="text"
                                                            placeholder="Designation" value={empDesignation} onChange={(e)=>setEmpDesignation(e.target.value)}/>
                                                    </Col>
                                                </Form.Group>
                                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                                    <Form.Label column>
                                                        Blood Group
                                                    </Form.Label>
                                                    <Col >
                                                        <Form.Control style={{ width: '17rem', height: '3rem' }} type="text"
                                                            placeholder="B+" value={empBlood} onChange={(e)=>setEmpBlood(e.target.value)}/>
                                                    </Col>
                                                </Form.Group>

                                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                                    <Form.Label column>
                                                        Date of Join
                                                    </Form.Label>
                                                    <Col >
                                                        <Form.Control style={{ width: '17rem', height: '3rem' }} type="text"
                                                            placeholder="DOJ" value={empDOJ} onChange={(e)=>setEmpDOJ(e.target.value)} />
                                                    </Col>
                                                </Form.Group>
                                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                                    <Form.Label column>
                                                        Country
                                                    </Form.Label>
                                                    <Col >
                                                        <Form.Control style={{ width: '17rem', height: '3rem' }} type="text"
                                                            placeholder="Country" value={empCountry} onChange={(e)=>setEmpCountry(e.target.value)}/>
                                                    </Col>
                                                </Form.Group>
                                                <Button class="btn btn-primary" style={{ width: '10rem', }}
                                                onClick={save} >Save</Button>
                                            </div>
                                        </div>
                                    </div>
                                </Form>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
}
export default OnBoardEmployee;
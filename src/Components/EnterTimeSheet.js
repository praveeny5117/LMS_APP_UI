import * as React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";



function EnterTimeSheet() {
    let navigate = useNavigate()
    const [noOfRows, setNoOfRows] = useState(1);
    const [porjectList, setProjectList] = useState(1);
    const [taskList, setTaskList] = useState(1);
    const [taskTypetList, setTaskTypetList] = useState(1);
    const [status, setStatus] = useState(1);
    const [selectedDate, setDate] = useState(new Date())

    useEffect(() => {
    }, [])

    const onChangeProject = (event) => {
        setProjectList(event.target.value);
    };

    const onChangeTask = (event) => {
        setTaskList(event.target.value);
    };

    const onChangeTaskType = (event) => {
        setTaskTypetList(event.target.value);
    };

    const onChangeStatus = (event) => {
        setStatus(event.target.value);
    };

    const onChangeDate = (event) => {
        setDate(event)
    }
 
    return (
        <div style={{ backgroundColor: '#EFEEEE', width: '100%;' }}>
            <div className="d-flex align-items-center justify-content-center rounded">
                <div className="d-flex align-items-center" style={{ paddingTop: '3rem', paddingBottom: '2rem' }}>
                    <Card style={{ height: '250px', width: '80rem' }}>
                        <Card.Body>
                            <Card.Title style={{ paddingTop: '1rem' }} className="d-flex align-items-center justify-content-center">Enter TimeSheet
                            </Card.Title>
                            <Card.Text>
                                <Form style={{ padding: '21px' }}>
                                    <div class='col-12'>
                                        <div style={{ paddingTop: '1rem' }} className="d-flex align-items-center justify-content-center">

                                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                                <Form.Label column>
                                                    Select Date
                                                </Form.Label>
                                                <Col>
                                                    <DatePicker
                                                        selected={selectedDate}
                                                        onChange={onChangeDate}
                                                        maxDate={selectedDate}
                                                        customInput={
                                                            <Form.Control style={{ width: '17rem', height: '3rem' }} type="text"
                                                        placeholder="Select Date" />
                                                          }
                                                    />
                                                </Col>
                                            </Form.Group>

                                        </div>
                                        <div style={{ paddingTop: '1rem' }} className="d-flex align-items-center justify-content-center">
                                            <Button class="btn btn-primary" style={{ width: '8rem' }}>Next</Button>

                                        </div>

                                    </div>
                                </Form>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                </div>

            </div>
            <div className="d-flex align-items-center justify-content-center rounded">
                <div className="d-flex align-items-center" style={{ paddingBottom: '10.5rem' }}>
                    <div class="table-responsive" style={{ backgroundColor: 'white', width: '80rem' }}>
                        <table class="table table-hover" style={{ width: '100%', height: '100%', padding: '5% 20% 34% 20%' }}>
                            <thead style={{ padding: '1rem 1rem 1rem 1rem' }}>
                                <tr>
                                    <th style={{ padding: '1rem 1rem 1rem 1rem' }} scope="col">S.No</th>
                                    <th style={{ padding: '1rem 1rem 1rem 1rem' }} scope="col">Project</th>
                                    <th style={{ padding: '1rem 1rem 1rem 1rem' }} scope="col">Task</th>
                                    <th style={{ padding: '1rem 1rem 1rem 1rem' }} scope="col">Task Type</th>
                                    <th style={{ padding: '1rem 1rem 1rem 1rem' }} scope="col">Task Description</th>
                                    <th style={{ padding: '1rem 1rem 1rem 1rem' }} scope="col">Status</th>
                                    <th style={{ padding: '1rem 1rem 1rem 1rem' }} scope="col">Hours</th>
                                    <th style={{ padding: '1rem 1rem 1rem 1rem' }} scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[...Array(noOfRows)].map((elementInArray, index) => {

                                    return (
                                        <tr>
                                            <th scope="row">{index + 1}</th>
                                            <td>
                                                <FormControl fullWidth>
                                                    <InputLabel id="demo-simple-select-label">Project</InputLabel>
                                                    <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        value={porjectList}
                                                        label="Project"
                                                        onChange={onChangeProject}
                                                    >
                                                        <MenuItem value={1}>LMS</MenuItem>
                                                        <MenuItem value={2}>Valurite</MenuItem>
                                                        <MenuItem value={3}>BNS</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </td>
                                            <td>
                                                <FormControl fullWidth>
                                                    <InputLabel id="demo-simple-select-label">Task</InputLabel>
                                                    <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        value={taskList}
                                                        label="Task"
                                                        onChange={onChangeTask}
                                                    >
                                                        <MenuItem value={1}>Frontend </MenuItem>
                                                        <MenuItem value={2}>Backend</MenuItem>
                                                        <MenuItem value={3}>Deployment</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </td>
                                            <td>
                                                <FormControl fullWidth>
                                                    <InputLabel id="demo-simple-select-label">Task Type</InputLabel>
                                                    <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        value={taskTypetList}
                                                        label="Task Type"
                                                        onChange={onChangeTaskType}
                                                    >
                                                        <MenuItem value={1}>Development</MenuItem>
                                                        <MenuItem value={2}>Bug Fix</MenuItem>
                                                        <MenuItem value={3}>Testing</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </td>
                                            <td>
                                                <TextareaAutosize
                                                    aria-label="minimum height"
                                                    minRows={2}
                                                    placeholder="Minimum 3 rows"
                                                    style={{ width: 200 }}
                                                />
                                            </td>
                                            <td>  <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-label">Status</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={status}
                                                    label="Status"
                                                    onChange={onChangeStatus}
                                                >
                                                    <MenuItem value={1}>Completed</MenuItem>
                                                    <MenuItem value={2}>In Progress</MenuItem>
                                                    <MenuItem value={3}>Yet to Statr</MenuItem>
                                                </Select>
                                            </FormControl></td>
                                            <td>
                                                <TextField
                                                    style={{ width: "100%" }} id="name" label="Form Date" variant="outlined" />
                                            </td>
                                            <td>{noOfRows !== 1 &&
                                                <button type="button" class="btn btn-danger" onClick={() => setNoOfRows(noOfRows - 1)}>Delete</button>
                                            } </td>
                                        </tr>

                                    );

                                })}


                            </tbody>
                        </table>
                        <div className='col-12' style={{ padding: '1rem 1rem 1rem 1rem' }} >
                            <div class="row">
                                <div class='col-4'></div>
                                <div class='col-4'>
                                    <button class="btn btn-primary" style={{ width: '6rem', float: 'right' }} onClick={() => setNoOfRows(noOfRows + 1)}>Add</button>

                                </div>
                                <div class='col-4'>
                                    <button style={{ width: '6rem' }} class="btn btn-primary">Save</button>

                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </div>

    )
}

export default EnterTimeSheet;
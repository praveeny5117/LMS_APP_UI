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
import Grid from "@material-ui/core/Grid";
import img from '../assets/img.jpg'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


function ViewTimeSheet() {
    let navigate = useNavigate()
    const [filterVal, setFilterVal] = useState("bydate")
    const [timeSheetHistory, setTimeSheetHistory] = useState([])

    useEffect(() => {
        //page load  
        let timesheetData =  [{date:'22/04/2022',project:'Lms',description:'lms get functionality',estimateddate:'22/3/2022',completedon:'23/3/2022',status:'completed', hours:5},
        {date:'22/04/2022',project:'Lms',description:'lms get functionality',estimateddate:'22/3/2022',completedon:'23/3/2022',status:'completed', hours:5},
        {date:'22/04/2022',project:'Lms',description:'lms get functionality',estimateddate:'22/3/2022',completedon:'23/3/2022',status:'completed', hours:5},
        {date:'22/04/2022',project:'Lms',description:'lms get functionality',estimateddate:'22/3/2022',completedon:'23/3/2022',status:'completed', hours:5},
        {date:'22/04/2022',project:'Lms',description:'lms get functionality',estimateddate:'22/3/2022',completedon:'23/3/2022',status:'completed', hours:5},]    
   
        const data = timesheetData.map(
            (ele, index) => {
                return (
                    <tr>
                        <td>{index+1}</td>
                        <td>{ele.date}</td>
                        <td>{ele.project}</td>
                        <td>{ele.description}</td>
                        <td>{ele.estimateddate}</td>
                        <td>{ele.completedon}</td>
                        <td>{ele.status}</td>
                        <td>{ele.hours}</td>
                        
                    </tr>
                )
            }
        )
        setTimeSheetHistory(data);
   
    }, [])
    function onFilterChange(event) {
        setFilterVal(event.target.value)
        console.log(filterVal)
    }

    return (
        <div style={{ backgroundColor: '#EFEEEE', width: '100%;' }}>
            <div className="d-flex align-items-center justify-content-center rounded">
                <div className="d-flex align-items-center" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
                    <Card style={{ height: '325px', width: '80rem' }}>
                        <Card.Body>
                            <Card.Title style={{ paddingTop: '1rem' }} className="d-flex align-items-center justify-content-center">View TimeSheet
                            </Card.Title>
                            <Card.Text>
                                <Form style={{ padding: '21px' }}>
                                    <div class='col-12'>
                                        <div className="d-flex align-items-center justify-content-center" > <FormControl >
                                            <FormLabel id="demo-row-radio-buttons-group-label">Filter By</FormLabel>
                                            <RadioGroup row defaultValue="bydate"
                                                aria-labelledby="demo-row-radio-buttons-group-label"
                                                name="row-radio-buttons-group">
                                                <FormControlLabel value="bydate" control={<Radio />} onChange={onFilterChange} label="Date" />
                                                <FormControlLabel value="bymonth" control={<Radio />} onChange={onFilterChange} label="Month" />
                                                <FormControlLabel value="byrange" control={<Radio />} onChange={onFilterChange} label="Range"
                                                />
                                            </RadioGroup>
                                        </FormControl>
                                        </div>
                                        <div style={{ paddingTop: '2rem' }} className="d-flex align-items-center justify-content-center">
                                            {filterVal === 'bydate' &&
                                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                                    <Form.Label column>
                                                        Select Date
                                                    </Form.Label>
                                                    <Col>
                                                        <Form.Control style={{ width: '17rem', height: '3rem' }} type="text"
                                                            placeholder="Select Date" />
                                                    </Col>
                                                </Form.Group>
                                            }
                                            {filterVal === 'bymonth' &&
                                                <div class="col-12">
                                                    <div className='row'>
                                                        <div className='col-2'></div>
                                                        <div className='col-5' style={{ marginLeft: '-110px' }}>
                                                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                                                <Form.Label column style={{ marginLeft: '110px' }}>
                                                                    Select Year
                                                                </Form.Label>
                                                                <Col>
                                                                    <Form.Control style={{ width: '17rem', height: '3rem' }} type="text"
                                                                        placeholder="Select Year" />
                                                                </Col>
                                                            </Form.Group></div>
                                                        <div className='col-5' style={{ marginLeft: '-2px' }}> <Form.Group as={Row} controlId="formPlaintextPassword">
                                                            <Form.Label column style={{ marginleft: '50px' }}>
                                                                Select Month
                                                            </Form.Label>
                                                            <Col>
                                                                <Form.Control style={{ width: '17rem', height: '3rem', marginLeft: '-133px' }} type="text"
                                                                    placeholder="Select Month" />
                                                            </Col>
                                                        </Form.Group></div>
                                                    </div>
                                                </div>
                                            }
                                            {filterVal === 'byrange' &&
                                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                                    <Form.Label column>
                                                        Select Date Range
                                                    </Form.Label>
                                                    <Col>
                                                        <Form.Control style={{ width: '17rem', height: '3rem' }} type="text"
                                                            placeholder="Select Date Range" />
                                                    </Col>
                                                </Form.Group>
                                            }
                                        </div>
                                        <div style={{ paddingTop: '1rem' }} className="d-flex align-items-center justify-content-center">
                                            <Button class="btn btn-primary" style={{ width: '8rem' }}>View</Button>
                                        </div>

                                        <div class='row'>

                                        </div>
                                    </div>

                                    {/* <Button class="btn btn-primary" style={{ width: '10rem', marginLeft: '7rem' }}
                                onClick={()=>{navigate('/leavehistory')}} >Apply Leave</Button>
                                <Button cxlass="btn btn-primary" style={{ width: '10rem', marginLeft: '3rem' }}
                                 onClick={()=>{navigate('/permissionhistory')}}>Apply Permission</Button>
                                <Button class="btn btn-primary" style={{ width: '10rem', marginLeft: '3rem' }}
                                onClick={()=>{navigate('/wfhhistory')}}>Apply WFH</Button> */}
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
                            <thead style={{padding:'1rem 1rem 1rem 1rem'}}>
                                <tr>
                                    <th style={{padding:'1rem 1rem 1rem 1rem'}} scope="col">S.No</th>
                                    <th style={{padding:'1rem 1rem 1rem 1rem'}} scope="col">Date</th>
                                    <th style={{padding:'1rem 1rem 1rem 1rem'}} scope="col">Project</th>
                                    <th style={{padding:'1rem 1rem 1rem 1rem'}} scope="col">Description</th>
                                    <th style={{padding:'1rem 1rem 1rem 1rem'}} scope="col">Estimated Date</th>
                                    <th style={{padding:'1rem 1rem 1rem 1rem'}} scope="col">Completed On</th>
                                    <th style={{padding:'1rem 1rem 1rem 1rem'}} scope="col">Status</th>
                                    <th style={{padding:'1rem 1rem 1rem 1rem'}} scope="col">Hours</th>
                                </tr>
                            </thead>
                            <tbody>
                                {timeSheetHistory}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default ViewTimeSheet;
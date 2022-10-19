import * as React from 'react'
import { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField';
import Grid from "@material-ui/core/Grid";
// import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import 'reactjs-popup/dist/index.css';
import { Modal } from 'react-bootstrap'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useAlert } from 'react-alert'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import DatePicker from 'react-date-picker';
import { getManagers } from '../service/onBoardService'



function WFHhistory() {
    const [reporingManager, setreportingManager] = useState(0);
    const [reportingManagerList, setReportingManagerList] = useState([])
    const [leaveDuration, setLeaveDuration] = useState(1);

    const leaveDurationChange = (event) => {
        setLeaveDuration(event.target.value);
    };

    const handleChange1 = (event) => {
        setreportingManager(event.target.value);
    };


    // let navigate = useNavigate();
    const alert = useAlert()
    const [isOption, setOption] = useState(false)
    const [alertDialog, setOpen] = useState(false);
    const [leaveHistory, setleaveHistory] = useState([])
    useEffect(() => {
        async function getManagerData() {
            const data = await getManagers();
            if (data.status === 200) {
                const record = data.data.map(
                    (ele, index) => {
                        return (<MenuItem value={ele.empID}>{ele.empName} </MenuItem>)
                    }
                )
                setReportingManagerList(record)
            }
            else if (data.response.status === 500) {
                alert.show('Internal Server Issue', {
                    timeout: 2000,
                    type: 'error',
                    onClose: () => {
                        // window.location.reload(false)
                    }
                })
            }
        }
        getManagerData()

        let lhData = [{ appliedon: '29/09/2022', sData: '22/09/2022', eDate: '22/09/2022', noOfdays: 2, reasoforWFH: 'sick', status: 'pending' },
        { appliedon: '29/09/2022', sData: '22/09/2022', eDate: '22/09/2022', noOfdays: 2, reasoforWFH: 'sick', status: 'Rejected' },
        { appliedon: '29/09/2022', sData: '22/09/2022', eDate: '22/09/2022', noOfdays: 2, reasoforWFH: 'sick', status: 'pending' },
        { appliedon: '29/09/2022', sData: '22/09/2022', eDate: '22/09/2022', noOfdays: 2, reasoforWFH: 'sick', status: 'Approved' },]
        const data1 = lhData.map(
            (ele, index) => {
                return (
                    <tr>
                        <td>{index + 1}</td>
                        <td>{ele.appliedon}</td>
                        <td>{ele.sData}</td>
                        <td>{ele.eDate}</td>
                        <td>{ele.noOfdays}</td>
                        <td>{ele.reasoforWFH}</td>
                        <td>{ele.status}</td>
                        <td>
                            <Button onClick={() => setOpen(true)} class='btn btn-secondary'>Cancel</Button>
                        </td>
                    </tr>
                )
            }
        )
        setleaveHistory(data1);
    }, [])

    return (
        <div className='container' style={{ paddingTop: '50px' }}>
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value='1'>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList aria-label="lab API tabs example">
                            <Tab label="Work From Home History" value="1" />
                        </TabList>
                    </Box>
                    <TabPanel value="1">
                        <div className='row'>
                            <div><Button onClick={() => setOption(true)} style={{ marginBottom: '10px', float: 'right' }}
                                variant="contained" size="medium" > Apply</Button></div>
                        </div>
                        <div class="table-responsive">
                            <table class="table table-hover" style={{ width: '100%', height: '100%', padding: '5% 20% 34% 20%' }}>
                                <thead>
                                    <tr>
                                        <th scope="col">S.No</th>
                                        <th scope="col">Applied On</th>
                                        <th scope="col">Start Date</th>
                                        <th scope="col">End Date</th>
                                        <th scope="col">No of Days</th>
                                        <th scope="col">Reason for WFH</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {leaveHistory}
                                </tbody>
                            </table>
                        </div>
                    </TabPanel>
                </TabContext>
            </Box>
            <Modal show={isOption} >
                <Modal.Header closeButton onClick={() => setOption(false)}>
                    <Modal.Title>Apply Work From Home</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form noValidate autoComplete="off">
                        <Grid className="text-center" container direction={"column"} spacing={2} >
                            <Grid item> <TextField
                                style={{ width: "100%" }} id="email" label="Start Date" variant="outlined" /></Grid>
                            <Grid item> <TextField
                                style={{ width: "100%" }} id="email" label="End date" variant="outlined" /></Grid>
                            <Grid item>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Duration</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={leaveDuration}
                                        label="Duration"
                                        onChange={leaveDurationChange}
                                    >
                                        <MenuItem value={1}>Full Day </MenuItem>
                                        <MenuItem value={2}>First Half</MenuItem>
                                        <MenuItem value={3}>Second Half</MenuItem>
                                    </Select>
                                </FormControl></Grid>
                            <Grid item></Grid>
                            <Grid item> <TextField
                                style={{ width: "100%" }} id="phone" label="No of Days" variant="outlined" /></Grid>
                            <Grid item> <TextField
                                style={{ width: "100%" }} id="phone" label="Reason" variant="outlined" /></Grid>
                            <Grid item>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Reporting Manager</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={reporingManager}
                                        label="Reporting Manager"
                                        onChange={handleChange1}
                                    >
                                        <MenuItem disabled value={0}>--Select--</MenuItem>
                                        {reportingManagerList}
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button type='button' class="btn btn-secondary btn-sm" onClick={() => setOption(false)} >Close</Button>
                    <Button class="btn btn-primary btn-sm" onClick={() => setOption(false)}>Submit</Button>
                </Modal.Footer>
            </Modal>
            <Dialog
                open={alertDialog}
                onClose={() => setOpen(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Are you want to delete this user ?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Once Deleted you can't get back this data again...
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Cancel</Button>
                    <Button onClick={() => setOpen(false)}>OK</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default WFHhistory;
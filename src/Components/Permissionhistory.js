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
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { getManagers } from '../service/onBoardService'

// import DatePicker from 'react-date-picker';



function PermissionHistory() {
    const [reportingManagerList, setReportingManagerList] = useState([])
    const [reporingManager, setreportingManager] = useState(0);


    const handleChange1 = (event) => {
        setreportingManager(event.target.value);
    };
    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    // let navigate = useNavigate();
    const alert = useAlert()
    const [isOption, setOption] = useState(false)
    const [alertDialog, setOpen] = useState(false);
    const [leaveBalance, setleaveBalance] = useState([])
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

        let lbdata = [{
            name: 'Permission Count',avalperm:2,usedperm:1, balnceperm: 1
        }]
        const data = lbdata.map(
            (ele, index) => {
                return (
                    <tr>
                        <td>{ele.name}</td>
                        <td>{ele.avalperm}</td>
                        <td>{ele.usedperm}</td>
                        <td>{ele.balnceperm}</td>

                        <td>
                            <Button onClick={() => setOption(true)} class='btn btn-primary'>Apply</Button>
                        </td>
                    </tr>
                )
            }
        )
        setleaveBalance(data);

        let lhData = [{appliedon:'29/09/2022', sDataandTime: '22/09/2022',eDataandTime:'22/09/2022',hours: 2,  reasoforperm: 'sick',   status: 'pending' },
        {appliedon:'29/09/2022', sDataandTime: '22/09/2022',eDataandTime:'22/09/2022',hours: 2,  reasoforperm: 'sick',   status: 'Rejected' },
        {appliedon:'29/09/2022', sDataandTime: '22/09/2022',eDataandTime:'22/09/2022',hours: 2,  reasoforperm: 'sick',   status: 'pending' },
        {appliedon:'29/09/2022', sDataandTime: '22/09/2022',eDataandTime:'22/09/2022',hours: 2,  reasoforperm: 'sick',   status: 'Approved' },]
        const data1 = lhData.map(
            (ele, index) => {
                return (
                    <tr>
                        <td>{index + 1}</td>
                        <td>{ele.appliedon}</td>
                        <td>{ele.sDataandTime}</td>
                        <td>{ele.eDataandTime}</td>
                        <td>{ele.hours}</td>
                        <td>{ele.reasoforperm}</td>
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
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Permission Balance" value="1" />
                            <Tab label="Permission History" value="2" />
                        </TabList>
                    </Box>
                    <TabPanel value="1">

                        <div class="table-responsive">
                            <table class="table table-hover" style={{ width: '100%', height: '100%', padding: '5% 20% 34% 20%' }}>
                                <thead>
                                    <tr>
                                        <th scope="col">Current Month Permission</th>
                                        <th scope="col">Total Permission</th>
                                        <th scope="col">Used Permission</th>
                                        <th scope="col">Balance Permission</th>
                                        <th scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {leaveBalance}
                                </tbody>
                            </table>
                        </div>
                    </TabPanel>
                    <TabPanel value="2">
                        <div class="table-responsive">
                            <table class="table table-hover" style={{ width: '100%', height: '100%', padding: '5% 20% 34% 20%' }}>
                                <thead>
                                    <tr>
                                        <th scope="col">S.No</th>
                                        <th scope="col">Applied On</th>
                                        <th scope="col">Start Date & Time</th>
                                        <th scope="col">End Date & Time</th>
                                        <th scope="col">Hours</th>
                                        <th scope="col">Reason for Permission</th>
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
                    <Modal.Title>Apply Permission</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form noValidate autoComplete="off">
                        <Grid className="text-center" container direction={"column"} spacing={2} >
                            <Grid item>
                                  <TextField
                                style={{ width: "100%" }} id="name" label="Date" variant="outlined" />
                                 {/* <DatePicker onChange={onChange} value={date} /> */}
                                 </Grid> 
                            <Grid item> <TextField
                                style={{ width: "100%" }} id="email" label="Start Time" variant="outlined" /></Grid>
                            <Grid item> <TextField
                                style={{ width: "100%" }} id="email" label="End Time" variant="outlined" /></Grid>
                            <Grid item> <TextField
                                style={{ width: "100%" }} id="phone" label="No of Hours" variant="outlined" /></Grid>
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

export default PermissionHistory;
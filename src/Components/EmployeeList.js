import * as React from 'react'
import { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField';
import Grid from "@material-ui/core/Grid";
import Button from '@mui/material/Button';
import 'reactjs-popup/dist/index.css';
import { Modal } from 'react-bootstrap'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
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
import { getEmployeeList } from '../service/onBoardService';


import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

function EmployeeList() {
    // let navigate = useNavigate();
    // const alert = useAlert()
    const [value, setValue] = React.useState('1');
    const [alertDialog, setOpen] = useState(false);
    const [activeEmployee, setActiveEmployee] = useState([])
    const [inActiveEmployee, setInActiveEmployee] = useState([])
    // const [role, setRole] = useState()

    useEffect(() => {
        async function getEmployee(){
            const data = await getEmployeeList();
            if (data.status === 200) {
              console.log(data.data)
             let activeData = data.data.filter((element) => { return element.status == 'A' })
              let inActivedata = data.data.filter((element) => { return element.status == 'I' })
               activeData = activeData.map(
                (ele, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{ele.empID}</td>
                      <td>{ele.empName} / <span className='text-muted'>{ele.empDesignation}</span></td>
                      <td>{ele.empPhone}</td>
                      <td>{ele.empEmail}</td>
                      <td>{ele.empCity}</td>
                      <td>{ele.empDOB}</td>
                      <td>{ele.empDOJ}</td>
                      <td>{ele.empBlood}</td>
                      <td>{ele.role}</td>
                      {/* <td style={{minWidth:'10rem'}}>  <FormControl fullWidth>
                                                    <InputLabel id="demo-simple-select-label">Role</InputLabel>
                                                    <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        value={role}
                                                        label="Project"
                                                        onChange={onChangeRole}
                                                    >
                                                        <MenuItem value={'user'}>User</MenuItem>
                                                        <MenuItem value={'admin'}>Admin</MenuItem>
                                                    </Select>
                                                </FormControl></td> */}
                    </tr>
                  )
                }
              )
              setActiveEmployee(activeData)

              inActivedata = inActivedata.map(
                (ele, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{ele.empID}</td>
                      <td>{ele.empName} / <span className='text-muted'>{ele.empDesignation}</span></td>
                      <td>{ele.empPhone}</td>
                      <td>{ele.empEmail}</td>
                      <td>{ele.empCity}</td>
                      <td>{ele.empDOB}</td>
                      <td>{ele.empDOJ}</td>
                      <td>{ele.empBlood}</td>
                      <td>{ele.role}</td>
                     
                    </tr>
                  )
                }
              )
              setInActiveEmployee(inActivedata)
            }
        }
        getEmployee();
    }, [])


    const onChangeTab = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    // const onChangeRole = (event) => {
    //     setRole(event.target.value);
    // };



    return (
        <div className='container' style={{ paddingTop: '50px' }}>
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={onChangeTab} aria-label="lab API tabs example">
                            <Tab label="On Boareded Employees" value="1" />
                            <Tab label="InActive Employees" value="2" />
                        </TabList>
                    </Box>
                    <TabPanel value="1">

                        <div class="table-responsive">
                            <table class="table table-hover" style={{ width: '100%', height: '100%', padding: '5% 20% 34% 20%' }}>
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">ID</th>
                                        <th scope="col">Name/Designation</th>
                                        <th scope="col">Phone</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">City</th>
                                        <th scope="col">Date Of Birth</th>
                                        <th scope="col">Date Of Join</th>
                                        <th scope="col">Blood Group</th>
                                        <th scope="col">Role</th>
                                        {/* <th scope="col">Actions</th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    {activeEmployee}
                                </tbody>
                            </table>
                        </div>
                    </TabPanel>
                    <TabPanel value="2">
                        <div class="table-responsive">
                            <table class="table table-hover" style={{ width: '100%', height: '100%', padding: '5% 20% 34% 20%' }}>
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">ID</th>
                                        <th scope="col">Name/Designation</th>
                                        <th scope="col">Phone</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">City</th>
                                        <th scope="col">Date Of Birth</th>
                                        <th scope="col">Date Of Join</th>
                                        <th scope="col">Blood Group</th>
                                        <th scope="col">Role</th>
                                        {/* <th scope="col">Actions</th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    {inActiveEmployee}
                                </tbody>
                            </table>
                        </div>
                    </TabPanel>
                </TabContext>
            </Box>
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

export default EmployeeList;
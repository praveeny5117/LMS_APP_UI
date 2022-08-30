import * as React from 'react'
import { useState, useEffect } from 'react'
import { deleteUser, getUser, updateUser } from '../service/service';
import TextField from '@mui/material/TextField';
import Grid from "@material-ui/core/Grid";
import { useNavigate } from "react-router-dom";
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
import Icon from '@mui/material/Icon';
import { purple, red } from '@mui/material/colors';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';




function Listuser() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  let navigate = useNavigate();
  const alert = useAlert()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [description, setDescription] = useState('')
  const [_id, setId] = useState('')
  const [isOption, setOption] = useState(false)
  const [tableData, setData] = useState([])
  const [inactiveTableData, setInActiveData] = useState([])
  const [alertDialog, setOpen] = useState(false);
  const [deleteObj, setDeleteValue] = useState({})

  useEffect(() => {
    async function getData() {
      const data = await getUser();
      if (data.status === 200) {
        console.log(data.data)
        let Activedata = data.data.filter((element) => { return element.status == 'Active' })
        let InActivedata = data.data.filter((element) => { return element.status == 'InActive' })
        const UserData = Activedata.map(
          (ele, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{ele.name}</td>
                <td>{ele.email}</td>
                <td>{ele.phone}</td>
                <td>{ele.address}</td>
                <td>{ele.createdAt}</td>
                <td>{ele.updatedAt}</td>
                <td style={{color:'green'}}>{ele.status}</td>
                <td>
                  <Icon sx={{ color: purple[500] }} onClick={() => updateData(ele)}>edit</Icon>
                  <Icon sx={{ color: red[900] }} onClick={() => deleteData(ele)}>delete</Icon>
                </td>
              </tr>
            )
          }
        )
        const inActiveUserData = InActivedata.map(
          (ele, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{ele.name}</td>
                <td>{ele.email}</td>
                <td>{ele.phone}</td>
                <td>{ele.address}</td>
                <td>{ele.createdAt}</td>
                <td>{ele.updatedAt}</td>
                <td style={{color:'red'}}>{ele.status}</td>

                <td>
                  <Icon sx={{ color: purple[500] }} onClick={() => updateData(ele)}>edit</Icon>
                  <Icon sx={{ color: red[900] }} onClick={() => deleteData(ele)}>delete</Icon>
                </td>
              </tr>
            )
          }
        )
        setData(UserData);
        setInActiveData(inActiveUserData);
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
    getData()
  }, [])

  const deleteData = (val) => {
    setDeleteValue(val)
    setOpen(true)
  }

  async function deleteuserData() {
    const data = await deleteUser(deleteObj);
    setOpen(false)
    if (data.status === 200) {
      alert.show('Deleted Successfully', {
        timeout: 2000,
        type: 'success',
        onClose: () => {
          window.location.reload(false)
        }
      })
    }
  }

  const updateData = (val) => {
    console.log(val)
    setName(val.name);
    setEmail(val.email)
    setId(val._id)
    setPhone(val.phone)
    setAddress(val.description)
    setDescription(val.address)
    setOption(true)
  }

  async function updateUserData() {
    var obj = {
      _id: _id,
      name: name,
      email: email,
      phone: phone,
      address: address,
      description: description,
    }
    const data = await updateUser(obj);
    if (data.status === 200) {
      alert.show('Updated Successfully', {
        timeout: 2000,
        type: 'success',
        onClose: () => {
          window.location.reload(false)
        }
      })
      setOption(false)
    }
  }

  return (
    <div className='container' style={{ paddingTop: '50px' }}>

      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Active Users" value="1" />
              <Tab label="InActive Users" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <div className='row'>

              <div><Button onClick={() => navigate('/add')} style={{ marginBottom: '10px', float: 'right' }}
                variant="contained" size="medium" > <Icon>add</Icon>&nbsp; Add User</Button></div>
            </div>

            <div class="table-responsive">
              <table class="table table-hover" style={{ width: '100%', height: '100%', padding: '5% 20% 34% 20%' }}>
                <thead>
                  <tr>
                    <th scope="col">S.No</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Location</th>
                    <th scope="col">Created On</th>
                    <th scope="col">Updated On</th>
                    <th scope="col">Status</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData}
                </tbody>
              </table>
            </div>
          </TabPanel>
          <TabPanel value="2">
          <div className='row'>

<div><Button onClick={() => navigate('/add')} style={{ marginBottom: '10px', float: 'right' }}
  variant="contained" size="medium" > <Icon>add</Icon>&nbsp; Add User</Button></div>
            </div>

            <div class="table-responsive">
              <table class="table table-hover" style={{ width: '100%', height: '100%', padding: '5% 20% 34% 20%' }}>
                <thead>
                  <tr>
                    <th scope="col">S.No</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Location</th>
                    <th scope="col">Created On</th>
                    <th scope="col">Updated On</th>
                    <th scope="col">Status</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {inactiveTableData}
                </tbody>
              </table>
            </div>
          </TabPanel>
        </TabContext>
      </Box>
      <Modal show={isOption} >
        <Modal.Header closeButton onClick={() => setOption(false)}>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form noValidate autoComplete="off">
            <Grid className="text-center" container direction={"column"} spacing={2} >
              <Grid item> <TextField onChange={(e) => setName(e.target.value)} value={name}
                style={{ width: "100%" }} id="name" label="Name" variant="outlined" /></Grid>
              <Grid item> <TextField onChange={(e) => setEmail(e.target.value)} value={email}
                style={{ width: "100%" }} id="email" label="Email" variant="outlined" /></Grid>
              <Grid item> <TextField onChange={(e) => setPhone(e.target.value)} value={phone}
                style={{ width: "100%" }} id="phone" label="Phone" variant="outlined" /></Grid>
              <Grid item> <TextField onChange={(e) => setAddress(e.target.value)} value={address}
                style={{ width: "100%" }} id="address" label="Address" variant="outlined" /></Grid>
              <Grid item> <TextField onChange={(e) => setDescription(e.target.value)} value={description}
                style={{ width: "100%" }} id="description" label="Description" variant="outlined" /></Grid>
            </Grid>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button type='button' class="btn btn-secondary btn-sm" onClick={() => setOption(false)} >Close</Button>
          <Button class="btn btn-primary btn-sm" onClick={updateUserData}>Submit</Button>
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
          <Button onClick={deleteuserData}>OK</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default Listuser;
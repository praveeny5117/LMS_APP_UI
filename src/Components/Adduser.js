import * as React from 'react'
import TextField from '@mui/material/TextField';
import Grid from "@material-ui/core/Grid";
import Button from '@mui/material/Button';
import {useState} from 'react'
import {useNavigate} from "react-router-dom";
import { insertUser } from '../service/service';
import { useAlert } from 'react-alert'

export default function Adduser(){
  const alert = useAlert()
  let navigate = useNavigate();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [description, setDescription] = useState('')


    async function saveData() {
        let obj ={
            name:name,
            email:email,
            phone:phone,
            address:address,
            description:description
        }
        const data = await insertUser(obj);
        if(data.status === 200){
            alert.show('User Added Successfully', {
                timeout: 2000, 
                type: 'success',
                onClose: () => {
                    navigate("/list");
                } 
              })
        }
        if(data.response.status === 500){
            alert("error")
        }

    }

        return (
            
            <form noValidate autoComplete="off">

                <Button onClick={() => navigate('/list')} style={{marginBottom:'10px'}}
        variant="contained" size="medium">View User</Button>
                <h1>Add User</h1>
                <Grid container direction={"column"} spacing={2} >
                    <Grid item> <TextField onChange={(e) => setName(e.target.value)} value={name} 
                    sx={{width: { md: 300 }}} id="name" label="Name" variant="outlined" /></Grid>
                    <Grid item> <TextField onChange={(e) => setEmail(e.target.value)} value={email}
                     sx={{width: { md: 300 }}} id="email" label="Email" variant="outlined" /></Grid>
                    <Grid item> <TextField onChange={(e) => setPhone(e.target.value)} value={phone}
                     sx={{width: { md: 300 }}} id="phone" label="Phone" variant="outlined" /></Grid>
                    <Grid item> <TextField onChange={(e) => setAddress(e.target.value)} value={address}
                     sx={{width: { md: 300 }}} id="address" label="Address" variant="outlined" /></Grid>
                    <Grid item> <TextField onChange={(e) => setDescription(e.target.value)} value={description}
                     sx={{width: { md: 300 }}} id="description" label="Description" variant="outlined" /></Grid>
                    <Grid ietm> <Button onClick={saveData} sx={{width: { md: 300 }}} variant="contained" size="small">Save</Button></Grid>
                </Grid>
            </form>
        )
}
import * as axios from 'axios';

const url = 'http://localhost:8000';

export const onboard = async (data) => {
   return await axios.post(`${url}/onboard/addEmployee`,data).then(res=>{
    return res
    }).catch(error=>{
      return error
    });
};

export const getEmployeeList = async () => {
  return await axios.get(`${url}/onboard/employeeList`).then(res=>{
   return res
   }).catch(error=>{
     return error
   });
};

export const getSingleEmployeeList = async (data) => {
  return await axios.post(`${url}/onboard/getSingleEmployee`,data).then(res=>{
   return res
   }).catch(error=>{
     return error
   });
};

export const signin = async (data) => {
  return await axios.post(`${url}/onboard/login`,data).then(res=>{
   return res
   }).catch(error=>{
     return error
   });
};

export const getManagers = async () => {
  return await axios.get(`${url}/onboard/getmanagerlist`).then(res=>{
   return res
   }).catch(error=>{
     return error
   });
};

import * as axios from 'axios';

const url = 'http://localhost:8000/';

export const getUser = async () => {
  return await axios.get(`${url}get`).then(res=>{
    return res
    }).catch(error=>{
      return error
    });
};

export const insertUser = async (data) => {
   return await axios.post(`${url}add`,data).then(res=>{
    return res
    }).catch(error=>{
      return error
    });
};

export const deleteUser = async (data) => {
  return await axios.post(`${url}delete`,data).then(res=>{
   return res
   }).catch(error=>{
     return error
   });
};

export const updateUser = async (data) => {
  return await axios.post(`${url}update`,data).then(res=>{
   return res
   }).catch(error=>{
     return error
   });
};
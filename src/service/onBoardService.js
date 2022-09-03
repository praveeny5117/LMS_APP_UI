import * as axios from 'axios';

const url = 'http://localhost:8000';

export const onboard = async (data) => {
   return await axios.post(`${url}/onboard/addEmployee`,data).then(res=>{
    return res
    }).catch(error=>{
      return error
    });
};
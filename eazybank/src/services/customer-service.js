import {Constants} from '../constants/Constants'
import Axios from 'axios';

export const createCustomer=(customer)=> {
    const userAuth=localStorage.getItem('user');
    const user=JSON.parse(userAuth);
    const customerToSave={
      username: customer.name,
      pwd: customer.password,
      email: customer.email,
      role: customer.rol,
      mobileNumber:customer.mobileNumber,

    }
    return Axios.post(Constants.baseUrl+`/register`,customerToSave,{
        auth: {
            username: user.email,
            password: '12345'
          },
           headers: {
            "Content-type": "Application/json",
          },
    })
  }
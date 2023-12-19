import {Constants} from '../constants/Constants'
import Axios from 'axios';
import {setupAxiosInter} from './auth-service'

export const getAccountById=(accountId)=> {
    setupAxiosInter();    
    return Axios.get(Constants.baseUrl+`/myAccount?id=${accountId}`,{    
           headers: {
            "Content-type": "Application/json",
          },
    })
  }
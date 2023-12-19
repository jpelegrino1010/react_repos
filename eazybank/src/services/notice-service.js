import axios from "axios";
import {Constants} from '../constants/Constants'
import {setupAxiosInter} from './auth-service'

export const loadNotices=()=> {
    setupAxiosInter();
    return axios.get(Constants.baseUrl+"/notices",{
        headers:{
            "Content-type": "Application/json",
        }
    })
}
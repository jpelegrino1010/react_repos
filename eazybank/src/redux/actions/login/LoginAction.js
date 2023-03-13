import * as types from '../types';
import {getAuthentication} from '../../../services/auth-service'

const loginSuccess=(user)=> {
    return {
        type: types.types.LOGIN_SUCCESS,
        user        
    }
    
}

const loginError=()=> {
    return {
        type:types.types.LOGIN_FAIL    
    }
}

export const login=(user)=> {
    return async dispatch=> {
        const login= async ()=> {
            const response= await getAuthentication(user);

            return response.data;
        };

        try {
            const userData=await login();
            localStorage.setItem('user',JSON.stringify(userData));
            dispatch(loginSuccess(userData));
        } catch (err) {
           dispatch(loginError());
            
        }
    }
}
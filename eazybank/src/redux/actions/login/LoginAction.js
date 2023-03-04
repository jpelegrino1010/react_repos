import * as types from '../types';

const loginSuccess=()=> {
    return {
        type: types.types.LOGIN_SUCCESS        
    }
    
}

const loginError=()=> {
    return {
        type:types.types.LOGIN_FAIL    
    }
}

export const login=(user)=> {
    return dispatch=> {
        return new Promise((resolve,reject)=>{
            if(user.username) {
                dispatch(loginSuccess());
                resolve('You has login successful');
            }else{
                dispatch(loginError());
                reject('Fail to login');
            }
        })
    }
}
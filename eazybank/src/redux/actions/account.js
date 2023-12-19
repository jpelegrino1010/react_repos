import * as type from '../actions/types';
import {getAccountById} from '../../services/account-service'

const loadAccountSuccess=account=> {
    return {
        type:type.types.LOAD_ACCOUNT_SUCCESS,
        account
    }
}

export const getAccount=(accountId)=> {
    return async dispatch =>{
        const load= async ()=> {
            const response= await getAccountById(accountId);
            return response.data;            
        }

        try {
            const accountData= await load();
            dispatch(loadAccountSuccess(accountData));
        } catch (err) {
            console.log(err);
        }
    }
}
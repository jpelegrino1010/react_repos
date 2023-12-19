import {createCustomer} from '../../services/customer-service';
import * as constant from '../actions/types';

const createCustomerSuccess=customer=>({
    type: constant.types.CREATE_CUSTOMER_SUCCESS,
    customer
});


export const saveCustomer=(customer)=> {
    return async dispatch =>{
        const create= async ()=> {
            const response= await createCustomer(customer);
            return response.data;            
        }

        try {
            const customerData= await create();
            dispatch(createCustomerSuccess(customerData));
        } catch (err) {
            console.log(err);
        }
    }
}
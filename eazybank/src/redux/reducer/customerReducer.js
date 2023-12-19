import * as constant from '../actions/types';

const initialState={customers:[]};

const customerReducer=(state=initialState,action)=> {

    switch(action.type) {
        case constant.types.CREATE_CUSTOMER_SUCCESS:
            const customers=[...state.customers,action.customer];
            return {
                customers
            }
    }
   
    return state;
}

export default customerReducer;
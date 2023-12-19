import * as constant from '../actions/types';

const initialState={account:{}};

const AccountReducer=(state=initialState,action)=> {
    switch(action.type) {
        case constant.types.LOAD_ACCOUNT_SUCCESS:
            
            return {
                ...state,account:action.account
            }
    }
    return state;
}

export default AccountReducer;
import * as constant from '../actions/types';

const initialState={
    isLogin:false
};

const loginReducer=(state=initialState,action)=> {

   switch(action.type) {
        case constant.types.LOGIN_SUCCESS:
        return {
            ...state,isLogin:true
        }
        case constant.types.LOGIN_FAIL:
            return {...state,isLogin:false}
        default:
            return state;
    }

    
}

export default loginReducer;
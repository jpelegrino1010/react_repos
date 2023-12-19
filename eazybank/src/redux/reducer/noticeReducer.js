import * as constant from '../actions/types';

const initialState={notices:[]};

const NoticesReducer=(state=initialState,action)=> {
    switch(action.type) {
        case constant.types.LOAD_NOTICES_SUCCESS:
            const notices=[...action.notices];
            return {
                notices
            }
    }
    return state;
}

export default NoticesReducer;
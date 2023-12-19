import * as type from '../actions/types';
import {loadNotices} from '../../services/notice-service'

const loadNoticesSuccess=(notices)=>{
    return {
        type: type.types.LOAD_NOTICES_SUCCESS,
        notices
    }
}

const loadNoticesFail=(err)=>{
    return {
        type: type.types.LOAD_NOTICES_ERROR,
        err
    }
}


export const getNotices=()=> {
    return async dispatch =>{
        const load= async ()=> {
            const response= await loadNotices();
            return response.data;            
        }

        try {
            const noticesData= await load();
            dispatch(loadNoticesSuccess(noticesData));
        } catch (err) {
            dispatch(loadNoticesFail(err));
        }
    }
}
import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import notice from './noticeReducer';
import account from './accountReducer'

const rootReducer=combineReducers({
loginReducer,
notice,
account
});

export default rootReducer;
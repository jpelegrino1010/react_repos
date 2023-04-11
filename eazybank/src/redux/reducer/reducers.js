import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import notice from './noticeReducer';
import account from './accountReducer';
import customer from './customerReducer'

const rootReducer=combineReducers({
loginReducer,
notice,
account,
customer
});

export default rootReducer;
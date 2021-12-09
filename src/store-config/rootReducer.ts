import {combineReducers} from "redux";
import {default as users} from "../modules/user/store/userReducer"

export const rootReducer = combineReducers({
    users
});
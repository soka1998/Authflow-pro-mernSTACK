import { combineReducers } from "@reduxjs/toolkit";
import AuthReducer from './AuthSlice'

const rootReducer= combineReducers({
    auth:AuthReducer,

})
export default rootReducer;
import {combineReducers} from 'redux';
import authReducer from './authReducer';
import userTypeReducer from './userTypeReducer';

export default combineReducers({
    auth: authReducer,
    userType: userTypeReducer
});  
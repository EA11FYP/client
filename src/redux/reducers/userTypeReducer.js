import {  USER_TYPE, LOGOUT_USER } from '../actions/types';

export default function(state = null, action){
    switch(action.type){
        case USER_TYPE: return action.payload || false;
        case LOGOUT_USER: return null;
        default : return state;
    }
}
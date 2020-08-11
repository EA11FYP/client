import { FETCH_USER, LOGOUT_USER } from './types';

export const LoginUser = (body) => dispatch => {
    dispatch({type: FETCH_USER, payload: body});
};

export const LogoutUser = () => dispatch => {
    dispatch({type: LOGOUT_USER});
};
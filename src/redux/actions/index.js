import { FETCH_USER, LOGOUT_USER, USER_TYPE } from './types';

export const LoginUser = (body) => dispatch => {
    dispatch({type: FETCH_USER, payload: body});
};

export const LogoutUser = () => dispatch => {
    dispatch({type: LOGOUT_USER});
};

export const UserType = body => dispatch => {
    dispatch({type: USER_TYPE, payload: body });
}
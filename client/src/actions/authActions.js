import { CHECK_AUTH, USER_REGISTER, USER_LOGIN, USER_LOGOUT } from './types';
import { ToastDashMessage } from './toastActions';
import axios from 'axios';
import store from '../store';

export const checkAuth = token => dispatch => {
    const token = localStorage.getItem('token');
    if (token) {
        (async () => {
            await axios
                .get('/auth/auth', {
                    headers: { Authorization: token }
                })
                .then(res => {
                    const { success, msg, user } = res.data;
                    if (!success) {
                        store.dispatch(ToastDashMessage(msg));
                    } else {
                        const { first_name, last_name, email } = user;
                        const payload = {
                            user: {
                                first_name,
                                last_name,
                                email
                            },
                            loggedIn: true
                        };

                        dispatch({
                            type: CHECK_AUTH,
                            payload: payload
                        });
                    }
                })
                .catch(err => console.log(err.message));
        })();
    }
};

export const userRegister = ({ first_name, last_name, email, password }) => dispatch => {
    axios
        .post('/auth/register', { first_name, last_name, email, password })
        .then(res => {
            const { success, msg } = res.data;
            if (!success) {
                store.dispatch(ToastDashMessage(msg));
            } else {
                const payload = {
                    user: {
                        first_name,
                        last_name,
                        email
                    }
                };
                dispatch({
                    type: USER_REGISTER,
                    payload: payload
                });
            }
        })
        .catch(err => console.log(err));
};

export const userLogin = ({ email, password }) => dispatch => {
    axios
        .post('/auth/login', { email, password })
        .then(res => {
            const { success, msg, token, payload } = res.data;
            if (!success) {
                store.dispatch(ToastDashMessage(msg));
            } else {
                localStorage.setItem('token', token);
                const _payload = {
                    user: {
                        first_name: payload.first_name,
                        last_name: payload.last_name,
                        email: payload.email,
                        id: payload.id
                    }
                };
                dispatch({
                    type: USER_LOGIN,
                    payload: _payload
                });
                store.dispatch(ToastDashMessage('User Authenticated'));
            }
        })
        .catch(err => console.log(err));
};

export const userLogout = () => dispatch => {
    window.localStorage.removeItem('token');
    const payload = {};
    dispatch({
        type: USER_LOGOUT,
        payload
    });
};

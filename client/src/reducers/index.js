import { combineReducers } from 'redux';
import todoReducer from './todoReducer';
import authReducer from './authReducer';
import toastReducer from './toastReducer';

export default combineReducers({
    auth: authReducer,
    todo: todoReducer,
    toast: toastReducer
});

import { combineReducers } from 'redux';
import todoReducer from './todoReducer';
import authReducer from './authReducer';
import toastReducer from './toastReducer';
import navdrawerReducer from './navdrawerReducer';

export default combineReducers({
    auth: authReducer,
    todo: todoReducer,
    toast: toastReducer,
    navdrawer: navdrawerReducer
});

import { OPEN_NAVDRAWER, CLOSE_NAVDRAWER } from './types';
export function openNavdrawer() {
    return {
        type: OPEN_NAVDRAWER,
        payload: true
    };
}
export function closeNavdrawer() {
    return {
        type: CLOSE_NAVDRAWER,
        payload: false
    };
}

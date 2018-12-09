import { OPEN_NAVDRAWER, CLOSE_NAVDRAWER } from '../actions/types';

const initialState = { open: false };

export default function(store = initialState, action) {
    switch (action.type) {
        case OPEN_NAVDRAWER:
            return { open: true };
        case CLOSE_NAVDRAWER:
            return { open: false };
        default:
            return store;
    }
}

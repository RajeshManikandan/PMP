import { TOAST_DASH_MESSAGE } from '../actions/types';

const initialState = {
    dash: {
        message: '',
        open: false
    }
};

export default function(state = initialState, action) {
    switch (action.type) {
        case TOAST_DASH_MESSAGE: {
            return {
                dash: {
                    message: action.payload,
                    open: true
                }
            };
        }
        default:
            return state;
    }
}

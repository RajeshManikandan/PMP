import { TOAST_DASH_MESSAGE } from './types';
export function ToastDashMessage(message) {
    return {
        type: TOAST_DASH_MESSAGE,
        payload: message
    };
}

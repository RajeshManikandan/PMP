import { CHECK_AUTH, USER_REGISTER, USER_LOGIN, USER_LOGOUT } from '../actions/types';
const initialState = {
    user: {
        first_name: '',
        last_name: '',
        email: '',
        id: ''
    },
    loggedIn: false,
    error: ''
};
export default function(state = initialState, action) {
    var newState;
    switch (action.type) {
        case CHECK_AUTH: {
            let { user, loggedIn } = action.payload;
            console.log('CHECK_AUTH', action.payload);
            newState = {
                ...state,
                user: {
                    first_name: user.first_name,
                    last_name: user.last_name,
                    email: user.email,
                    id: user.id
                },
                loggedIn: loggedIn
            };
            break;
        }
        case USER_REGISTER: {
            let { user } = action.payload;
            console.log(state);
            newState = {
                ...state.auth,
                user: {
                    first_name: user.first_name,
                    last_name: user.last_name,
                    email: user.email,
                    id: user.id
                }
            };
            console.log(newState);
            break;
        }
        case USER_LOGIN: {
            let { user } = action.payload;
            console.log('USER_LOGIN', state, action.payload);
            newState = {
                ...state.auth,
                user: {
                    first_name: user.first_name,
                    last_name: user.last_name,
                    email: user.email,
                    id: user.id
                },
                loggedIn: true
            };
            break;
        }
        case USER_LOGOUT: {
            newState = {
                ...initialState
            };

            break;
        }
        default:
            newState = { ...state };
            break;
    }
    return newState;
}

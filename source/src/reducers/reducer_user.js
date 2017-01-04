
import {
    ME_FROM_TOKEN, ME_FROM_TOKEN_SUCCESS, ME_FROM_TOKEN_FAILURE, RESET_TOKEN,
	SIGNIN_USER, SIGNIN_USER_SUCCESS, SIGNIN_USER_FAILURE,
	USER_PROFILE, USER_PROFILE_SUCCESS, USER_PROFILE_FAILURE, RESET_USER,
	LOGOUT_USER
} from '../actions/users';


// user = userobj,
// status can be:
// 1. 'storage' ie. localstorage / sessionstorage)
// 3. 'signin' (signing in)
// 5. 'authenticated'(after signin)
// 6. 'logout' (after logout)

const INITIAL_STATE = {user: null, status:null, error:null, loading: false};

export default function(state = INITIAL_STATE, action) {
    let error;
    switch(action.type) {
        case ME_FROM_TOKEN:
            return { ...state, user: null, status: 'storage', error: null, loading: true};
        case ME_FROM_TOKEN_SUCCESS:
            return { ...state, user: null, status: 'authenticated', error: null, loading: false};
        case ME_FROM_TOKEN_FAILURE:
            error = action.payload.data || {message: action.payload.message};
            return { ...state, user: null, status: 'storage', error: error, loading: false};
        case RESET_TOKEN:
            return { ...state, user: null, status: 'storage', error: null, loading: false};

        case SIGNIN_USER:
            return { ...state, user: null, status: 'signin', error: null, loading: true};
        case SIGNIN_USER_SUCCESS:
            return { ...state, user: null, status: 'authenticated', error: null, loading: false};
        case SIGNIN_USER_FAILURE:
            error = action.payload.data || {message: action.payload.message};
            return { ...state, user: null, status: 'signin', error: error, loading: false};

        case USER_PROFILE:
            return { ...state, user: null, status: 'signin', error: null, loading: true};
        case USER_PROFILE_SUCCESS:
            return { ...state, user: action.payload, status: 'authenticated', error: null, loading: false};
        case USER_PROFILE_FAILURE:
            error = action.payload.data || {message: action.payload.message};
            return { ...state, user: null, status: 'signin', error: error, loading: false};

        case LOGOUT_USER:
            return {...state, user:null, status: 'logout', error: null, loading: false};

        case RESET_USER:
            return { ...state, user: null, status: null, error: null, loading: false};

        default:
        return state;
    }
}

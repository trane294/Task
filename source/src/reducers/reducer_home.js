import {
    FETCH_INFO, FETCH_INFO_SUCCESS, FETCH_INFO_FAILURE
} from '../actions/home';

const INITIAL_STATE = {
    infoState: {info: null, error: null, loading: true}
};

export default function(state = INITIAL_STATE, action) {
    let error;

    switch(action.type) {
        case FETCH_INFO:
            return { ...state, infoState: {info: null, error: null, loading: true} };
        case FETCH_INFO_SUCCESS:
            return { ...state, infoState: {info: action.payload.info, error: null, loading: false} };
        case FETCH_INFO_FAILURE:
            error = action.payload || {message: action.payload.message};
            return { ...state, infoState: {info: null, error: error, loading: false} };

        default:
            return state;
    }
}
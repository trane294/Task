import {
    GET_AUTHOR,  GET_AUTHOR_SUCCESS, GET_AUTHOR_FAILURE, CANCEL_ACTION,
    GET_QUOTE, GET_QUOTE_SUCCESS, GET_QUOTE_FAILURE,
    TOGGLE_MODAL
} from '../actions/actions';

const INITIAL_STATE = {
    quote: null, author: null, modalState: false, error: null, loading: false
};

export default function(state = INITIAL_STATE, action) {
    let error;
    switch(action.type) {
        case GET_AUTHOR:
            return { ...state, author: null, error: null, loading: true};
        case GET_AUTHOR_SUCCESS:
            return { ...state, author: action.payload, error: null, loading: false};
        case GET_AUTHOR_FAILURE:
            error = action.payload.data || {message: action.payload.message};
            return { ...state, author: null, error: error, loading: false};

        case CANCEL_ACTION:
            return { ...state, modalState: false, quote: null, author: null, error: null, loading: false};

        case GET_QUOTE:
            return { ...state, quote: null, error: null, loading: true};
        case GET_QUOTE_SUCCESS:
            return { ...state, quote: action.payload, error: null, loading: false};
        case GET_QUOTE_FAILURE:
            error = action.payload.data || {message: action.payload.message};
            return { ...state, quote: null, error: error, loading: false};

        case TOGGLE_MODAL:
            const actualState = state.modalState;
            const newState = actualState === false ? true : false;

            return { ...state, modalState: newState };

        default:
            return state;
    }
}
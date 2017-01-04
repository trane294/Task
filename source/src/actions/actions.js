import axios from 'axios';

var CancelToken = axios.CancelToken;
var source = CancelToken.source();

export const TOGGLE_MODAL = 'TOGGLE_MODAL';

// Get Author
export const GET_AUTHOR = 'GET_AUTHOR';
export const GET_AUTHOR_SUCCESS = 'GET_AUTHOR_SUCCESS';
export const GET_AUTHOR_FAILURE = 'GET_AUTHOR_FAILURE';

export const CANCEL_ACTION = 'CANCEL_ACTION';

// Get Quote
export const GET_QUOTE = 'GET_QUOTE';
export const GET_QUOTE_SUCCESS = 'GET_QUOTE_SUCCESS';
export const GET_QUOTE_FAILURE = 'GET_QUOTE_FAILURE';

const ROOT_URL = 'http://212.47.246.115:9510';

export function toggleModal() {
    return {
        type: TOGGLE_MODAL
    };
}

export function getAuthor() {
    const request = axios.get(`${ROOT_URL}/author?token=` + localStorage.getItem('token'), {
        cancelToken: source.token
    }).catch(function(thrown) {
        if (axios.isCancel(thrown)) {
            console.log('Request canceled', thrown.message);
        } else {
            // handle error
        }
    });

    return {
        type: GET_AUTHOR,
        payload: request
    };
}

export function getAuthorSuccess(author) {
    return {
        type: GET_AUTHOR_SUCCESS,
        payload: author
    };
}

export function getAuthorFailure(error) {
    return {
        type: GET_AUTHOR_FAILURE,
        payload: error
    };
}

export function cancelAction() {
    source.cancel('Operation canceled by the user.');

    return {
        type: CANCEL_ACTION
    };
}

export function getQuote(authorId) {
    const request = axios.get(`${ROOT_URL}/quote?token=` + localStorage.getItem('token') + `&authorId=` + authorId, {
        cancelToken: source.token
    }).catch(function(thrown) {
        if (axios.isCancel(thrown)) {
            console.log('Request canceled', thrown.message);
        } else {
            // handle error
        }
    });

    return {
        type: GET_QUOTE,
        payload: request
    };
}

export function getQuoteSuccess(quote) {
    return {
        type: GET_QUOTE_SUCCESS,
        payload: quote
    };
}

export function getQuoteFailure(error) {
    return {
        type: GET_QUOTE_FAILURE,
        payload: error
    };
}
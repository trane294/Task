import axios from 'axios';

export const FETCH_INFO = 'FETCH_INFO';
export const FETCH_INFO_SUCCESS = 'FETCH_INFO_SUCCESS';
export const FETCH_INFO_FAILURE = 'FETCH_INFO_FAILURE';

const ROOT_URL = 'http://212.47.246.115:9510';

export function fetchInfo() {
    const request = axios({
        method: 'get',
        url: `${ROOT_URL}/info`,
        headers: []
    });

    return {
        type: FETCH_INFO,
        payload: request
    };
}

export function fetchInfoSuccess(posts) {
    return {
        type: FETCH_INFO_SUCCESS,
        payload: posts
    };
}

export function fetchInfoFailure(error) {
    return {
        type: FETCH_INFO_FAILURE,
        payload: error
    };
}
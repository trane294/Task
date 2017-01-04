import axios from 'axios';

// Sign In User
export const SIGNIN_USER = 'SIGNIN_USER';
export const SIGNIN_USER_SUCCESS = 'SIGNIN_USER_SUCCESS';
export const SIGNIN_USER_FAILURE = 'SIGNIN_USER_FAILURE';

// User Profile
export const USER_PROFILE = 'USER_PROFILE';
export const USER_PROFILE_SUCCESS = 'USER_PROFILE_SUCCESS';
export const USER_PROFILE_FAILURE = 'USER_PROFILE_FAILURE';

// Log out user
export const LOGOUT_USER = 'LOGOUT_USER';

const ROOT_URL = 'http://212.47.246.115:9510';

<<<<<<< HEAD
=======
export function resetToken() {//used for logout
    return {
        type: RESET_TOKEN
    };
}

>>>>>>> 56c4f14e7bbba21a9b07f46671d42b05d4126d3d
export function signInUser(formValues) {
    const request = axios.post(`${ROOT_URL}/login`, formValues);

    return {
        type: SIGNIN_USER,
        payload: request
    };
}

export function signInUserSuccess(user) {
    return {
        type: SIGNIN_USER_SUCCESS,
        payload: user
    };
}

export function signInUserFailure(error) {
    return {
        type: SIGNIN_USER_FAILURE,
        payload: error
    };
}

export function logoutUser() {
<<<<<<< HEAD
    const request = axios.get(`${ROOT_URL}/logout?token=` + localStorage.getItem('token'));
=======
    const request = axios.get(`${ROOT_URL}/logout?token=` + sessionStorage.getItem('token'));
>>>>>>> 56c4f14e7bbba21a9b07f46671d42b05d4126d3d

    return {
        type: LOGOUT_USER
    };
}

export function getUserProfile() {
<<<<<<< HEAD
    const request = axios.get(`${ROOT_URL}/profile?token=` + localStorage.getItem('token'));
=======
    const request = axios.get(`${ROOT_URL}/profile?token=` + sessionStorage.getItem('token'));
>>>>>>> 56c4f14e7bbba21a9b07f46671d42b05d4126d3d

    return {
        type: USER_PROFILE,
        payload: request
    };
}

export function getUserProfileSuccess(user) {
    return {
        type: USER_PROFILE_SUCCESS,
        payload: user
    };
}

export function getUserProfileFailure(error) {
    return {
        type: USER_PROFILE_FAILURE,
        payload: error
    };
}
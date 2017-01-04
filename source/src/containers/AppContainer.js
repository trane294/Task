import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserProfile, getUserProfileFailure, getUserProfileSuccess } from '../actions/users';
import App from '../components/App.js';

const mapDispatchToProps = (dispatch) => {
    return {
        loadUserProfile: () => {
            let token = localStorage.getItem('token');

            if (!token || token === '') {
        	    return;
            }

            dispatch(getUserProfile()).then((result) => {
                var _response = result.payload.data; // TODO exception because enpoint giving 200 all the time

                if (!_response.success) {
                    dispatch(getUserProfileFailure(_response.data));
                    localStorage.removeItem('token');

                }

                dispatch(getUserProfileSuccess(_response.data));
            });
        }
    }
}

export default connect(null, mapDispatchToProps)(App);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/users';
import Header from '../components/Header.js';

function mapStateToProps(state) {
    return {
        authenticatedUser: state.user.status === 'authenticated' ? state.user.user : null,
        user: state.user
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        logout: () => {
            localStorage.removeItem('token');
            dispatch(logoutUser());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);

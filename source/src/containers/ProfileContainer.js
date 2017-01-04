import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/users';
import Profile from '../components/Profile.js';
import { getAuthor, getAuthorSuccess, getAuthorFailure, getQuote, getQuoteSuccess, getQuoteFailure } from '../actions/actions';

function mapStateToProps(state) {
    return {
        user: state.user.user,
        modalState: state.actions.modalState,
        author: state.actions.author,
        quote: state.actions.quote
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getAuthorAndQuote: () => {
            dispatch(getAuthor()).then((result) => {
                var _response = result.payload.data; // TODO exception because enpoint giving 200 all the time

                if (!_response.success) {
                    dispatch(getAuthorFailure(_response.data));
                }

                dispatch(getAuthorSuccess(_response.data));

                dispatch(getQuote(_response.data.authorId)).then((result) => {
                    var _response = result.payload.data; // TODO exception because enpoint giving 200 all the time

                    if (!_response.success) {
                        dispatch(getQuoteFailure(_response.data));
                    }

                    dispatch(getQuoteSuccess(_response.data));
                });
            });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

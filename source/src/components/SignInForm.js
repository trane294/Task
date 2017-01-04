import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { reduxForm, SubmissionError, Field } from 'redux-form';
import renderField from './renderField';
import { signInUser, signInUserSuccess, signInUserFailure, resetUserFields, getUserProfile, getUserProfileFailure, getUserProfileSuccess } from '../actions/users';

// Client side validation can be implemented
function validate(values) {

}

const validateAndSignInUser = (values, dispatch) => {
    return dispatch(signInUser(values)).then((result) => {
        var _response = result.payload.data; // TODO exception because enpoint giving 200 all the time

        if (!_response.success) {
            dispatch(signInUserFailure(_response.data));
            throw new SubmissionError(_response.data);
        }

        localStorage.setItem('token', _response.data.token);
        dispatch(signInUserSuccess(_response.data));

        dispatch(getUserProfile()).then((result) => {
            var _response = result.payload.data; // TODO exception because enpoint giving 200 all the time

            if (!_response.success) {
                dispatch(getUserProfileFailure(_response.data));
                throw new SubmissionError(_response.data);
            }

            dispatch(getUserProfileSuccess(_response.data));
        });
    });
};

class SignInForm extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    componentWillMount() {
        this.props.resetMe();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.user.status === 'authenticated' && !nextProps.user.user && !nextProps.user.error) {
            this.context.router.push('/');
        }

        if (nextProps.user.status === 'signin' && nextProps.user.error && !this.props.user.error) {
            alert(nextProps.user.error.message);
        }
    }

    render() {
        const {asyncValidating, handleSubmit, submitting} = this.props;

        return (
            <form onSubmit={ handleSubmit(validateAndSignInUser) }>
                <Field
                    name="email"
                    type="email"
                    component={ renderField }
                    label="Email address"
                    helper="We will never share your email with anyone else." />
                <Field
                    name="password"
                    type="password"
                    component={ renderField }
                    label="Password" />
                <div>
                    <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={ submitting }>
                            Submit
                    </button>
                </div>
            </form>
        )
    }
}

export default reduxForm({
    form: 'SignInForm', validate
})(SignInForm)
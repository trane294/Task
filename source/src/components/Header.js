import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class Header extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    componentWillReceiveProps(nextProps) {
        if (this.props.user.user && !nextProps.user.user) {
            this.context.router.push('/');
        }
    }

	render() {
    	const { type, authenticatedUser } = this.props;

    	if (authenticatedUser) {
            return (
                <div className="page-header">
                    <Link className="btn btn-default" to="/" role="button">About Us</Link>
                    <Link className="btn btn-default" to="/profile" role="button">Profile</Link>
                    <Link className="btn btn-default" onClick={this.props.logout} href="javascript:void(0)" role="button">Sign Out</Link>
                </div>
            )
        } else {
            return (
                <div className="page-header">
                    <Link className="btn btn-default" to="/" role="button">About Us</Link>
                    <Link className="btn btn-default" to="/signin" role="button">Sign In</Link>
                </div>
            )
        }
	}
}

export default Header
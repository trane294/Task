import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class Header extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

	render() {
    	const { user } = this.props;

    	console.log(user);

        if (user) {
            return (
                <div>
                    <div className="media">
                        <div className="media-left media-middle">
                            <img className="media-object img-circle" width="100" height="100" src={'http://212.47.246.115:9510/' + user.avatar} />
                        </div>
                        <div className="media-body media-middle">
                            <h3 className="media-heading">{user.fullname}</h3>
                            <Link className="btn btn-primary" onClick={this.props.logout} href="javascript:void(0)" role="button">Update</Link>
                        </div>
                    </div>
                </div>
            )
        }
	}
}

export default Header
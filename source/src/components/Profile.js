import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
<<<<<<< HEAD
import ModalComponent from './modalComponent';

class Profile extends Component {
=======

class Header extends Component {
>>>>>>> 56c4f14e7bbba21a9b07f46671d42b05d4126d3d
    static contextTypes = {
        router: PropTypes.object
    };

<<<<<<< HEAD
    componentWillReceiveProps(nextProps) {
        if (nextProps.modalState && !nextProps.author && !nextProps.quote) {
            this.props.getAuthorAndQuote();
        }
    }

	render() {
    	const { user, author, quote, modalState } = this.props;

        if (user) {
            return (
                <div className="container">
=======
	render() {
    	const { user } = this.props;

    	console.log(user);

        if (user) {
            return (
                <div>
>>>>>>> 56c4f14e7bbba21a9b07f46671d42b05d4126d3d
                    <div className="media">
                        <div className="media-left media-middle">
                            <img className="media-object img-circle" width="100" height="100" src={'http://212.47.246.115:9510/' + user.avatar} />
                        </div>
                        <div className="media-body media-middle">
                            <h3 className="media-heading">{user.fullname}</h3>
<<<<<<< HEAD
                            <ModalComponent label="Update" />
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-md-12">
                            {author != null && quote !== null &&
                                <span>
                                    {JSON.stringify(author)}
                                    {JSON.stringify(quote)}
                                </span>
                            }
=======
                            <Link className="btn btn-primary" onClick={this.props.logout} href="javascript:void(0)" role="button">Update</Link>
>>>>>>> 56c4f14e7bbba21a9b07f46671d42b05d4126d3d
                        </div>
                    </div>
                </div>
            )
        }
	}
}

<<<<<<< HEAD
export default Profile
=======
export default Header
>>>>>>> 56c4f14e7bbba21a9b07f46671d42b05d4126d3d

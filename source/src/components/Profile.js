import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import ModalComponent from './modalComponent';

class Profile extends Component {

    static contextTypes = {
        router: PropTypes.object
    };

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
                    <div className="media">
                        <div className="media-left media-middle">
                            <img className="media-object img-circle" width="100" height="100" src={'http://212.47.246.115:9510/' + user.avatar} />
                        </div>
                        <div className="media-body media-middle">
                            <h3 className="media-heading">{user.fullname}</h3>
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
                        </div>
                    </div>
                </div>
            )
        }
	}
}

export default Profile
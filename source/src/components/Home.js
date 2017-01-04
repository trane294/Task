import React, {Component} from 'react';
import {Link} from 'react-router';

class Home extends Component {
    componentWillMount() {
        this.props.fetchInfo();
    }

    render() {
        const {info, loading, error} = this.props.infoState;

        if (loading) {
            return <div className="container"><h3>Loading...</h3></div>
        } else if(error) {
            return <div className="alert alert-danger">Error: {error.message}</div>
        }

        return (
            <div>
                {info}
            </div>
        );
    }
}

export default Home;
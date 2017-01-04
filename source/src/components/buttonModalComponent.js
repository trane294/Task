import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toggleModal } from '../actions/actions';

class ModalComponentButton extends Component {
    render() {
        const { toggleModal, label } = this.props;

        return (<button className="btn btn-primary" onClick={toggleModal}>{label}</button>);
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        toggleModal
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(ModalComponentButton);
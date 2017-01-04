import React, { Component } from 'react';
import { connect } from 'react-redux';
import ButtonComponent from './buttonModalComponent';
import Modal from 'react-modal';
import { toggleModal, cancelAction } from '../actions/actions';
import { bindActionCreators, } from 'redux';


class ModalComponentDialog extends Component {
    constructor(props) {
        super(props);
        this.closeModal = this.closeModal.bind(this);
        this.cancelAction = this.cancelAction.bind(this);
    }

    closeModal() {
        this.props.toggleModal();
    }

    cancelAction() {
        this.props.cancelAction();
    }

    render() {
        const { label, modalStatus, author, quote } = this.props;
        const status = modalStatus ? "True": "False";

        let authorComplete = null
        let quoteComplete = null;
        let button = `<button type="button" className="btn btn-primary pull-left" onClick={this.closeModal}>Cancel</button>`;

        if (author) {
            authorComplete = "Complete";
        }
        if (quote) {
            quoteComplete = "Complete";
        }

        return (
            <div>
                <ButtonComponent label={label} />

                <Modal
                    isOpen={modalStatus}
                    onRequestClose={this.closeModal}
                    contentLabel="modal-dialog"
                    className="modal-dialog"
                >
                    <div className="modal-content">
                        <div className="modal-body">
                            <h3>Requesting the quote</h3>
                            <p>Step 1: Requesting author... {authorComplete}</p>
                            <p>Step 2: Requesting quote... {quoteComplete}</p>
                        </div>
                        <div className="modal-footer">
                            {(authorComplete !== null && quoteComplete !== null) ?
                                (<button type="button" className="btn btn-primary pull-left" onClick={this.closeModal}>Close</button>)
                                :
                                (<button type="button" className="btn btn-primary pull-left" onClick={this.cancelAction}>Cancel</button>)
                            }
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        modalStatus: state.actions.modalState,
        author: state.actions.author,
        quote: state.actions.quote
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleModal: () => {
            dispatch(toggleModal());
        },
        cancelAction: () => {
            dispatch(cancelAction());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalComponentDialog);
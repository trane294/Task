import SignInForm from '../components/SignInForm.js';
import { connect } from 'react-redux';

function mapStateToProps(state, ownProps) {
    return {
        user: state.user
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        resetMe: () =>{
            // can be implemented
        }
    }
}

function mapStateToProps(state, ownProps) {
    return {
        user: state.user
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
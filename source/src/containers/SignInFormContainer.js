import SignInForm from '../components/SignInForm.js';
import { connect } from 'react-redux';

<<<<<<< HEAD
function mapStateToProps(state, ownProps) {
    return {
        user: state.user
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        resetMe: () => {
=======
const mapDispatchToProps = (dispatch) => {
    return {
        resetMe: () =>{
>>>>>>> 56c4f14e7bbba21a9b07f46671d42b05d4126d3d
            // can be implemented
        }
    }
}

<<<<<<< HEAD
=======
function mapStateToProps(state, ownProps) {
    return {
        user: state.user
    };
}

>>>>>>> 56c4f14e7bbba21a9b07f46671d42b05d4126d3d
export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
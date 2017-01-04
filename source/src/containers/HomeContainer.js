import {connect} from 'react-redux'
import {fetchInfo, fetchInfoSuccess, fetchInfoFailure} from '../actions/home';
import Home from '../components/Home.js';

const mapStateToProps = (state) => {
    return {
        infoState: state.home.infoState
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchInfo: () => {
            dispatch(fetchInfo()).then((response) => {
                var _response = response.payload.data; // TODO exception because enpoint giving 200 all the time
                _response.success ? dispatch(fetchInfoSuccess(_response.data)) : dispatch(fetchInfoFailure(_response.data));
            });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
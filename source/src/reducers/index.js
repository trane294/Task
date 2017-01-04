import { combineReducers } from 'redux';
import HomeReducer from './reducer_home.js';
import UserReducer from './reducer_user.js';

import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    home: HomeReducer,
    user: UserReducer,
    form: formReducer
});

export default rootReducer;
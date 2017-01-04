import { combineReducers } from 'redux';
import HomeReducer from './reducer_home.js';
import UserReducer from './reducer_user.js';
import ActionsReducer from './reducer_actions.js';

import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    home: HomeReducer,
    user: UserReducer,
    actions: ActionsReducer,
    form: formReducer
});

export default rootReducer;
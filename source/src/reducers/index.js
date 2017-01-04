import { combineReducers } from 'redux';
import HomeReducer from './reducer_home.js';
import UserReducer from './reducer_user.js';
<<<<<<< HEAD
import ActionsReducer from './reducer_actions.js';
=======
>>>>>>> 56c4f14e7bbba21a9b07f46671d42b05d4126d3d

import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    home: HomeReducer,
    user: UserReducer,
<<<<<<< HEAD
    actions: ActionsReducer,
=======
>>>>>>> 56c4f14e7bbba21a9b07f46671d42b05d4126d3d
    form: formReducer
});

export default rootReducer;
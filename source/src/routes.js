import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './pages/App.js';
import TaskIndex from './pages/TaskIndex.js';
import SignInPage from './pages/SignInPage.js';
import ProfilePage from './pages/ProfilePage.js';

// TODO Simple auth check
var someAuthCheck = function(nextState, transition) {
    if (!localStorage.getItem('token')) {
        transition('/');
    }
}

export default (
    <Route path="/" component={App}>
        <IndexRoute component={TaskIndex} />
        <Route path="/signin" component={SignInPage} />
        <Route path="/profile" component={ProfilePage} onEnter={someAuthCheck}/>
    </Route>
);
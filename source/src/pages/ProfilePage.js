import React, { Component } from 'react';
import HeaderContainer from '../containers/HeaderContainer.js';
import ProfileContainer from '../containers/ProfileContainer.js';

class ProfilePage extends Component {
    render() {
        return (
            <div>
                <HeaderContainer/>
                <ProfileContainer />
            </div>
        );
    }
}

export default ProfilePage;

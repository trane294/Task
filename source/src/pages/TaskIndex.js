import React, {Component} from 'react';
import HeaderContainer from '../containers/HeaderContainer.js';
import HomeContainer from '../containers/HomeContainer.js';

class TaskIndex extends Component {
    render() {
        return (
            <div>
                <HeaderContainer type="posts_index" />
                <div className="lead">
                    <HomeContainer />
                </div>
            </div>
        );
    }
}

export default TaskIndex;
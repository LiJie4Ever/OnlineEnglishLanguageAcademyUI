import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUserInfo} from "actions/userInfo";

class UserInfo extends Component {

    render() {
        const { userInfo={} } = this.props.userInfo;
        return (
            <div>
                {
                    
                    <div>
                        <p>User Info：</p>
                        <p>User Name：{userInfo.name}</p>
                        <p>User Introduction：{userInfo.intro}</p>
                    </div>
                }
                <button onClick={() => this.props.getUserInfo()}>Get User Info</button>
            </div>
        )
    }
}

export default connect((userInfo) => userInfo, {getUserInfo})(UserInfo);
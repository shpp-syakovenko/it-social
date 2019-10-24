import React from 'react';
import Profile from "./Propfile";
import {connect} from "react-redux";
import {getUserProfile, getStatus, updateStatus} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        const {getUserProfile, getStatus, authUserId} = this.props;
        let userId = this.props.match.params.userId;
        if (!userId){
            userId = authUserId;
            if(!userId){
                this.props.history.push("/login");
                return
            }
        }
        getUserProfile(userId);
        getStatus(userId);
    }

    render() {

        return (
            <Profile profile={this.props.profile}
                     isAuth={this.props.isAuth}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authUserId: state.auth.id,
    isAuth: state.auth.isAuth

});

export default compose(  // Взята с библиотеки Redux последовательно обварачивает ProfileContainer,
                         // сначала withAuthRedirect результат идет в withRouter результат идёт в
                         // connect(mapStateToProps, {getUserProfile})
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter
)(ProfileContainer);

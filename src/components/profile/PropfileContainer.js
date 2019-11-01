import React from 'react';
import Profile from "./Propfile";
import {connect} from "react-redux";
import {getUserProfile, getStatus, updateStatus, saveAvatar, saveProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        this.refrechProfily();
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.props.match.params.userId !== prevProps.match.params.userId){
            this.refrechProfily();
        }
    }

    refrechProfily(){
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
                     isOwner={!this.props.match.params.userId}
                     saveAvatar={this.props.saveAvatar}
                     saveProfile={this.props.saveProfile}
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
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, saveAvatar, saveProfile}),
    withRouter
)(ProfileContainer);

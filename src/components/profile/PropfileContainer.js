import React from 'react';
import Profile from "./Propfile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        const {getUserProfile} = this.props;
        let userId = this.props.match.params.userId;
        if (!userId) userId = 2;
        getUserProfile(userId);

    }

    render() {

        return (
            <Profile profile={this.props.profile} isAuth={this.props.isAuth}/>
        )
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});

export default compose(  // Взята с библиотеки Redux последовательно обварачивает ProfileContainer,
                         // сначала withAuthRedirect результат идет в withRouter результат идёт в
                         // connect(mapStateToProps, {getUserProfile})
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);

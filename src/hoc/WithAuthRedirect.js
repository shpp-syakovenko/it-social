import React from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
};

export const withAuthRedirect = (Component) => {

    class wrapperComponent extends React.Component {
        render() {
            if (!this.props.isAuth) {
                return <Redirect to={'login'}/>
            }
            return (
                <Component {...this.props} />
            )
        }
    }
    return connect(mapStateToProps)(wrapperComponent);
};

/*
export const withAuthRedirect = (Component) => {

    let wrapperComponent = (props) => {
        console.log(props);

            if (!props.isAuth) {
                return <Redirect to={'login'}/>
            }
            return (
                <Component {...this.props} />
            )};
    return wrapperComponent;
};
*/

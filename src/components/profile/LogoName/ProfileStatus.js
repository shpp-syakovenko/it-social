import React from 'react';
import s from "../profile.module.css";


class ProfileStatus extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isStatus: false,
            statusText: this.props.status || "Not status"
        }
    }

    changeStatus = (event) => {
        event.preventDefault();
        this.setState({
            statusText: event.target.value
        })
    };

    activeStatus = () => {
        this.setState({
            isStatus: true
        })
    };
    deActiveStatus = () => {
        this.setState({
            isStatus: false
        });
        this.props.updateStatus(this.state.statusText);
    };

    focusStatus = (event) => {
        event.preventDefault();
        event.target.select();
    };

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status !== this.props.status){
            this.setState({
                statusText: this.props.status
            })
        }
    }

    render() {
        return (
            <div className={s.profileStatus}>
                {
                    this.state.isStatus ?
                        <div className="inputStatus">
                            <input autoFocus={true} onBlur={this.deActiveStatus} onFocus={this.focusStatus} type="text" onChange={this.changeStatus} value={this.state.statusText || ""}/>
                        </div>
                        :
                        <div onDoubleClick={this.activeStatus}  className="textStatus">
                            {this.props.status || "Not status"}
                        </div>
                }

            </div>
        )
    }
}

export default ProfileStatus;

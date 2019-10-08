import React from 'react';
import s from "../profile.module.css";


class ProfileStatus extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isStatus: false,
            statusText: "Enter status"
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
        })
    };

    focusStatus = (event) => {
        event.preventDefault();
        event.target.select();
    };

    render() {
        return (
            <div className={s.profileStatus}>
                {
                    this.state.isStatus ?
                        <div className="inputStatus">
                            <input onBlur={this.deActiveStatus} onFocus={this.focusStatus} type="text" onChange={this.changeStatus} value={this.state.statusText}/>
                        </div>
                        :
                        <div onDoubleClick={this.activeStatus}  className="textStatus">
                            {this.state.statusText}
                        </div>
                }

            </div>
        )
    }
}

export default ProfileStatus;

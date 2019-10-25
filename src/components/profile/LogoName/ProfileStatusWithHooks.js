import React, {useState, useEffect} from 'react';
import s from "../profile.module.css";



const ProfileStatusWithHooks = React.memo((props) => {

    const[toggleStatus, changeStatus] = useState(false);
    const[status, changeEditStatus] = useState(props.status);

    useEffect(() => {
        changeEditStatus(props.status);
    },[props.status]);

    const setStatus = () => {
        changeStatus(false);
        props.updateStatus(status);
    };
    return (
            <div className={s.profileStatus}>
                {
                    toggleStatus ?
                        <div className="inputStatus">
                            <input autoFocus={true}
                                   onBlur={() => setStatus()}
                                   onChange={(event) => changeEditStatus(event.target.value)}
                                   type="text"
                                   value={status} />
                        </div>
                        :
                        <div onDoubleClick={() => changeStatus(true)} className="textStatus">
                            {status || "Not status"}
                        </div>
                }
            </div>
        )
});

export default ProfileStatusWithHooks;

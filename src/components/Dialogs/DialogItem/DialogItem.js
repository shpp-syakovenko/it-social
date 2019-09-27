import React from 'react'
import s from './../dialogs.module.css'
import {NavLink} from "react-router-dom";


const DialogItem = ({name, id}) => {
    return(
        <div className={s.dialog}>
            <NavLink to={'/dialogs/' + id}>{name}</NavLink>
        </div>
    )
};

export default DialogItem;

import React from 'react'
import content from "../profile.module.css";
import logoContent from "../../../assets/images/logo-content.jpg";


const LogoName = () => {
    return(
        <div className={content.logo_post}>
            <img src={logoContent} alt="images"/>
            <h2>Sergey Yakovenko</h2>
        </div>
    )
};

export default LogoName;

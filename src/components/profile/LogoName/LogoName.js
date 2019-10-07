import React from 'react'
import s from "../profile.module.css";
import avatar from '../../../assets/images/avatar.jpeg'
import Preloader from "../../elements/Preloader/Preloader";


const LogoName = ({profile}) => {
    if(!profile){
        return <Preloader/>
    }
    return(
        <div>
            <div className={s.logo_post}>
                <img src={profile.photos.large ? profile.photos.large : avatar} alt="images"/>
                <div className={s.desc}>
                    <h2>{profile.fullName}</h2>
                    <p>{profile.aboutMe}</p>
                </div>
            </div>

            <div className={s.social}>
                <ul>
                    <li><a href={profile.contacts.facebook}>facebook</a></li>
                    <li><a href={profile.contacts.vk}>VK</a></li>
                    <li><a href={profile.contacts.twitter}>twitter</a></li>
                    <li><a href={profile.contacts.instagram}>instagram</a></li>
                    <li><a href={profile.contacts.website}>website</a></li>
                </ul>
            </div>
        </div>

    )
};

export default LogoName;

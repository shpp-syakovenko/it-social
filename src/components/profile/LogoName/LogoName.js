import React, {useState} from 'react'
import s from "../profile.module.css";
import avatar from '../../../assets/images/avatar.jpeg'
import Preloader from "../../elements/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileData from "./ProfileData/ProfileData";
import ProfileEditForm from "./ProfileData/ProfileEditForm";


const LogoName = ({profile, status, updateStatus, isOwner, saveAvatar, saveProfile}) => {

    const[editMode, setEditMode] = useState(false);

    if(!profile){
        return <Preloader/>
    }

    const onAvatarLoad = (event) =>{
        if(event.target.files.length){
            saveAvatar(event.target.files[0])
        }

    };
    const onSubmitForm = (formData) => {
        saveProfile(formData)
          .then(() => {
              setEditMode(false)
          });
    };

    return(
        <div>
            <div className={s.logo_post}>
                <img src={profile.photos.large ? profile.photos.large : avatar} alt="images"/>
                <div className={s.desc}>
                    <h2>{profile.fullName}</h2>
                    <p>{profile.aboutMe}</p>
                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
                </div>
            </div>
            <div>
                {isOwner ? <input type='file' onChange={onAvatarLoad}/> : null}
            </div>
            {
                editMode ? <ProfileEditForm initialValues={profile} onSubmit={onSubmitForm} profile={profile}/>
                        : <ProfileData profile={profile} isOwner={isOwner} goToEdit={() => setEditMode(true)} />
            }
        </div>
    )
};






export default LogoName;

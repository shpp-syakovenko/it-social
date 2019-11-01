import s from "../../profile.module.css";
import React from "react";
import Contacts from "./Contacts";

const ProfileData = ({profile, isOwner, goToEdit}) => {
  return (
    <div className={s.social}>
      <h3>Contacts:
        {isOwner ? <button onClick={goToEdit}>Редактировать профиль</button> : null}
      </h3>
      <ul>
        {Object.keys(profile.contacts).map(value => <Contacts
          key={value}
          contactTitle={value}
          contactLink={profile.contacts[value]}
        />)}

        <li>{profile.lookingForAJob ? "Yes" : "No"}</li>
        {
          profile.lookingForAJob ?
            <li>{profile.lookingForAJobDescription}</li> :
            null
        }
      </ul>
    </div>
  )
};

export default ProfileData;

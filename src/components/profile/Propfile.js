import React from 'react';
import HeaderContent from "./HeaderContent/HeaderContent.js";
import LogoName from "./LogoName/LogoName.js";
import AddPostContainer from "./AddPost/AddPostContainer";


const Profile = ({profile, status, updateStatus,isOwner,saveAvatar, saveProfile}) => {

        return (
          <div>
                  <HeaderContent/>
                  <LogoName profile={profile}
                            status={status}
                            updateStatus={updateStatus}
                            isOwner={isOwner}
                            saveAvatar={saveAvatar}
                            saveProfile={saveProfile}
                  />
                  <AddPostContainer/>
          </div>
        )

};


export default Profile;

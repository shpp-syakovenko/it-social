import React from 'react';
import HeaderContent from "./HeaderContent/HeaderContent.js";
import LogoName from "./LogoName/LogoName.js";
import AddPostContainer from "./AddPost/AddPostContainer";


const Profile = ({profile}) =>{

        return(
            <div>
                <HeaderContent/>
                <LogoName profile={profile}/>
                <AddPostContainer />
            </div>
        )

};

export default Profile;

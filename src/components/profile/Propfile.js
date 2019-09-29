import React from 'react';
import HeaderContent from "./HeaderContent/HeaderContent.js";
import LogoName from "./LogoName/LogoName.js";
import AddPostContainer from "./AddPost/AddPostContainer";

const Profile = () =>{
        return(
            <div>
                <HeaderContent/>
                <LogoName/>
                <AddPostContainer />
            </div>
        )

};

export default Profile;

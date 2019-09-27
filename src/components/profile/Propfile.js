import React, {Component} from 'react';
import HeaderContent from "./HeaderContent/HeaderContent.js";
import LogoName from "./LogoName/LogoName.js";
import AddPost from "./AddPost/AddPost.js";
import ListPost from "./listPost/ListPost.js";

class Profile extends Component{

    render(){
        const {profile, addPost, updatePostText} = this.props;

        return(
            <div>
                <HeaderContent/>
                <LogoName/>
                <AddPost addPost={addPost} updatePostText={updatePostText} postText={profile.postText}/>
                <div className='clear'/>
                <ListPost postData={profile.postData} />
            </div>
        )
    }
}

export default Profile;

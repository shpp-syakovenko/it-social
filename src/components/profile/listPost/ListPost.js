import React from 'react'
import s from "../profile.module.css";
import Post from './Post/Post.js';


const ListPost = ({postData}) => {

    return(
        <div className={s.listPost}>
            {
                postData.map( post => (
                    <Post key={post.id} message={post.message} like={post.like} />
                ))
            }
        </div>
    )
};

export default ListPost;

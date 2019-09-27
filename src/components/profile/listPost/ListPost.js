import React from 'react'
import s from "../profile.module.css";
import Post from './Post/Post.js';


const ListPost = ({postData}) => {

    const postElements = postData.map( post => (
        <Post key={post.id} message={post.message} like={post.like} />
    ));

    return(
        <div className={s.listPost}>
            { postElements }
        </div>
    )
};

export default ListPost;

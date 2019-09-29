import React from 'react';
import s from "../../profile.module.css";


const Post = ({message, like}) => {
  return(
      <div className={s.itemPost}>
          {message}<span> like: {like}</span>
      </div>
  )
};

export default Post;

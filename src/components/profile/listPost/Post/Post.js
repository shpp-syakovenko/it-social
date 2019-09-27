import React from 'react';
import s from "../../profile.module.css";


const Post = (props) => {
  return(
      <div className={s.itemPost}>
          {props.message}<span> like: {props.like}</span>
      </div>
  )
};

export default Post;
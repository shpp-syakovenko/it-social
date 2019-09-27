import React from 'react'
import s from "../profile.module.css";


const AddPost = ({addPost, postText, updatePostText}) => {

    let newPostElement = React.createRef();

    const addPostElement = (event) => {
      event.preventDefault();
      addPost();

    };

    const onChangeText = () => {
        let text = newPostElement.current.value;
        updatePostText(text);
    };

  return(
      <div className={s.post}>
          <h3>My post</h3>
          <div className={s.newPost}>
              <form >
                  <textarea onChange={onChangeText} ref={newPostElement} name='postcomment' value={postText}/>
                  <button onClick={(event) => addPostElement(event)}>
                  Send</button>
              </form>
          </div>
      </div>
  )
};

export default AddPost;

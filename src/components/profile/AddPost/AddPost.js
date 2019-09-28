import React from 'react'
import s from "../profile.module.css";
import {addPostActionCreate, updatePostTextActionCreate} from "../../../redux/state";



const AddPost = ({dispatch, postText}) => {

    let newPostElement = React.createRef();

    const onChangeText = () => {
        let text = newPostElement.current.value;
        dispatch(updatePostTextActionCreate(text));
    };

    const addPostElement = (event) => {
        event.preventDefault();
        dispatch(addPostActionCreate());

    };

    return (
        <div className={s.post}>
            <h3>My post</h3>
            <div className={s.newPost}>
                <form>
                    <textarea onChange={onChangeText} ref={newPostElement} placeholder='Enter text...' name='postcomment' value={postText}/>
                    <button onClick={(event) => addPostElement(event)}>
                        Send
                    </button>
                </form>
            </div>
        </div>
    )
};

export default AddPost;

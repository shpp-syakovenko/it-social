import React from 'react'
import s from "../profile.module.css";
import ListPost from "../listPost/ListPost";


const AddPost = ({onChangeText, postText, addPostElement, postData}) => {
    return (
        <div>
            <div className={s.post}>
                <h3>My post</h3>
                <div className={s.newPost}>
                    <form>
                        <textarea onChange={(event) => onChangeText(event)} value={postText} placeholder='Enter text...' />
                        <button onClick={(event) => addPostElement(event)}>
                            Send
                        </button>
                    </form>
                </div>
            </div>
            <ListPost postData={postData}/>
        </div>

    )
};

export default AddPost;

import React from 'react'
import s from "../profile.module.css";
import ListPost from "../listPost/ListPost";
import reduxForm from "redux-form/es/immutable/reduxForm";
import Field from "redux-form/es/Field";
import {required, maxLengthCreator} from "../../../utils/validators/validator";
import {Textarea} from "../../elements/FormControls/FormControls";

const maxLength = maxLengthCreator(20);

const AddPost = ({addPostElement, postData}) => {

  const onSubmitForm = (formData) => {
    addPostElement(formData.postText);
  };
    return (
        <div>
            <div className={s.post}>
                <h3>My post</h3>
                <div className={s.newPost}>
                    <AddPostFormRedux onSubmit={onSubmitForm}/>
                </div>
            </div>
            <ListPost postData={postData}/>
        </div>

    )
};

const AddFormPost = ({handleSubmit}) => {
  return(
    <form onSubmit={handleSubmit}>
      <Field component={Textarea}
             name="postText"
             validate={[required, maxLength]}
             label="Enter text..."

      />
      <button>
        Send
      </button>
    </form>
  )
};

const AddPostFormRedux = reduxForm({form: "addPostForm"})(AddFormPost);

export default AddPost;

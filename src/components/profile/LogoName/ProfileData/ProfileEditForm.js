import React from "react";
import {Input, Textarea} from "../../../elements/FormControls/FormControls";
import {required} from "../../../../utils/validators/validator";
import {Field, reduxForm} from "redux-form";


const ProfileEditForm = ({handleSubmit, profile, error}) => {

  return (

  <form onSubmit={handleSubmit}>
      <div>
        Login:
        <Field component="input" type="text" name="fullName" validate={[required]}/>
      </div>
      <div>
        lookingForAJob:
        <Field component={Input} type="checkbox" name="lookingForAJob"/>
      </div>
      <div>
        lookingForAJobDescription:
        <Field component={Textarea} type={"text"} name="lookingForAJobDescription"/>
      </div>
      <div>
        aboutMe:
        <Field component={Textarea} type={"text"} name="aboutMe"/>
      </div>
      <h4>Contacts:</h4>
      {
        Object.keys(profile.contacts).map(value => {
          return (
            <div key={value}>
              {value}
              <Field component={Input} type={"text"} name={"contacts." + value}/>
            </div>
          )
        })
      }
      <div>
        {error ? <div style={{color: "red"}}>
            {error}
          </div>
          : ""}
        <button>Save</button>
      </div>
    </form>
  )
};

export default reduxForm({
  // a unique name for the form
  form: 'profileForm'
})(ProfileEditForm);

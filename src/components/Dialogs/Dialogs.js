import React from 'react'
import s from './dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import Field from "redux-form/es/Field";
import reduxForm from "redux-form/es/immutable/reduxForm";
import {Textarea} from "../elements/FormControls/FormControls";
import {maxLengthCreator, required} from "../../utils/validators/validator";


const maxLength = maxLengthCreator(30);


const Dialogs = ({dialogs, addMessageElement}) => {

  const onSubmitForm = (formData) => {
    addMessageElement(formData.messageText);
  };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {
                    dialogs.dialogsData.map(dialog => (
                        <DialogItem key={dialog.id} id={dialog.id} name={dialog.name}/>
                    ))
                }
            </div>
            <div className={s.messagesItem}>
                {
                    dialogs.messagesData.map(message => (
                        <Message key={message.id} id={message.id} text={message.message}/>
                    ))
                }
                <AddMessageFormRedux onSubmit={onSubmitForm} />
            </div>
        </div>
    )
};

const AddMessageForm = ({handleSubmit}) => {
  return (
    <form className={s.formAddMessage} onSubmit={handleSubmit}>
      <div className={s.messageText}>
        <Field component={Textarea}
               placeholder='Enter text...'
               name="messageText"
               validate={[required, maxLength]}
        />

      </div>
      <div className={s.messageAdd}>
        <button >
          Send
        </button>
      </div>
    </form>
  )
};

const AddMessageFormRedux = reduxForm({form: "dialogsAddMessageForm"})(AddMessageForm);

export default Dialogs;

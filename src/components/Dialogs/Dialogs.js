import React from 'react'
import s from './dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = ({dialogs, onChangeText, addMessageElement}) => {

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
                <div className={s.formAddMessage}>
                    <div className={s.messageText}>
                        <textarea onChange={(event) => onChangeText(event)} placeholder='Enter text...' value={dialogs.messageText}/>
                    </div>
                    <div className={s.messageAdd}>
                        <button onClick={(event) => addMessageElement(event)}>
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;

import React, {ChangeEvent, useState} from "react";
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Messages/Messages";
import {addMessageActionCreator, MessagesPageType} from "../../redux/state";

type DialogsPropsType = {
    messagesPage: MessagesPageType
    dispatch: (action: any) => void
}


const Dialogs = (props: DialogsPropsType) => {
    const [valueTextarea, setValueTextarea] = useState("")
    const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setValueTextarea(e.currentTarget.value)
    }

    const onClickHandler = () => {
        props.dispatch(addMessageActionCreator(valueTextarea))
        setValueTextarea("")
    }

    let dialogsElement = props.messagesPage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)

    let messagesElement = props.messagesPage.messages.map(message => <Messages message={message.message}/>)
    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                {dialogsElement}
            </div>
            <div className={style.messages}>
                {messagesElement}
                <div>
                    <div>
                        <textarea value={valueTextarea} onChange={onChange}/>

                    </div>
                    <div>
                        <button onClick={onClickHandler}>Add message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dialogs
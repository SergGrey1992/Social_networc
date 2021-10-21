import React from "react"
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Messages/Messages";
import {MessagesPageType} from "../../redux/store";
import style from "./Dialogs.module.css"
import DialogsMessageContainer from "./DialogsMessageContainer";

export type DialogsPropsType = {
  messagesPage: MessagesPageType
  newMessageText: string
  addMessage: () => void
  changeMessageText: (trimmedValue: string) => void
  auth: boolean
}


const Dialogs = (props: DialogsPropsType) => {
  let dialogsElement = props.messagesPage.dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>)

  let messagesElement = props.messagesPage.messages.map(message => <Messages key={message.id} message={message.message}/>)

  return (
    <div className={style.dialogs}>

      <div className={style.dialogItems}>
        {dialogsElement}
      </div>

      <div className={style.messages}>
        {messagesElement}
        <div>
          <div className={style.wrapperTextForm}>
            <DialogsMessageContainer/>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Dialogs
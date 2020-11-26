import React, {ChangeEvent, KeyboardEvent} from "react"
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Messages/Messages";
import {MessagesPageType} from "../../redux/store";
import style from "./Dialogs.module.css"


type DialogsPropsType = {
  messagesPage: MessagesPageType
  valueTextarea: string
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
  onClickHandlerButton: (e: KeyboardEvent<HTMLTextAreaElement>) => void
  onClickHandler: () => void
}


const Dialogs = (props: DialogsPropsType) => {
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
          <div className={style.wrapperTextForm}>
            <textarea value={props.valueTextarea}
                      onChange={props.onChange}
                      onKeyPress={props.onClickHandlerButton}/>
            <button onClick={props.onClickHandler}>Add message</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Dialogs
import React from "react";
import style from './../Dialogs.module.css';


type MessagesPropsType = {
  message: string
}
const Messages = (props: MessagesPropsType) => {
  return (
    <div>
      <div className={style.message}>{props.message}</div>
    </div>
  )
}

export default Messages
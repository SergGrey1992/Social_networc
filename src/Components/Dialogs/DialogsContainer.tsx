import React, {ChangeEvent, useState, KeyboardEvent} from "react"
import {MessagesPageType} from "../../redux/store";
import {addMessageActionCreator} from "../../redux/dialogs_reducer";
import Dialogs from "./Dialogs";


type DialogsPropsType = {
  messagesPage: MessagesPageType
  dispatch: (action: any) => void
}


export const DialogsContainer = (props: DialogsPropsType) => {
  const [valueTextarea, setValueTextarea] = useState("")
  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValueTextarea(e.currentTarget.value)
  }
  const onClickHandlerButton = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      onClickHandler()
    }
  }

  const onClickHandler = () => {
    const trimmedValue = valueTextarea.trim()
    props.dispatch(addMessageActionCreator(trimmedValue))
    setValueTextarea("")
  }

  return (<Dialogs valueTextarea={valueTextarea}
                   onChange={onChange}
                   onClickHandlerButton={onClickHandlerButton}
                   onClickHandler={onClickHandler}
                   messagesPage={props.messagesPage}
    />
  )
}

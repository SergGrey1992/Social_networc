import React, {ChangeEvent, useState, KeyboardEvent, Dispatch} from "react"
import {MessagesPageType} from "../../redux/store";
import {ActionType, addMessageActionCreator, changeMessageTextActionCreator} from "../../redux/dialogs_reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {RootStoreType} from "../../redux/redux_store";

const mapStateToProps = (state: RootStoreType) => {
  return {
    messagesPage: state.dialogsReducer,
    newMessageText: state.dialogsReducer.newMessageText
  }
  const mapDispatchToProps = (dispatch: Dispatch<ActionType>) => {
    return {
      addMessage: (trimmedValue: string) => {
        dispatch(addMessageActionCreator(trimmedValue))
      },
      changeMessageText: (trimmedValue: string) => {
        dispatch(changeMessageTextActionCreator(trimmedValue))
      }
    }
  }
  const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
  /*export default connect(mapStateToProps, mapDispatchToProps)(DialogsContainer)*/
}
export default DialogsContainer;


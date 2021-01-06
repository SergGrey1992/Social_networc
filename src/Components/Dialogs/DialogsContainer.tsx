import React, {Dispatch} from "react"
import {ActionType, addMessageActionCreator, changeMessageTextActionCreator} from "../../redux/dialogs_reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {RootStoreType} from "../../redux/redux_store";

const mapStateToProps = (state: RootStoreType) => {
  return {
    messagesPage: state.dialogsReducer,
    newMessageText: state.dialogsReducer.newMessageText,
    isAuth: state.auth.isAuth
  }
}
const mapDispatchToProps = (dispatch: Dispatch<ActionType>) => {
  return {
    addMessage: () => {
      dispatch(addMessageActionCreator())
    },
    changeMessageText: (trimmedValue: string) => {
      dispatch(changeMessageTextActionCreator(trimmedValue))
    }
  }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;


import React, {Dispatch} from "react"
import {ActionType, addMessage, changeMessageText} from "../../redux/dialogs_reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {RootStoreType} from "../../redux/redux_store";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import { compose } from "redux";

const mapStateToProps = (state: RootStoreType) => {
  return {
    messagesPage: state.dialogsReducer,
    newMessageText: state.dialogsReducer.newMessageText,
    auth: state.auth.isAuth
  }
}
const mapDispatchToProps = (dispatch: Dispatch<ActionType>) => {
  return {
    addMessage: () => {
      dispatch(addMessage())
    },
    changeMessageText: (trimmedValue: string) => {
      dispatch(changeMessageText(trimmedValue))
    }
  }
}

export default compose<React.ComponentType>(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);


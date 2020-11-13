import {addMessageActionCreator, DialogType, MessageType} from "./state";

const ADD_MESSAGE = "ADD_MESSAGE";

type ActionType = ReturnType<typeof addMessageActionCreator>

type InitialStateType = {
  messages: Array<MessageType>
  dialogs: Array<DialogType>
}


const dialogsReducer = (state: InitialStateType, action: ActionType): InitialStateType => {
  debugger
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, {id: 5, message: action.messageText}]
      }
    default:
      return state
  }
}
export default dialogsReducer;
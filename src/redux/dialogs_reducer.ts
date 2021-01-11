export const addMessageActionCreator = () => {
  return {type: ADD_MESSAGE} as const
}

export const changeMessageTextActionCreator = (valueTextarea: string) => {
  return {type: CHANGE_MESSAGE_TEXT, newMessageText: valueTextarea} as const
}

const CHANGE_MESSAGE_TEXT = "CHANGE_MESSAGE_TEXT"
const ADD_MESSAGE = "ADD_MESSAGE";

export type ActionType =
  ReturnType<typeof addMessageActionCreator> |
  ReturnType<typeof changeMessageTextActionCreator>

type DialogType = {
  id: number
  name: string
}
type MessageType = {
  id: number
  message: string
}

export type InitialStateType = {
  messages: Array<MessageType>
  dialogs: Array<DialogType>
  newMessageText: string
}

let initialState = {
  messages: [
    {id: 1, message: "HI, brother!"},
    {id: 2, message: "Wtf"},
    {id: 3, message: "I love you"},
    {id: 4, message: "Where is my money?"},
  ],
  dialogs: [
    {id: 1, name: "Dzimych"},
    {id: 2, name: "Sveta"},
    {id: 3, name: "Pasha"},
    {id: 4, name: "Gleb"},
    {id: 5, name: "Vika"}
  ],
  newMessageText: ''
}

const dialogsReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {

  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, {id: 5, message: state.newMessageText}],
        newMessageText: ''
      }
    case CHANGE_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.newMessageText
      }
    default:
      return state
  }
}
export default dialogsReducer;
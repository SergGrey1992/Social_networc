import { DialogType, MessageType} from "./store";

export const addMessageActionCreator = (valueTextarea: string) => {
  return {type: ADD_MESSAGE, messageText: valueTextarea} as const
}

const ADD_MESSAGE = "ADD_MESSAGE";

type ActionType = ReturnType<typeof addMessageActionCreator>

type InitialStateType = {
  messages: Array<MessageType>
  dialogs: Array<DialogType>
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
  ]
}


const dialogsReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
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
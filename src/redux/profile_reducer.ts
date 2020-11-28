import {PostType} from "./store";

const ADD_POST = "ADD_POST";
const CHANGE_POST_TEXT = "CHANGE_POST_TEXT";

export const addPostActionCreator = () => {
  return {type: ADD_POST} as const
}
export const changePostTextActionCreator = (valueTextarea: string) => {
  return {type: CHANGE_POST_TEXT, newPostText: valueTextarea} as const
}

export type ActionType =
  ReturnType<typeof addPostActionCreator> |
  ReturnType<typeof changePostTextActionCreator>

type InitialStateType = {
  posts: Array<PostType>
  newPostText: string
}

let initialState = {
  posts: [
    {id: 1, message: "My first post!", likesCount: 41},
    {id: 2, message: "Second post", likesCount: 22},
    {id: 3, message: 'I live React', likesCount: 31},
    {id: 4, message: "Awesome!!!", likesCount: 421}
  ],
  newPostText: ""
}

const profileReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
  debugger
  switch (action.type) {

    case "ADD_POST":
      return {
        ...state,
        posts: [ ...state.posts, {id: 5, message: state.newPostText, likesCount: 0} ]
      }

    case CHANGE_POST_TEXT:
      return {
        ...state,
        newPostText: action.newPostText
      }
    default:
      return state
  }
}
export default profileReducer;
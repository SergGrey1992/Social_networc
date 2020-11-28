import {PostType} from "./store";

export const addPostActionCreator = (valueTextarea: string) => {
  return {type: ADD_POST, postMessage: valueTextarea} as const
}
export const changePostTextActionCreator = (valueTextarea: string) => {
  return {type: CHANGE_POST_TEXT, newPostText: valueTextarea} as const
}

const CHANGE_POST_TEXT = "CHANGE_POST_TEXT";
const ADD_POST = "ADD_POST";

type ActionType =
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
  switch (action.type) {
    case ADD_POST: {
      let newPost = {id: 5, message: action.postMessage, likesCount: 0}
      state.posts.push(newPost);
    return state
    }
    case CHANGE_POST_TEXT:
      return{
      ...state,
        newPostText: action.newPostText
    }
  }
  return state
}
export default profileReducer;
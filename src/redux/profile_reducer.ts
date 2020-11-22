import { PostType } from "./store";

export const addPostActionCreator = (valueTextarea: string) => {
  return {type: ADD_POST, postMessage: valueTextarea}
}

const ADD_POST = "ADD_POST";
type ActionType = ReturnType<typeof addPostActionCreator>

type InitialStateType  = {
  posts:Array<PostType>
}

let initialState = {
      posts: [
        {id: 1, message: "My first post!", likesCount: 41},
        {id: 2, message: "Second post", likesCount: 22},
        {id: 3, message: 'I live React', likesCount: 31},
        {id: 4, message: "Awesome!!!", likesCount: 421}],
    }

const profileReducer = (state: InitialStateType = initialState, action: ActionType) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {id: 5, message: action.postMessage, likesCount: 0}
      state.posts.push(newPost);
      return state
  }
    return state
  }
export default profileReducer;
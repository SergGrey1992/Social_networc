import {addPostActionCreator, PostType } from "./state";

const ADD_POST = "ADD_POST";
type ActionType = ReturnType<typeof addPostActionCreator>

type InitialStateType  = {
  posts:Array<PostType>
}

const profileReducer = (state: InitialStateType, action: ActionType) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {id: 5, message: action.postMessage, likesCount: 0}
      state.posts.push(newPost);
      return state
  }
    return state
  }
export default profileReducer;
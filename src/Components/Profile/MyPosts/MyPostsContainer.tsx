import React, {Dispatch} from 'react';
import {PostType} from '../../../redux/store';
import {addPostActionCreator, changePostTextActionCreator} from "../../../redux/profile_reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {RootStoreType} from "../../../redux/redux_store";

type MSTPType = {
  posts: Array<PostType>
  newPostText: string
}

type MDTPType = {
  addPostActionCreator: () => void
  changePostText: (text: string) => void
}



const mapDispatchToProps = (dispatch: Dispatch<any>): MDTPType => {
  return {
    addPostActionCreator: () => {
      dispatch(addPostActionCreator())
    },
    changePostText: (text: string) => {
      dispatch(changePostTextActionCreator(text))
    }
  }
}

const mapStateToProps = (state: RootStoreType): MSTPType => {
  return {
    posts: state.profileReducer.posts,
    newPostText: state.profileReducer.newPostText
  }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


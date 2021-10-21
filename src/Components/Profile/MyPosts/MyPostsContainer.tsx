import React from 'react';
import {PostType} from '../../../redux/store';
import {addPost, changePostText} from "../../../redux/profile_reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {RootStoreType} from "../../../redux/redux_store";

type MSTPType = {
  posts: Array<PostType>
  newPostText: string
}

const mapStateToProps = (state: RootStoreType): MSTPType => {
  return {
    posts: state.profileReducer.posts,
    newPostText: state.profileReducer.newPostText
  }
}

export const MyPostsContainer = connect(mapStateToProps, {changePostText, addPost})(MyPosts)


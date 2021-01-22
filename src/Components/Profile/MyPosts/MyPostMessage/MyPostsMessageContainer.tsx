import React from "react";
import {RootStoreType} from "../../../../redux/redux_store";
import {connect} from "react-redux";
import {MyPostsMessageTextarea} from "./MyPostsMessageTextarea";
import {addPost} from "../../../../redux/profile_reducer";

const mapStateToProps = (state: RootStoreType) => ({
	posts: state.profileReducer.posts,
	newPostText: state.profileReducer.newPostText
})



export default connect(mapStateToProps, {addPost})(MyPostsMessageTextarea)
import React from 'react';
import style from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostType} from '../../../redux/store';
import MyPostsMessageContainer from "./MyPostMessage/MyPostsMessageContainer";


type MyPostsPropsType={
  newPostText: string
  posts:PostType[]
  changePostText: (text: string) => void
  addPost: (formData: string) => void
}

export const MyPosts = (props:MyPostsPropsType) => {
  let postsElement = props.posts.map(post => <Post key={post.id} message={post.message} likesCount={post.likesCount}/>)

  return <div className={style.wrapperItem}>
    <h3 className={style.styleH3}>----My posts----</h3>
    <div className={style.postAdding}>
    <MyPostsMessageContainer/>
    </div>
    {postsElement}
  </div>
}


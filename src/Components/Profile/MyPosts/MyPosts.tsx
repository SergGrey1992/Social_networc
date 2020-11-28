import React, { ChangeEvent, KeyboardEvent } from 'react';
import style from './MyPosts.module.css';
import Post from "./Post/Post";
import { PostType} from '../../../redux/store';

type MyPostsPropsType={
  newPostText: string
  posts:PostType[]
  changePostText: (text: string) => void
  addPostActionCreator: () => void
}

export const MyPosts = (props:MyPostsPropsType) => {
  let postsElement = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount}/>)

  let onNewPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let body = e.currentTarget.value
    props.changePostText(body)
  }



  return <div className={style.wrapperItem}>
    <h3 className={style.styleH3}>----My posts----</h3>
    <div className={style.postAdding}>
      <textarea value={props.newPostText}

                onChange={onNewPostChange}
                placeholder={"Накарябай пост =)"}/>
      <button onClick={props.addPostActionCreator}>Add post</button>
    </div>
    {postsElement}
  </div>
}


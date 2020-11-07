import React, {ChangeEvent, useState} from 'react';
import style from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, PostType} from '../../../redux/state';


type MyPostsPropsType={
  posts:PostType[]
  dispatch: (action: any) => void
}


export const MyPosts = (props:MyPostsPropsType) => {

  let postsElement = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount}/>)

  const [valueTextarea, setValueTextarea] = useState("")

  const changeTextarea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValueTextarea(e.currentTarget.value)
  }

  const onClickButton = () => {
    debugger
    props.dispatch(addPostActionCreator(valueTextarea))
    setValueTextarea("")
  }

  return <div className={style.item}>
    <h3>My posts</h3>
    <div className={style.postAdding}>
      <textarea value={valueTextarea} onChange={changeTextarea}/>
      <button onClick={onClickButton}>Add post</button>
    </div>
    {postsElement}
  </div>
}


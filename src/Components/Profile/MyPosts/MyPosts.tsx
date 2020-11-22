import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import style from './MyPosts.module.css';
import Post from "./Post/Post";
import { PostType} from '../../../redux/store';
import {addPostActionCreator} from "../../../redux/profile_reducer";


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

  const onClickHandlerButton = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      onClickButton()
    }
  }

  const onClickButton = () => {
    props.dispatch(addPostActionCreator(valueTextarea))
    setValueTextarea("")
  }

  return <div className={style.wrapperItem}>
    <h3 className={style.styleH3}>----My posts----</h3>
    <div className={style.postAdding}>
      <textarea value={valueTextarea}
                onKeyPress={onClickHandlerButton}
                onChange={changeTextarea}
                placeholder={"Накарябай пост =)"}/>
      <button onClick={onClickButton}>Add post</button>
    </div>
    {postsElement}
  </div>
}


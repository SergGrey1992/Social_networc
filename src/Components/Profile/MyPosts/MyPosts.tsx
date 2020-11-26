import React, { ChangeEvent, KeyboardEvent } from 'react';
import style from './MyPosts.module.css';
import Post from "./Post/Post";
import { PostType} from '../../../redux/store';

type MyPostsPropsType={
  valueTextarea: string
  changeTextarea: (e: ChangeEvent<HTMLTextAreaElement>) => void
  onClickHandlerButton: (e: KeyboardEvent<HTMLTextAreaElement>) => void
  onClickButton: () => void
  posts:PostType[]
}

export const MyPosts = (props:MyPostsPropsType) => {
  let postsElement = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount}/>)

  return <div className={style.wrapperItem}>
    <h3 className={style.styleH3}>----My posts----</h3>
    <div className={style.postAdding}>
      <textarea value={props.valueTextarea}
                onKeyPress={props.onClickHandlerButton}
                onChange={props.changeTextarea}
                placeholder={"Накарябай пост =)"}/>
      <button onClick={props.onClickButton}>Add post</button>
    </div>
    {postsElement}
  </div>
}


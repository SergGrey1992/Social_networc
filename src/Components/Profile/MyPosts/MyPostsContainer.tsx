import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import { PostType} from '../../../redux/store';
import {addPostActionCreator} from "../../../redux/profile_reducer";
import {MyPosts} from "./MyPosts";


type MyPostsContainerPropsType={
  posts:PostType[]
  dispatch: (action: any) => void
}

export const MyPostsContainer = (props:MyPostsContainerPropsType) => {

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

  return <MyPosts valueTextarea={valueTextarea}
                  changeTextarea={changeTextarea}
                  onClickHandlerButton={onClickHandlerButton}
                  onClickButton={onClickButton}
                  posts={props.posts}
  />
}


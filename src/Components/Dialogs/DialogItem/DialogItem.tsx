import React from "react";
import {NavLink} from "react-router-dom";
import style from "./DialogItem.module.css"

type DialogItemPropsType = {
  name: string
  id: number
}


const DialogItem = (props: DialogItemPropsType) => {
  return (
    <div className={style.wrapperName}>
      <NavLink activeClassName={style.activeLink}  to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
  )
}

export default DialogItem
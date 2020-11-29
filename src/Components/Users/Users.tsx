import React from 'react';
import {usersType} from "../../redux/users_reducer";
import style from "./Users.module.css"

type usersPropsType = {
  users: Array<usersType>
  follow: (userID: number) => void
  unFollow: (userID: number) => void
  setUsers: (users: any) => void
}

export const Users = (props: usersPropsType) => {
  return(
    <div>
      {
        props.users.map( users => <div key={users.id} >
          <span>
            <div>
              <img className={style.stylePhoto} src={users.photoUrl} alt=""/>
            </div>
            <div>
              { users.followed //true
                ? <button onClick={ () => { props.unFollow(users.id) } } >Follow</button>
                : <button onClick={ () => { props.follow(users.id) } } >UnFollow</button> }
            </div>
          </span>

          <span>
            <span>
              <div>
                {users.fullName}
              </div>
              <div>
                {users.status}
            </div>
            </span>
            <span>
              <div>{users.location.country}</div>
              <div>{users.location.city}</div>
            </span>
          </span>
        </div> )
      }
    </div>
  )
}
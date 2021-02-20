import React, {FC} from 'react';
import style from "./Users.module.css";
import userPhoto from "../../assect/user_Photo.jpg";
import {usersType} from "../../redux/users_reducer";
import {NavLink} from "react-router-dom";

type UserPropsType = {
	user: usersType
	follow: (userID: number) => void
	unFollow: (userID: number) => void
	followingInProgress: Array<number>
}
export const User: FC<UserPropsType> = ({user, follow, unFollow, followingInProgress}) => {
return (
	<div>
          <span>
            <div>
							<NavLink to={'/profile/' + user.id}>
								<img className={style.stylePhoto} src={user.photos.small != null ? user.photos.small : userPhoto}
										 alt="#"/>
							</NavLink>

            </div>
            <div>
              {
								user.followed
									? <button disabled={followingInProgress.some(id => id === user.id)}
														onClick={() => {
															unFollow(user.id)
														}}>
										UnFollow</button>
									: <button disabled={followingInProgress.some(id => id === user.id)}
														onClick={() => {
															follow(user.id)
														}}>
										Follow</button>
							}
            </div>
          </span>
		<span>
            <span>
              <div>
                {user.name}
              </div>
              <div>
                {user.status}
            </div>
            </span>
          </span>
	</div>
)
}
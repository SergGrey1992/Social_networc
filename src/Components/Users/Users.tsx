import React from 'react';
import style from "./Users.module.css";
import userPhoto from "../../assect/user_Photo.jpg";
import {usersType} from "../../redux/users_reducer";
import {NavLink} from "react-router-dom";

type UsersPropsType = {
	totalUsersCount: number
	pageSize: number
	currentPage: number
	onPageChanged: (currentPageNumber: number) => void
	users: Array<usersType>
	follow: (userID: number) => void
	unFollow: (userID: number) => void
}
export const Users = (props: UsersPropsType) => {
	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
	let pages = []
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}
	return (
		<div>
			<div>
				{pages.map(p => {
					return <span className={props.currentPage === p ? style.selectedPage : ""}
											 onClick={() => {
												 props.onPageChanged(p)
											 }}
					>{p}</span>
				})}
			</div>
			{
				props.users.map(users => <div key={users.id}>
          <span>
            <div>
							<NavLink to={'/profile/' + users.id}>
								<img className={style.stylePhoto} src={users.photos.small != null ? users.photos.small : userPhoto}
										 alt="#"/>
							</NavLink>

            </div>
            <div>
              {users.followed
								? <button onClick={() => {
									props.unFollow(users.id)
								}}>UnFollow</button>
								: <button onClick={() => {
									props.follow(users.id)
								}}>Follow</button>}
            </div>
          </span>
					<span>
            <span>
              <div>
                {users.name}
              </div>
              <div>
                {users.status}
            </div>
            </span>
						{/*<span>
              <div>{users.location.country}</div>
              <div>{users.location.city}</div>
            </span>*/}
          </span>
				</div>)
			}
		</div>
	)
}
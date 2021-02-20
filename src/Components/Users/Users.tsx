import React from 'react';
import style from "./Users.module.css";
import userPhoto from "../../assect/user_Photo.jpg";
import {usersType} from "../../redux/users_reducer";
import {NavLink} from "react-router-dom";
import {Paginator} from '../../common/Paginator/Paginator';
import {User} from "./User";

type UsersPropsType = {
	totalUsersCount: number
	pageSize: number
	currentPage: number
	onPageChanged: (currentPageNumber: number) => void
	users: Array<usersType>
	follow: (userID: number) => void
	unFollow: (userID: number) => void
	followingInProgress: Array<number>
	toggleFollowingProgress: (isFetching: boolean, userID: number) => void
}
export const Users = (props: UsersPropsType) => {
	return (
		<div>
			<Paginator currentPage={props.currentPage}
								 onPageChanged={props.onPageChanged}
								 totalUsersCount={props.totalUsersCount}
								 pageSize={props.pageSize}
			/>
			{
				props.users.map(users => <User key={users.id} user={users} follow={props.follow} unFollow={props.unFollow}
																			 followingInProgress={props.followingInProgress}/>)
			}
		</div>
	)
}
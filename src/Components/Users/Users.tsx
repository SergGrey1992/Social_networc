import React from 'react';
import {usersType} from "../../redux/users_reducer";
import {Paginator} from '../../common/Paginator/Paginator';
import {User} from "./User";

type UsersPropsType = {
	totalUsersCount: number
	pageSize: number
	currentPage: number
	onPageChanged: (currentPageNumber: number) => void
	users: Array<usersType>
	portionSize: number
	setCurrentPage: (pageNumber: number) => void
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
								 portionSize={props.portionSize}
								 setCurrentPage={props.setCurrentPage}
			/>
			{
				props.users.map(users => <User key={users.id} user={users} follow={props.follow} unFollow={props.unFollow}
																			 followingInProgress={props.followingInProgress}/>)
			}
		</div>
	)
}
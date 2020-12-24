import React from 'react';
import {connect} from "react-redux";
import {RootStoreType} from "../../redux/redux_store";
import {
	follow,
	setCurrentPage,
	setTotalCount,
	setUsers, toggleFollowingProgress,
	toggleIsFetching,
	unFollow,
	usersType
} from "../../redux/users_reducer";
import {Users} from "./Users";
import {PreLoader} from "../../common/PreLoader/PreLoader";
import {usersAPI} from '../../api/api';

type usersPropsType = {
	users: Array<usersType>
	pageSize: number
	totalUsersCount: number
	currentPage: number
	follow: (userID: number) => void
	unFollow: (userID: number) => void
	setUsers: (users: Array<usersType>) => void
	setCurrentPage: (currentPageNumber: number) => void
	setTotalCount: (totalCount: number) => void
	isFetching: boolean
	followingInProgress: Array<number>
	toggleFollowingProgress: (isFetching: boolean, userID:number) => void
	toggleIsFetching: (isFetching: boolean) => void
}
class UsersContainer extends React.Component<usersPropsType, {}> {
	componentDidMount() {
		this.props.toggleIsFetching(true)

		usersAPI.getUsers(this.props.currentPage,  this.props.pageSize).then(data => {
					this.props.toggleIsFetching(false)
					this.props.setUsers(data.items)
					this.props.setTotalCount(data.totalCount)
				}
			)
	}

	onPageChanged = (currentPageNumber: number) => {
		this.props.setCurrentPage(currentPageNumber)
		this.props.toggleIsFetching(true)

		usersAPI.getUsers(currentPageNumber, this.props.pageSize).then(data => {
					this.props.toggleIsFetching(false)
					this.props.setUsers(data.items)
				}
			)
	}

	render() {
		return <>
			{this.props.isFetching ? <PreLoader/> : null}
			<Users totalUsersCount={this.props.totalUsersCount}
						 pageSize={this.props.pageSize}
						 currentPage={this.props.currentPage}
						 onPageChanged={this.onPageChanged}
						 users={this.props.users}
						 follow={this.props.follow}
						 unFollow={this.props.unFollow}
						 followingInProgress={this.props.followingInProgress}
						 toggleFollowingProgress={this.props.toggleFollowingProgress}
			/>
		</>
	}
}

const mapStateToProps = (state: RootStoreType) => {
	return {
		users: state.usersReducer.users,
		pageSize: state.usersReducer.pageSize,
		totalUsersCount: state.usersReducer.totalUsersCount,
		currentPage: state.usersReducer.currentPage,
		isFetching: state.usersReducer.isFetching,
		followingInProgress: state.usersReducer.followingInProgress
	}
}
export default connect(mapStateToProps, {
		follow,
		unFollow,
		setUsers,
		setCurrentPage,
		setTotalCount,
		toggleIsFetching,
		toggleFollowingProgress
	}
)(UsersContainer)
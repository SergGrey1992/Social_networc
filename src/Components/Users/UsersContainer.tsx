import React from 'react';
import {connect} from "react-redux";
import {RootStoreType} from "../../redux/redux_store";
import {
	followSuccess,
	getUsers,
	setCurrentPage,
	toggleFollowingProgress,
	unFollowSuccess,
	usersType
} from "../../redux/users_reducer";
import {Users} from "./Users";
import {PreLoader} from "../../common/PreLoader/PreLoader";
import {
	getCurrentPageSelector,
	getFollowingInProgressSelector,
	getIsFetchingSelector,
	getPageSizeSelector,
	getTotalUsersCountSelector,
	getUsersSuperSelector
} from '../../redux/users_selectors';

type usersPropsType = {
	users: Array<usersType>
	pageSize: number
	totalUsersCount: number
	currentPage: number
	followSuccess: (userID: number) => void
	unFollowSuccess: (userID: number) => void
	setCurrentPage: (currentPageNumber: number) => void
	isFetching: boolean
	followingInProgress: Array<number>
	toggleFollowingProgress: (isFetching: boolean, userID: number) => void
	getUsers: (currentPage: number, pageSize: number) => void
}

class UsersContainer extends React.Component<usersPropsType, {}> {
	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize)
	}

	onPageChanged = (currentPageNumber: number) => {
		this.props.getUsers(currentPageNumber, this.props.pageSize)
	}

	render() {
		return <>
			{this.props.isFetching ? <PreLoader/> : null}
			<Users totalUsersCount={this.props.totalUsersCount}
						 pageSize={this.props.pageSize}
						 currentPage={this.props.currentPage}
						 onPageChanged={this.onPageChanged}
						 users={this.props.users}
						 followSuccess={this.props.followSuccess}
						 unFollowSuccess={this.props.unFollowSuccess}
						 followingInProgress={this.props.followingInProgress}
						 toggleFollowingProgress={this.props.toggleFollowingProgress}
			/>
		</>
	}
}
/*
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
*/

const mapStateToProps = (state: RootStoreType) => {
	return {
		users: getUsersSuperSelector(state),
		pageSize: getPageSizeSelector(state),
		totalUsersCount: getTotalUsersCountSelector(state),
		currentPage: getCurrentPageSelector(state),
		isFetching: getIsFetchingSelector(state),
		followingInProgress: getFollowingInProgressSelector(state)
	}
}

export default connect(mapStateToProps, {
		followSuccess,
		unFollowSuccess,
		setCurrentPage,
		toggleFollowingProgress,
		getUsers
	}
)(UsersContainer)
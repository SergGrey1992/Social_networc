import React from 'react';
import {connect} from "react-redux";
import {RootStoreType} from "../../redux/redux_store";
import {
	follow,
	getUsers,
	setCurrentPage,
	toggleFollowingProgress,
	unFollow,
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
	portionSize: number
	follow: (userID: number) => void
	unFollow: (userID: number) => void
	setCurrentPage: (currentPageNumber: number) => void
	isFetching: boolean
	followingInProgress: Array<number>
	toggleFollowingProgress: (isFetching: boolean, userID: number) => void
	getUsers: (currentPage: number, pageSize: number) => void
}

class UsersContainer extends React.Component<usersPropsType, {}> {
	componentDidMount() {
		const {currentPage, pageSize} = this.props
		this.props.getUsers(currentPage, pageSize)
	}

	onPageChanged = (currentPageNumber: number) => {
		const {pageSize} = this.props
		this.props.getUsers(currentPageNumber, pageSize)
	}


	setCurrentPage = (pageNumber: number) => {
		const {setCurrentPage, getUsers, pageSize} = this.props;
		setCurrentPage(pageNumber);
		getUsers(pageNumber, pageSize);
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
						 portionSize={this.props.portionSize}
						 setCurrentPage={this.setCurrentPage}
			/>
		</>
	}
}

const mapStateToProps = (state: RootStoreType) => {
	return {
		users: getUsersSuperSelector(state),
		pageSize: getPageSizeSelector(state),
		totalUsersCount: getTotalUsersCountSelector(state),
		currentPage: getCurrentPageSelector(state),
		portionSize: state.usersReducer.portionSize,
		isFetching: getIsFetchingSelector(state),
		followingInProgress: getFollowingInProgressSelector(state)
	}
}

export default connect(mapStateToProps, {
		follow,
		unFollow,
		setCurrentPage,
		toggleFollowingProgress,
		getUsers
	}
)(UsersContainer)
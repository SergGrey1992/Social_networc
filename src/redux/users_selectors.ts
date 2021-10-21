import {RootStoreType} from "./redux_store";
import {createSelector} from "reselect";

export const getUsersSelector = (state: RootStoreType) => {
	return state.usersReducer.users
}
// export const getUsersSelectorFilter = (state: RootStoreType) => {
// 	return getUsersSelector(state).filter(u => true)
// }
export const getUsersSuperSelector = createSelector(getUsersSelector,
	( users) => {
	return  users.filter(u => true)
})
export const getPageSizeSelector = (state: RootStoreType) => {
	return state.usersReducer.pageSize
}
export const getTotalUsersCountSelector = (state: RootStoreType) => {
	return state.usersReducer.totalUsersCount
}
export const getCurrentPageSelector = (state: RootStoreType) => {
	return state.usersReducer.currentPage
}
export const getIsFetchingSelector = (state: RootStoreType) => {
	return state.usersReducer.isFetching
}
export const getFollowingInProgressSelector = (state: RootStoreType) => {
	return state.usersReducer.followingInProgress
}
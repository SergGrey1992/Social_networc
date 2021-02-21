import {usersAPI} from "../api/api";
import {Dispatch} from "redux";
import {updateObjInArray} from "../utils/objects_helper/objects_helper";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const TOGGELE_IS_FETCHING = "TOGGELE_IS_FETCHING";
const TOGGELE_IS_FOLLOWING_PROGRESS = "TOGGELE_IS_FOLLOWING_PROGRESS";
export const followSuccess = (userID: number) => {
	return {type: FOLLOW, userID} as const
}
export const unFollowSuccess = (userID: number) => {
	return {type: UNFOLLOW, userID} as const
}
export const setUsers = (users: Array<usersType>) => {
	return {type: SET_USERS, users} as const
}
export const setCurrentPage = (currentPageNumber: number) => {
	return {type: SET_CURRENT_PAGE, currentPageNumber} as const
}
export const setTotalCount = (totalCount: number) => {
	return {type: SET_TOTAL_COUNT, totalCount} as const
}
export const toggleIsFetching = (isFetching: boolean) => {
	return {type: TOGGELE_IS_FETCHING, isFetching} as const
}
export const toggleFollowingProgress = (isFetching: boolean, userID: number) => {
	return {type: TOGGELE_IS_FOLLOWING_PROGRESS, isFetching, userID} as const
}
export const getUsers = (currentPage: number, pageSize: number) => async (dispatch: Dispatch) => {
	dispatch(toggleIsFetching(true))
	dispatch(setCurrentPage(currentPage))
	let data = await usersAPI.getUsers(currentPage, pageSize)
	dispatch(toggleIsFetching(false))
	dispatch(setUsers(data.items))
	dispatch(setTotalCount(data.totalCount))
}
const followUnfollowFlow = async (dispatch: Dispatch,
																	usersID: number,
																	apiMethod: any,
																	actionCreator: any
) => {
	dispatch(toggleFollowingProgress(true, usersID))
	let data = await apiMethod(usersID)
	if (data.resultCode === 0) {
		dispatch(actionCreator(usersID))
	}
	dispatch(toggleFollowingProgress(false, usersID))
}
//1 option
export const follow = (usersID: number) => async (dispatch: Dispatch) => {
	let apiMethod = usersAPI.followedUser.bind(usersAPI)
	let actionCreator = followSuccess
	await followUnfollowFlow(dispatch, usersID, apiMethod, actionCreator)
}
//2 option
export const unFollow = (usersID: number) => async (dispatch: Dispatch) => {
	await followUnfollowFlow(dispatch, usersID, usersAPI.unFollowedUser.bind(usersAPI), unFollowSuccess)
}
export type ActionType =
	ReturnType<typeof setUsers> |
	ReturnType<typeof followSuccess> |
	ReturnType<typeof unFollowSuccess> |
	ReturnType<typeof setCurrentPage> |
	ReturnType<typeof setTotalCount> |
	ReturnType<typeof toggleIsFetching> |
	ReturnType<typeof toggleFollowingProgress>
export type usersType = {
	name: string
	id: number
	photos: photosType
	status: string | null
	followed: boolean
}
type photosType = {
	small: string | null
	large: string | null
}
export type InitialStateType = {
	users: Array<usersType>
	pageSize: number
	totalUsersCount: number
	currentPage: number
	portionSize: number
	isFetching: boolean
	followingInProgress: Array<number>
}
let initialState: InitialStateType = {
	users: [],
	pageSize: 20,
	totalUsersCount: 20,
	currentPage: 1,
	portionSize: 10,
	isFetching: false,
	followingInProgress: []
}
const usersReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: updateObjInArray(state.users, action.userID, 'id', {followed: true})

			}
		case UNFOLLOW:
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userID) {
						return {...u, followed: false}
					}
					return u
				})
			}
		case SET_USERS:
			return {
				...state, users: action.users
			}
		case SET_CURRENT_PAGE:
			return {
				...state, currentPage: action.currentPageNumber
			}
		case SET_TOTAL_COUNT:
			return {
				...state, totalUsersCount: action.totalCount
			}
		case TOGGELE_IS_FETCHING:
			return {
				...state, isFetching: action.isFetching
			}
		case TOGGELE_IS_FOLLOWING_PROGRESS:
			return {
				...state,
				followingInProgress: action.isFetching
					? [...state.followingInProgress, action.userID]
					: state.followingInProgress.filter(id => id !== action.userID)
			}
		default:
			return state
	}
}
export default usersReducer;
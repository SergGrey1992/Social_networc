const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
export const followAC = (userID: number) => {
	return {type: FOLLOW, userID} as const
}
export const unFollowAC = (userID: number) => {
	return {type: UNFOLLOW, userID} as const
}
export const setUsersAC = (users: Array<usersType>) => {
	return {type: SET_USERS, users} as const
}
export const setCurrentPageAC = (currentPageNumber: number) => {
	return {type: SET_CURRENT_PAGE, currentPageNumber} as const
}
export const setTotalCountAC = (totalCount: number) => {
	return {type: SET_TOTAL_COUNT, totalCount} as const
}
export type ActionType =
	ReturnType<typeof setUsersAC> |
	ReturnType<typeof followAC> |
	ReturnType<typeof unFollowAC> |
	ReturnType<typeof setCurrentPageAC> |
	ReturnType<typeof setTotalCountAC>
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
}
let initialState: InitialStateType = {
	users: [],
	pageSize: 20,
	totalUsersCount: 20,
	currentPage: 1
}
const usersReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userID) {
						return {...u, followed: true}
					}
					return u
				})
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
		default:
			return state
	}
}
export default usersReducer;
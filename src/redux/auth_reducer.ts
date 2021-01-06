import {Dispatch} from "redux";
import {authAPI} from "../api/api";

const SET_USER_DATA = "SET_USER_DATA"

export const setUserData = (userId: number | null, email: string | null, login: string | null) => {
	return {type: SET_USER_DATA, data: {userId, email, login} } as const
}
export const getAuthUserData = () => {
	return (dispatch: Dispatch) => {
		authAPI.me()
			.then(response => {
				if (response.data.resultCode === 0) {
					let {userId, email, login} = response.data.data
					dispatch(setUserData(userId, email, login))
				}
			})
	}
}

export type ActionType =
	ReturnType<typeof setUserData>

export type InitialStateType = {
	userId: number | null
	email: string | null
	login: string | null
	isAuth: boolean
}
let initialState: InitialStateType = {
	userId: null,
	email: null,
	login: null,
	isAuth: false
}
const authReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
	switch (action.type) {
		case SET_USER_DATA: {
			return {
				...state,
				...action.data,
				isAuth: true
			}
		}
		default:
			return state
	}
}
export default authReducer;
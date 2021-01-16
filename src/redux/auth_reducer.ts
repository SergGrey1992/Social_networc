import {Dispatch} from "redux";
import { ThunkDispatch } from "redux-thunk";
import {authAPI} from "../api/api";
import {formDataType} from "../Components/Login/Login";
import { RootStoreType } from "./redux_store";

const SET_USER_DATA = "SET_USER_DATA"
const LOGIN_ME = "LOGIN_ME"
const ERROR_MESSAGE = "ERROR_MESSAGE"

export const setUserData = (userId: number | null, email: string | null, login: string | null) => {
	return {type: SET_USER_DATA, data: {userId, email, login} } as const}
export const loginMe = () => ({type: LOGIN_ME,   }as const)
export const setError = (messError: string) => ({type: ERROR_MESSAGE, messError }as const)

export const getAuthUserData = () => {
	return (dispatch: Dispatch) => {
		authAPI.me()
			.then(response => {
				if (response.data.resultCode === 0) {
					let {id, email, login} = response.data.data
					dispatch(setUserData(id, email, login))
				}
			})
	}
}
export const getLoginMe = (formData: formDataType) => {
	return (dispatch: ThunkDispatch< RootStoreType, {}, ReturnType<typeof setError> >) => {
		authAPI.login(formData)
			.then( (res)=> {
				if (res.data.resultCode === 1) {
					//let messError = res.data.messages[0]
					let messError = res.data.messages[0]
					dispatch(setError(messError))
					console.log(res.data.messages)
				}
				if(res.data.resultCode === 0) {
					//let {userId} = res.data.data
					dispatch(getAuthUserData())
				}
			})
	}
}

export type ActionType =
	ReturnType<typeof setUserData> |
	ReturnType<typeof setError> |
	ReturnType<typeof loginMe>

export type InitialStateType = {
	userId: number | null
	email: string | null
	login: string | null
	isAuth: boolean
	errorMessages: string
	isError: boolean
}
let initialState: InitialStateType = {
	userId: null,
	email: null,
	login: null,
	isAuth: false,
	errorMessages: '',
	isError: false
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
		case ERROR_MESSAGE : {
			return {
				...state,
				isError: true,
				errorMessages: action.messError
			}
		}
		default:
			return state
	}
}
export default authReducer;
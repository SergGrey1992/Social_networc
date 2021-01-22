import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = "ADD_POST";
const CHANGE_POST_TEXT = "CHANGE_POST_TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const UPDATE_STATUS = "UPDATE_STATUS";
export const addPost = (formData: string) => {
	return {type: ADD_POST, formData} as const
}
export const changePostText = (valueTextarea: string) => {
	return {type: CHANGE_POST_TEXT, newPostText: valueTextarea} as const
}
export const setUserProfile = (profile: any) => {
	return {type: SET_USER_PROFILE, profile} as const
}
export const setUserStatus = (status: string) => {
	return {type: SET_STATUS, status} as const
}
export const updateUserStatus = (status: string) => {
	return {type: UPDATE_STATUS, status} as const
}
export const getProfile = (userId: string) => {
	return (dispatch: Dispatch) => {
		usersAPI.getProfile(userId).then(data => {
			dispatch(setUserProfile(data))
		})
	}
}
export const getStatus = (userId: string) => {
	return (dispatch: Dispatch) => {
		profileAPI.getStatus(userId).then(res => {
			dispatch(setUserStatus(res.data))
		})
	}
}
export const updateStatus = (status: string) => {
	return (dispatch: Dispatch) => {
		profileAPI.updateStatus(status)
			.then(res => {
				if (res.data.resultCode === 0) {
					debugger
					dispatch(setUserStatus(status))
				}
			})
	}
}
export type ActionType =
	ReturnType<typeof addPost> |
	ReturnType<typeof changePostText> |
	ReturnType<typeof setUserProfile> |
	ReturnType<typeof updateUserStatus> |
	ReturnType<typeof setUserStatus>
type PostType = {
	id: number
	message: string
	likesCount: number
}
export type ProfilePageTypeAPI = {
	aboutMe: string
	contacts: ContactsType
	lookingForAJob: boolean
	lookingForAJobDescription: string
	fullName: string
	userId: number
	photos: PhotosType
}
type ContactsType = {
	facebook: string
	website: null
	vk: string
	twitter: string
	instagram: string
	youtube: null
	github: string
	mainLink: null
}
type PhotosType = {
	small: string | null
	large: string | null
}
type InitialStateType = {
	posts: Array<PostType>
	newPostText: string
	profile: Array<ProfilePageTypeAPI>
	status: string
}
let initialState: InitialStateType = {
	posts: [
		{id: 1, message: "My first post!", likesCount: 41},
		{id: 2, message: "Second post", likesCount: 22},
		{id: 3, message: 'I live React', likesCount: 31},
		{id: 4, message: "Awesome!!!", likesCount: 421}
	],
	newPostText: "",
	profile: [],
	status: "Укажите статус"
}
const profileReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
	switch (action.type) {
		case ADD_POST: {
			return {
				...state,
				posts: [...state.posts, {id: 5, message: action.formData, likesCount: 0}]
			}
		}
		case CHANGE_POST_TEXT: {
			return {
				...state,
				newPostText: action.newPostText
			}
		}
		case SET_USER_PROFILE: {
			return {
				...state, profile: [action.profile]
			}
		}
		case SET_STATUS: {
			return {
				...state,
				status: action.status
			}
		}
		case UPDATE_STATUS: {
			return {
				...state,
				status: action.status
			}
		}
		default:
			return state
	}
}
export default profileReducer;
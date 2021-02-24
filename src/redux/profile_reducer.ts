import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = "/redux/profile-reducer/ADD_POST";
const DELETE_POST = "/redux/profile-reducer/DELETE_POST";
const CHANGE_POST_TEXT = "/redux/profile-reducer/CHANGE_POST_TEXT";
const SET_USER_PROFILE = "/redux/profile-reducer/SET_USER_PROFILE";
const SET_STATUS = "/redux/profile-reducer/SET_STATUS";
const UPDATE_STATUS = "/redux/profile-reducer/UPDATE_STATUS";
const SAVE_PHOTO_SUCCESS = "/redux/profile-reducer/SAVE_PHOTO_SUCCESS";
export const addPost = (formData: string) => {
	return {type: ADD_POST, formData} as const
}
export const deletePost = (postId: number) => {
	return {type: DELETE_POST, postId} as const
}
export const savePhotoSuccess = (photos: any) => {
	return {type: SAVE_PHOTO_SUCCESS, photos} as const
}
export const changePostText = (valueTextarea: string) => {
	return {type: CHANGE_POST_TEXT, newPostText: valueTextarea} as const
}

export const setUserProfile = (profile: ProfilePageTypeAPI) => {
	return {type: SET_USER_PROFILE, profile} as const
}

export const setUserStatus = (status: string) => {
	return {type: SET_STATUS, status} as const
}
export const updateUserStatus = (status: string) => {
	return {type: UPDATE_STATUS, status} as const
}
export const getProfile = (userId: string) => async (dispatch: Dispatch) => {
	let response = await usersAPI.getProfile(userId);
	dispatch(setUserProfile(response))
}
export const getStatus = (userId: string) => async (dispatch: Dispatch) => {
	let res = await profileAPI.getStatus(userId)
	dispatch(setUserStatus(res.data))
}


export const updateStatus = (status: string) => async (dispatch: Dispatch) => {
	let res = await profileAPI.updateStatus(status)
	if (res.data.resultCode === 0) {
		debugger
		dispatch(setUserStatus(status))
	}
}
export const savePhoto = (file: File) => async (dispatch: Dispatch) => {
	let res = await profileAPI.savePhoto(file)
	if (res.data.resultCode === 0) {
		dispatch(savePhotoSuccess(res.data.data.photos))
	}
}



export type ActionType =
	ReturnType<typeof addPost> |
	ReturnType<typeof deletePost> |
	ReturnType<typeof changePostText> |
	ReturnType<typeof setUserProfile> |
	ReturnType<typeof updateUserStatus> |
	ReturnType<typeof savePhotoSuccess> |
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
	[key: string]: null |string
	facebook: string | null
	website: string | null
	vk: string | null
	twitter: string | null
	instagram: string | null
	youtube: string | null
	github: string | null
	mainLink: string | null
}
type PhotosType = {
	small: string | null
	large: string | null
}
export type InitialStateType = {
	posts: Array<PostType>
	newPostText: string
	profile: ProfilePageTypeAPI
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
	profile: {} as ProfilePageTypeAPI,
	status: ""
}
const profileReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
	switch (action.type) {
		case ADD_POST: {
			return {
				...state,
				posts: [...state.posts, {id: 5, message: action.formData, likesCount: 0}]
			}
		}
		case DELETE_POST: {
			return {
				...state,
				posts: state.posts.filter(p => p.id !== action.postId)
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
				...state, profile: action.profile
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
		case SAVE_PHOTO_SUCCESS: {
			return {
				...state, profile: {...state.profile, photos: action.photos}
			}
		}
		default:
			return state
	}
}
export default profileReducer;
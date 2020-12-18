const ADD_POST = "ADD_POST";
const CHANGE_POST_TEXT = "CHANGE_POST_TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
export const addPostActionCreator = () => {
	return {type: ADD_POST} as const
}
export const changePostTextActionCreator = (valueTextarea: string) => {
	return {type: CHANGE_POST_TEXT, newPostText: valueTextarea} as const
}
export const setUserProfile = (profile: any) => {
	return {type: SET_USER_PROFILE, profile} as const
}
export type ActionType =
	ReturnType<typeof addPostActionCreator> |
	ReturnType<typeof changePostTextActionCreator> |
	ReturnType<typeof setUserProfile>
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
}
let initialState = {
	posts: [
		{id: 1, message: "My first post!", likesCount: 41},
		{id: 2, message: "Second post", likesCount: 22},
		{id: 3, message: 'I live React', likesCount: 31},
		{id: 4, message: "Awesome!!!", likesCount: 421}
	],
	newPostText: "",
	profile: [/*
		{
		aboutMe: "я круто чувак 1001%",
		contacts: {
			facebook: "facebook.com",
			website: null,
			vk: "vk.com/dimych",
			twitter: "https://twitter.com/@sdf",
			instagram: "instagra.com/sds",
			youtube: null,
			github: "github.com",
			mainLink: null
		},
		lookingForAJob: true,
		lookingForAJobDescription: "не ищу, а дурачусь",
		fullName: "samurai dimych",
		userId: 2,
		photos: {
			small: "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
			large: "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
		},}*/]
}

const profileReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
	switch (action.type) {
		case ADD_POST: {
			return {
				...state,
				posts: [...state.posts, {id: 5, message: state.newPostText, likesCount: 0}]
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
		default:
			return state
	}
}
export default profileReducer;
import axios from "axios";
import {formDataType} from "../Components/Login/Login";

const instance = axios.create({
	withCredentials: true,
	baseURL: "https://social-network.samuraijs.com/api/1.0/",
	headers: {
		"API-KEY": "1eda0634-107a-4512-9684-9a0c57ff42df"
	},
})
export const usersAPI = {
	getUsers(currentPage: number = 1, pageSize: number = 10) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`)
			.then(response => response.data) //promises
	},
	unFollowedUser(id: number) {
		return instance.delete(`follow/${id}`)
			.then(response => response.data);
	},
	followedUser(id: number) {
		return instance.post(`follow/${id}`)
			.then(response => response.data);
	},
	getProfile(userId: string) {
		return profileAPI.getProfile(userId)
	}
}

type authAPIType<T> = {
	resultCode: number
	messages: string[]
	data: T
}
export const authAPI = {
	me() {
		return instance.get<authAPIType<{ id: number, email: string, login: string }>>("auth/me")
	},
	login(formData: formDataType) {
		return instance.post<authAPIType< { userId: number } >>("/auth/login", formData)
	},
	logOut() {
		return instance.delete("/auth/login")
	}
}
export const profileAPI = {
	getProfile(userId: string) {
		return instance.get(`profile/` + userId)
			.then(response => response.data);
	},
	getStatus(userId: string) {
		return instance.get(`profile/status/` + userId)
	},
	updateStatus(status: string) {
		return instance.put(`profile/status/`, {status})
	}
}
/*export const getProfile = (userId: number) => {
	return instance.get(`https://social-network.samuraijs.com/api/1.0/profile/`+ userId )
		.then(response => response.data);
}*/
/*
export const getUsers = (currentPage: number = 1, pageSize: number = 10) => {
	 return  instance.get(`users?page=${currentPage}&count=${pageSize}`)
		 .then(response => response.data) //promises
}
export const unFollowedUser = (id: number) => {
	return instance.delete(`follow/${id}`).then(response => response.data);
}
export const followedUser = (id: number) => {
	return instance.post(`follow/${id}`).then(response => response.data);
}
*/


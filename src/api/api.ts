import axios from "axios";

const instance = axios.create({
	withCredentials: true,
	baseURL: "https://social-network.samuraijs.com/api/1.0/",
	headers: {
		"API-KEY": "1eda0634-107a-4512-9684-9a0c57ff42df"
	},
})

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


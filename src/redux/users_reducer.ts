const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

export const followAC = (userID: number) => {
  return {type: FOLLOW, userID} as const
}
export const unFollowAC = (userID: number) => {
  return {type: UNFOLLOW, userID} as const
}

export const setUsersAC = (users: any) => {
  return {type: SET_USERS, users} as const
}

export type ActionType =
  ReturnType<typeof setUsersAC> |
  ReturnType<typeof followAC> |
  ReturnType<typeof unFollowAC>

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
}

let initialState: InitialStateType = {
  users: [
		/*{
			"name": "Shubert",
			"id": 1,
			"photos": {
				"small": null,
				"large": null
			},
			"status": null,
			"followed": false
		}*/

  ]
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
      	...state,
				users: [
					...state.users, ...action.users
				]
      }
    default:
      return state
  }
}
export default usersReducer;
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
  id: number
  photoUrl: string
  followed: boolean
  fullName: string
  status: string
  location: locationType
}

type locationType = {
  city: string
  country: string
}

export type InitialStateType = {
  users: Array<usersType>
}

let initialState: InitialStateType = {
  users: [
    {
      id: 1,
      photoUrl: "https://avatarko.ru/img/kartinka/8/multfilm_pokemon_pikachu_7720.jpg",
      followed: false,
      fullName: "Sergey",
      status: "I am a boss",
      location: {city: "Minsk", country: "Belarus"}
    },
    {
      id: 2,
      photoUrl: "https://avatarko.ru/img/kartinka/8/multfilm_pokemon_pikachu_7720.jpg",
      followed: true,
      fullName: "Kostia",
      status: "I am a boss too",
      location: {city: "Mogilev", country: "Belarus"}
    },
    {
      id: 3,
      photoUrl: "https://avatarko.ru/img/kartinka/8/multfilm_pokemon_pikachu_7720.jpg",
      followed: false,
      fullName: "Dasha",
      status: "I am a big boss",
      location: {city: "Minsk", country: "Belarus"}
    }
  ]
}

const usersReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
  debugger
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
      return {...state, users: [...state.users, ...action.users]}
    default:
      return {...state}
  }
}
export default usersReducer;
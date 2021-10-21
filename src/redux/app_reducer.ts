import {getAuthUserData} from "./auth_reducer";
import {RootStoreType} from "./redux_store";
import {ThunkDispatch} from "redux-thunk";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS"

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS} as const)


export const initializeApp = () => (dispatch: ThunkDispatch<RootStoreType, unknown, ActionType>) => {
	const promise = dispatch(getAuthUserData());
	//res all promise => example [pr,pr1,pr2,pr3]
	Promise.all([promise])
				.then( () => {
				dispatch(initializedSuccess())
			} )

	}


export type ActionType =
	ReturnType<typeof initializedSuccess>


export type InitialStateType = {
	intialized: boolean
}
let initialState: InitialStateType = {
	intialized: false,

}
const appReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
	switch (action.type) {
		case INITIALIZED_SUCCESS: {
			return {
				...state,
				intialized: true
			}
		}
		default:
			return state
	}
}
export default appReducer;
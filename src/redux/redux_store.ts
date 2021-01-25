import { createStore, combineReducers, applyMiddleware} from "redux";
import dialogsReducer from "./dialogs_reducer";
import profileReducer from "./profile_reducer";
import sideBarReducer from "./SideBar_reducer";
import usersReducer from "./users_reducer";
import  thunkMiddleware  from "redux-thunk"
import authReducer from "./auth_reducer";
import { reducer as formReducer } from 'redux-form'
import appReducer from "./app_reducer";

let reducers = combineReducers({
    dialogsReducer: dialogsReducer,
    profileReducer: profileReducer,
    sideBarReducer: sideBarReducer,
    usersReducer: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

export type RootStoreType = ReturnType<typeof reducers>

export let store = createStore(reducers, applyMiddleware(thunkMiddleware))

//@ts-ignore
window.store = store
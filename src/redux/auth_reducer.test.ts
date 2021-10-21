import authReducer, {loginMe, logOut, setError, setUserData} from "./auth_reducer";

let state = {
	userId: null,
	email: null,
	login: null,
	isAuth: false,
	errorMessages: '',
	isError: false
}


test( 'users data should be installed',()=>{
	//1. test data
	let action = setUserData(1,'123@mail.ru', 'login')
	//2. action
	let newState = authReducer(state,action)
	//3. expectation
	expect(newState.email).toBe('123@mail.ru')
	expect(newState.login).toBe('login')
} )

test( 'error should be installed',()=>{
	//1. test data
	let action = setError('errorMessage')
	//2. action
	let newState = authReducer(state,action)
	//3. expectation
	expect(newState.errorMessages).toBe('errorMessage')

} )

test( 'gotta kick me log out',()=>{
	//1. test data
	let action = logOut()
	//2. action
	let newState = authReducer(state,action)
	//3. expectation
	expect(newState.isAuth).toBe(false)

} )

test( 'must log me in',()=>{
	//1. test data
	let action = loginMe()
	//2. action
	let newState = authReducer(state,action)
	//3. expectation
	expect(newState.isAuth).toBe(true)

} )








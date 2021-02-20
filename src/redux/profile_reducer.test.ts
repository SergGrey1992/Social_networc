import profileReducer, {
	InitialStateType,
	addPost,
	deletePost,
	changePostText,
	setUserProfile,
	setUserStatus, updateUserStatus
} from "./profile_reducer";

let state: InitialStateType = {
	posts: [
		{id: 1, message: "My first post!", likesCount: 41},
		{id: 2, message: "Second post", likesCount: 22},
		{id: 3, message: 'I live React', likesCount: 31},
		{id: 4, message: "Awesome!!!", likesCount: 421}
	],
	newPostText: "",
	profile: [],
	status: ""
}

test( "length of post should be incremented",() => {
	//1. test data
	let action = addPost('it-kamasutra.com')
	//2. action
	let newState = profileReducer(state,action)
	//3. expectation
	expect(newState.posts.length).toBe(5)
} )

test( "message of new post should be corrected",() => {
	//1. test data
	let action = addPost('it-kamasutra.com')
	//2. action
	let newState = profileReducer(state,action)
	//3. expectation
	expect(newState.posts[4].message).toBe('it-kamasutra.com')
} )

test( "after deleting length of message should be decrement",() => {
	//1. test data
	let action = deletePost(1)
	//2. action
	let newState = profileReducer(state,action)
	//3. expectation
	expect(newState.posts.length).toBe(3)
} )

test("the title should change",() => {
	//1. test data
	let action = changePostText("test_text_corrected")
	//2. action
	let newState = profileReducer(state,action)
	//3. expectation
	expect(newState.newPostText).toBe("test_text_corrected")
} )

test("the status should be established",() => {
	//1. test data
	let action = setUserStatus("test_text_corrected")
	//2. action
	let newState = profileReducer(state,action)
	//3. expectation
	expect(newState.status).toBe("test_text_corrected")
} )

test("profile should set data",() => {
	//1. test data
	let action = setUserProfile("test_text_corrected")
	//2. action
	let newState = profileReducer(state,action)
	//3. expectation
	expect(newState.profile.length).toBe(1)
} )

test("status should update",() => {
	//1. test data
	let action = updateUserStatus("status_test_text")
	//2. action
	let newState = profileReducer(state,action)
	//3. expectation
	expect(newState.status).toBe("status_test_text")
} )





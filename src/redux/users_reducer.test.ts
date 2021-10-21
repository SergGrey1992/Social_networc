import usersReducer, {setUsers} from "./users_reducer";

let state = {
	users: [],
	pageSize: 20,
	totalUsersCount: 20,
	currentPage: 1,
	portionSize: 10,
	isFetching: false,
	followingInProgress: []
}

test('array must not be empty', () => {
	let action = setUsers([{name: 'test', id: 1, photos:{small:'test', large: 'test'}, followed:true, status:'test'}])
	let newState = usersReducer(state, action)
	expect(newState.users.length).toBe(1)
	expect(newState.users[0].name).toBe('test')
})

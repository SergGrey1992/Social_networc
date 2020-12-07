import React from 'react';
import {usersType} from "../../redux/users_reducer";
import style from "./Users.module.css"
import axios from 'axios'
import userPhoto from "../../assect/user_Photo.jpg"

type usersPropsType = {
	users: Array<usersType>
	pageSize: number
	totalUsersCount: number
	currentPage: number
	follow: (userID: number) => void
	unFollow: (userID: number) => void
	setUsers: (users: Array<usersType>) => void
	setCurrentPage: (currentPageNumber: number) => void
	setTotalCount:(totalCount: number) => void
}
class Users extends React.Component<usersPropsType, {}> {
	componentDidMount() {
		axios
			.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
			.then(response => {
					this.props.setUsers(response.data.items)
					this.props.setTotalCount(response.data.totalCount)

				}
			)
	}
	onPageChanged = (currentPageNumber: number) => {
		this.props.setCurrentPage(currentPageNumber)
		axios
			.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPageNumber}&count=${this.props.pageSize}`)
			.then(response => {
					this.props.setUsers(response.data.items)
					console.log(response)
				}
			)
	}

	render() {
		let pagesCount = Math.ceil( this.props.totalUsersCount / this.props.pageSize )
		let pages = []
		for (let i = 1; i <= pagesCount; i++) {
			pages.push(i)
		}
		return (
			<div>
				<div>
					{pages.map(p => {
						return <span className={this.props.currentPage === p ? style.selectedPage : ""}
												 onClick={ () => { this.onPageChanged(p) } }
						>{p}</span>
					})}
				</div>
				{
					this.props.users.map(users => <div key={users.id}>
          <span>
            <div>
              <img className={style.stylePhoto} src={users.photos.small != null ? users.photos.small : userPhoto}
									 alt="#"/>
            </div>
            <div>
              {users.followed
								? <button onClick={() => {
									this.props.unFollow(users.id)
								}}>UnFollow</button>
								: <button onClick={() => {
									this.props.follow(users.id)
								}}>Follow</button>}
            </div>
          </span>
						<span>
            <span>
              <div>
                {users.name}
              </div>
              <div>
                {users.status}
            </div>
            </span>
							{/*<span>
              <div>{users.location.country}</div>
              <div>{users.location.city}</div>
            </span>*/}
          </span>
					</div>)
				}
			</div>
		)
	}
}
export default Users;
	



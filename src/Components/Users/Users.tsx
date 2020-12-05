import React from 'react';
import {usersType} from "../../redux/users_reducer";
import style from "./Users.module.css"
import axios from 'axios'
import userPhoto from "../../assect/user_Photo.jpg"

type usersPropsType = {
	users: Array<usersType>
	follow: (userID: number) => void
	unFollow: (userID: number) => void
	setUsers: (users: any) => void
}

class Users extends React.Component<usersPropsType, {  }>{
	 getUsers = () => {
		if (this.props.users.length === 0) {
			axios
				.get("https://social-network.samuraijs.com/api/1.0/users")
				.then(response => {
						this.props.setUsers(response.data.items)
						console.log(response)
					}
				)
		}
	}

	render () {
		return (
			<div>
				<button onClick={this.getUsers} >Get Users</button>
				{
					this.props.users.map(users => <div key={users.id}>
          <span>
            <div>
              <img className={style.stylePhoto} src={users.photos.small != null ? users.photos.small : userPhoto} alt="#"/>
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
	



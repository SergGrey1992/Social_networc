import React from 'react';
import {connect} from "react-redux";
import {RootStoreType} from "../../redux/redux_store";
import {
  followAC,
  setCurrentPageAC,
  setTotalCountAC,
  setUsersAC,
  unFollowAC,
  usersType
} from "../../redux/users_reducer";
import {Dispatch} from 'redux';
import axios from "axios";
import {Users} from "./Users";

type usersPropsType = {
  users: Array<usersType>
  pageSize: number
  totalUsersCount: number
  currentPage: number
  follow: (userID: number) => void
  unFollow: (userID: number) => void
  setUsers: (users: Array<usersType>) => void
  setCurrentPage: (currentPageNumber: number) => void
  setTotalCount: (totalCount: number) => void
}

class UsersContainer extends React.Component<usersPropsType, {}> {
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
    return <Users totalUsersCount={this.props.totalUsersCount}
                  pageSize={this.props.pageSize}
                  currentPage={this.props.currentPage}
                  onPageChanged={this.onPageChanged}
                  users={this.props.users}
                  follow={this.props.follow}
                  unFollow={this.props.unFollow}

    />
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    follow: (userID: number) => {
      dispatch(followAC(userID))
    },
    unFollow: (userID: number) => {
      dispatch(unFollowAC(userID))
    },
    setUsers: (users: Array<usersType>) => {
      dispatch(setUsersAC(users))
    },
    setCurrentPage: (currentPageNumber: number) => {
      dispatch(setCurrentPageAC(currentPageNumber))
    },
    setTotalCount: (totalCount: number) => {
      dispatch(setTotalCountAC(totalCount))
    }
  }
}

const mapStateToProps = (state: RootStoreType)=> {
  return {
    users: state.usersReducer.users,
    pageSize: state.usersReducer.pageSize,
    totalUsersCount: state.usersReducer.totalUsersCount,
    currentPage: state.usersReducer.currentPage
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
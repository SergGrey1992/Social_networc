import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {RootStoreType} from "../../redux/redux_store";
import {
  followAC,
  setCurrentPageAC,
  setTotalCountAC,
  setUsersAC,
  unFollowAC,
  usersType
} from "../../redux/users_reducer";
import { Dispatch } from 'redux';


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

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
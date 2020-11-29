import React, {Dispatch} from 'react';
import {connect} from "react-redux";
import {Users} from "./Users";
import {RootStoreType} from "../../redux/redux_store";
import {followAC, setUsersAC, unFollowAC} from "../../redux/users_reducer";


const mapDispatchToProps = (dispatch: Dispatch<any>)=> {
  return {
    followAC: (userID: number) => {dispatch(followAC(userID))},
    unFollowAC: (userID: number) => {dispatch(unFollowAC(userID))},
    setUsersAC: (users: any) => {dispatch(setUsersAC(users))}
  }
}

const mapStateToProps = (state: RootStoreType)=> {
  return {
    users: state.usersReducer.users
  }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
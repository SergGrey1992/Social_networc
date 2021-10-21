import React from "react";
import { connect } from "react-redux";
import {RootStoreType} from "../../redux/redux_store";
import {Login} from "./Login";
import {getLoginMe} from "../../redux/auth_reducer";

const mapStateToProps = (state: RootStoreType) => ({
	auth: state.auth.isAuth,
	errorBool: state.auth.isError,
	errorMessages: state.auth.errorMessages
})

export default connect(mapStateToProps, {getLoginMe})(Login)
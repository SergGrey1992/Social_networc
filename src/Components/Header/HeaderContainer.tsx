import React, {ReactNode} from 'react';
import {connect} from "react-redux";
import Header from './Header';
import axios from "axios"
import {RouteComponentProps, withRouter} from "react-router-dom";
import {setUserData} from "../../redux/auth_reducer";
import {RootStoreType} from "../../redux/redux_store";

export interface HeaderPropsType extends RouteComponentProps<any> {
	setUserData: (userId: number | null, email: string | null, login: string | null) => void
	children?: ReactNode
	login: string | null
	userId: number | null
	email: string | null
	isAuth: boolean
}

export class HeaderContainer extends React.Component<HeaderPropsType, {}> {
	componentDidMount() {
		axios
			.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
				withCredentials: true
			})
			.then(response => {
				if (response.data.resultCode === 0) {
					let {userId, email, login} = response.data.data
					this.props.setUserData(userId, email, login)
				}
			});
	}

	render() {
		return <>
			<Header {...this.props} />
		</>
	}
}
const mapStateToProps = (state: RootStoreType) => ({
	login: state.auth.login,
	email: state.auth.email,
	userId: state.auth.userId,
	isAuth: state.auth.isAuth
})
const WithUrlDataContainerComponent = withRouter<HeaderPropsType & RouteComponentProps, any>(HeaderContainer)
export default connect(mapStateToProps, {setUserData})(WithUrlDataContainerComponent)

import React, {ReactNode} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {RootStoreType} from "../../redux/redux_store";
import {getProfile, ProfilePageTypeAPI, getStatus, updateStatus} from "../../redux/profile_reducer";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from 'redux';

export interface ProfilePropsType extends RouteComponentProps<{ userId: string }> {
	children?: ReactNode
	profile: Array<ProfilePageTypeAPI>
	auth: boolean
	status: string
	getProfile: (userId: string) => void
	getStatus: (userId: string) => string
	updateStatus: (status: string) => string
}
class ProfileContainer extends React.Component<ProfilePropsType> {
	componentDidMount() {
		let userId = this.props.match.params.userId
		if (!userId) {
			userId = "12448"
		}
		this.props.getProfile(userId)
		this.props.getStatus(userId)
	}

	render() {
		return (
			<Profile {...this.props}
							 profile={this.props.profile}
							 status={this.props.status}
							 updateStatus={this.props.updateStatus}
			/>
		)
	}
}
const mapStateToProps = (state: RootStoreType) => ({
	profile: state.profileReducer.profile,
	auth: state.auth.isAuth,
	status: state.profileReducer.status
})
export default compose<React.ComponentType>(
	connect(mapStateToProps, {getProfile, getStatus, updateStatus}),
	withRouter,
	withAuthRedirect
)(ProfileContainer)



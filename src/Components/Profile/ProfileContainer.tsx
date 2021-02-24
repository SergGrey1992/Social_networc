import React, {ReactNode} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {RootStoreType} from "../../redux/redux_store";
import {getProfile, ProfilePageTypeAPI, getStatus, updateStatus, savePhoto} from "../../redux/profile_reducer";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from 'redux';

export interface ProfilePropsType extends RouteComponentProps<{ userId: string }> {
	children?: ReactNode
	profile: ProfilePageTypeAPI
	auth: boolean
	status: string
	isOwner: boolean
	authorizedUserId: string
	getProfile: (userId: string) => void
	getStatus: (userId: string) => string
	updateStatus: (status: string) => string
	savePhoto: (e: File) => void
}
class ProfileContainer extends React.Component<ProfilePropsType> {
	refreshProfile() {
		let userId = this.props.match.params.userId
		if (!userId) {
			userId = this.props.authorizedUserId
			if (!userId) {
				this.props.history.push('/login')
			}
		}
		this.props.getProfile(userId)
		this.props.getStatus(userId)
	}

	componentDidMount() {
		this.refreshProfile()
	}

	componentDidUpdate(prevProps: Readonly<ProfilePropsType>, prevState: Readonly<{}>) {
		if (this.props.match.params.userId !== prevProps.match.params.userId) {
			this.refreshProfile()
		}
	}

	render() {
		return (
			<Profile {...this.props}
							 isOwner={!this.props.match.params.userId}
							 profile={this.props.profile}
							 status={this.props.status}
							 updateStatus={this.props.updateStatus}
							 savePhoto={this.props.savePhoto}
			/>
		)
	}
}
const mapStateToProps = (state: RootStoreType) => ({
	profile: state.profileReducer.profile,
	auth: state.auth.isAuth,
	status: state.profileReducer.status,
	authorizedUserId: state.auth.userId
})
export default compose<React.ComponentType>(
	connect(mapStateToProps, {getProfile, getStatus, updateStatus, savePhoto}),
	withRouter,
	withAuthRedirect
)(ProfileContainer)



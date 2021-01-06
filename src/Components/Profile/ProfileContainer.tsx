import React, {ReactNode} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {RootStoreType} from "../../redux/redux_store";
import {getProfile, ProfilePageTypeAPI} from "../../redux/profile_reducer";
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';

export interface ProfilePropsType extends RouteComponentProps<{ userId: string }> {
	children?: ReactNode
	profile: Array<ProfilePageTypeAPI>
	auth: boolean
	getProfile: (userId: string) => void
}
class ProfileContainer extends React.Component<ProfilePropsType> {
	componentDidMount() {
		let userId = this.props.match.params.userId
		if (!userId) {
			userId = "1"
		}
		this.props.getProfile(userId)
	}

	render() {
		if(!this.props.auth) return <Redirect to={"/login"} />
		return (
			<Profile {...this.props} profile={this.props.profile} />
		)
	}
}
const mapStateToProps = (state: RootStoreType) => ({
	profile: state.profileReducer.profile,
	auth: state.auth.isAuth
})
const WithUrlDataContainerComponent = withRouter<ProfilePropsType & RouteComponentProps, any>(ProfileContainer)
export default connect(mapStateToProps, { getProfile})(WithUrlDataContainerComponent)
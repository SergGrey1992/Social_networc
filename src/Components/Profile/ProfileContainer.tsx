import React, {ReactNode} from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {RootStoreType} from "../../redux/redux_store";
import {ProfilePageTypeAPI, setUserProfile} from "../../redux/profile_reducer";

export type ProfilePropsType = {
	children?: ReactNode
	profile: Array<ProfilePageTypeAPI>
	setUserProfile: (profile: any) => void
}
class ProfileContainer extends React.Component<ProfilePropsType> {
	componentDidMount() {
		axios
			.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
			.then(response => {
				this.props.setUserProfile(response.data)
				console.log(response)
			});
	}

	render() {
		return (
			<Profile {...this.props} profile={this.props.profile} setUserProfile={setUserProfile}/>
		)
	}
}
const mapStateToProps = (state: RootStoreType) => ({
	profile: state.profileReducer.profile
})
export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)
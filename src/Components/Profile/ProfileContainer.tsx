import React, {ReactNode} from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {RootStoreType} from "../../redux/redux_store";
import {ProfilePageTypeAPI, setUserProfile} from "../../redux/profile_reducer";
import {RouteComponentProps, withRouter } from 'react-router-dom';

export interface ProfilePropsType extends RouteComponentProps<{userId: string}> {
	children?: ReactNode
	profile: Array<ProfilePageTypeAPI>
	setUserProfile: (profile: any) => void
	/*history: any
	location: any
	match: any*/
}
class ProfileContainer extends React.Component<ProfilePropsType> {
	componentDidMount() {
		debugger
		const userId = this.props.match.params.userId
		axios
			.get(`https://social-network.samuraijs.com/api/1.0/profile/`+ userId )
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


const WithUrlDataContainerComponent = withRouter<ProfilePropsType & RouteComponentProps, any>(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent)
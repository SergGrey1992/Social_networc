import React from 'react';
import style from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfilePropsType} from "./ProfileContainer";

const Profile = (props: ProfilePropsType) => {
	return <div className={style.wrapperProfile}>
		<ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
		<MyPostsContainer/>
	</div>
}
export default Profile
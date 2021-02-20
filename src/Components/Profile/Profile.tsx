import React from 'react';
import style from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfilePropsType} from "./ProfileContainer";

const Profile: React.FC<ProfilePropsType> = ({profile, status, updateStatus}) => {
	return <div className={style.wrapperProfile}>
		<ProfileInfo profile={profile} status={status} updateStatus={updateStatus}/>
		<MyPostsContainer />
	</div>
}
export default Profile
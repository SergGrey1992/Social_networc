import React from 'react';
import style from './DescriptionBlock.module.css';
import {ProfilePageTypeAPI} from "../../../redux/profile_reducer";
import userPhoto from "../../../assect/user_Photo.jpg";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";

type PropsType = {
	profile: Array<ProfilePageTypeAPI>
	status: string
	updateStatus: (status: string) => string
}
export const ProfileInfo = (props: PropsType) => {
	return <div className={style.wrapperDescription}>
		<h1 className={style.styleH1}>----Profile----</h1>
		<div>
			{
				props.profile.map((prof, index) =>

					<div key={index}>
						{prof.fullName}
						<div>{prof.aboutMe}</div>

						<div>{prof.contacts.facebook}</div>
						<div>{prof.contacts.instagram}</div>
						<img className={style.avatar} src={prof.photos.small != null ? prof.photos.small : userPhoto} alt="#"/>
					</div>
				)}
		</div>
		<div className={style.description}>
			<ProfileStatusWithHooks
				status={props.status}
				updateStatus={props.updateStatus}
			/>
			Description
		</div>
	</div>
}


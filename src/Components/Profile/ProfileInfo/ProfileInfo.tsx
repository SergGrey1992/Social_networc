import React from 'react';
import style from './DescriptionBlock.module.css';
import {ProfilePageTypeAPI} from "../../../redux/profile_reducer";
import userPhoto from "../../../assect/user_Photo.jpg";

type PropsType = {
	profile: Array<ProfilePageTypeAPI>
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
			<img className={style.avatar} alt="ava"
					 src='https://pm1.narvii.com/7171/f6f1c4463bbd9959052b699672858647f17660d3r1-264-250v2_00.jpg'/>
		</div>
		<div className={style.description}>
			Description
		</div>
	</div>
}


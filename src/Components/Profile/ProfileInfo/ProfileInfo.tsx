import React, {ChangeEvent, useState} from 'react';
import style from './DescriptionBlock.module.css';
import {ProfilePageTypeAPI} from "../../../redux/profile_reducer";
import userPhoto from "../../../assect/user_Photo.jpg";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import {MainProfile} from "./MainProfile/MainProfile";
import {PreLoader} from "../../../common/PreLoader/PreLoader";
import {ProfileDataForm, ProfileDataFormReduxForm} from "./ProfileDataForm/ProfileDataForm";

type PropsType = {
	profile: ProfilePageTypeAPI
	status: string
	isOwner: boolean
	updateStatus: (status: string) => string
	savePhoto: (e: File) => void
}
export const ProfileInfo: React.FC<PropsType> = ({
																									 profile,
																									 status,
																									 updateStatus,
																									 isOwner,
																									 savePhoto
																								 }) => {
	const [editMode, setEditMode] = useState(false)

	const toEditMode = () => {
		setEditMode(true)
	}
	//test commit
	const onPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files!.length) {
			savePhoto(e.target.files![0])
		}
	}
	if (!Object.keys(profile).length) {
		return <PreLoader/>
	}

	const onSubmit = () => {

	}
	return <div className={style.wrapperDescription}>
		<h1 className={style.styleH1}>----Profile----</h1>
		<div>

			<img className={style.avatar} src={profile.photos.small !== null ? profile.photos.small : userPhoto} alt="#"/>
			{isOwner && <input type="file" onChange={onPhotoSelected}/>}
			{editMode ? <ProfileDataFormReduxForm onSubmit={onSubmit}/> : <ProfileData profile={profile} isOwner={isOwner} toEditMode={toEditMode}/>}

		</div>
		<div className={style.description}>
			<ProfileStatusWithHooks
				status={status}
				updateStatus={updateStatus}
			/>
			Description
		</div>
	</div>
}
type contactsType = {
	contactTitle: string
	contactValue: string | null
}
export const Contacts: React.FC<contactsType> = ({contactTitle, contactValue}) => {
	return <div>
		<b>{contactTitle}</b>: {contactValue}
	</div>
}
type ProfileDataPropsType = {
	profile: ProfilePageTypeAPI
	isOwner: boolean
	toEditMode: () => void
}
const ProfileData: React.FC<ProfileDataPropsType> = ({profile, isOwner, toEditMode}) => {
	return (
		<div>
			{isOwner && <div>
          <button onClick={toEditMode}>edit</button>
      </div>}
			<div>{profile.fullName}</div>
			<div>Looking for a job: {profile.lookingForAJob ? 'yes' : 'no'}</div>
			{profile.lookingForAJob &&
      <div>
          <b>My professional skills</b>: {profile.lookingForAJobDescription}
      </div>}
			<div>
				<b>About me</b>:{profile.aboutMe}
			</div>
			<div>
				<b>Contacts</b>:{Object.keys(profile.contacts).map((key) => {
				return <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
			})}
			</div>
		</div>
	)
}








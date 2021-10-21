import {ProfilePageTypeAPI} from "../../../../redux/profile_reducer";
import React from "react";
import {createField, Input, Textarea} from "../../../../common/FormsControls/FormsControls";
import { Contacts } from "../ProfileInfo";
import {InjectedFormProps, reduxForm} from "redux-form";

type ProfileDataFormPropsType = {
	profile: ProfilePageTypeAPI
	onSubmit: () => void
}
export const ProfileDataForm: React.FC<InjectedFormProps<ProfileDataFormPropsType>> = ({ handleSubmit, }) => {
	return (
		<form onSubmit={handleSubmit}>
			<div>
				<button >Save</button>
			</div>
			<div>
				<b>Full name</b>: {createField('text', "FullName", 'fullName', Input, )}
			</div>
			<div><b>Looking for a job</b>: {createField('checkbox', "lookingForAJob", 'lookingForAJob', Input )}</div>
      <div>
          <b>My professional skills</b>: {createField('textarea', "lookingForAJobDescription", 'lookingForAJobDescription', Textarea )}
      </div>
			<div>
				<b>About me</b>:
				{createField('text', "aboutMe", 'aboutMe', Input, )}
			</div>
			{/*<div>
				<b>Contacts</b>:{Object.keys(profile.contacts).map((key) => {
				return <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
			})}
			</div>*/}
		</form>
	)
}


export const ProfileDataFormReduxForm = reduxForm<ProfileDataFormPropsType >({form: 'edit-profile'})(ProfileDataForm)
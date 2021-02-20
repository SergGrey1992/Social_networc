import React from "react";
import { Redirect } from "react-router-dom";
// import reduxForm not default
// reduxForm from "redux-form"; => not work
// {reduxForm} from "redux-form"; => work
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {createField, Input } from "../../common/FormsControls/FormsControls";
import { required } from "../../utils/validators/vaidators";

export type formDataType = {
	email: string
	password: string
	rememberMe: boolean
}
export type IPropsType = {
	auth: boolean
	getLoginMe: (formData: formDataType) => void
	errorMessages: string
	errorBool: boolean
}

export const Login: React.FC< IPropsType> = (
	{
		getLoginMe, ...props
	}
) => {
	const onSubmit = (formData: formDataType) => {
		getLoginMe(formData)
	}
	if( props.auth ) return <Redirect to={'/profile'} />
	return (
		<div>
			<h1>Login</h1>
			<LoginReduxForm onSubmit={onSubmit} {...props} />
			{props.errorBool ? <div>{props.errorMessages}123</div> : " " }
		</div>
	)
}
export const LoginForm: React.FC<InjectedFormProps<formDataType> > = (
	{
	 handleSubmit
	}
) => {
	return (
		<form onSubmit={handleSubmit}>

				{createField('text', 'email', 'email', Input, [required])}
				{createField('text', 'Password', 'password', Input, [required])}
				{createField('checkbox', null, 'rememberMe', Input)}

			<div>
				<button>Login</button>
			</div>
		</form>
	)
}

const LoginReduxForm = reduxForm<formDataType>({form: "login"})(LoginForm)




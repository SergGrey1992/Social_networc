import React from "react";
// import reduxForm not default
// reduxForm from "redux-form"; => not work
// {reduxForm} from "redux-form"; => work
import {Field, reduxForm, InjectedFormProps} from "redux-form";

type formDataType = {
	login: string
	password: string
	rememberMe: boolean
}

export const LoginForm: React.FC<InjectedFormProps<formDataType>> = (props) => {
	console.log(props)
	return (
		<form onSubmit={props.handleSubmit} >
			<div>
				<Field type="text" placeholder={"Login"} name={'login'} component={'input'} />
			</div>
			<div>
				<Field type="text" placeholder={"Password"} name={'password'} component={'input'}/>
			</div>
			<div>
				<Field type="checkbox" name={"rememberMe"} component={'input'} />remember me
			</div>
			<div>
				<button>Login</button>
			</div>
		</form>
	)
}

const LoginReduxForm = reduxForm<formDataType>({
	form: "login"
})(LoginForm)

export const Login = () => {
	const onSubmit = (formData: formDataType) => {
		console.log(formData)
	}
	return (
		<div>
			<h1>Login</h1>
			<LoginReduxForm onSubmit={onSubmit} />
		</div>
	)
}
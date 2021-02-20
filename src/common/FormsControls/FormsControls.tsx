import React from "react";
import style from "./FormsControls.module.css"
import {required} from "../../utils/validators/vaidators";
import {Field} from "redux-form";

const FormControl: React.FC<any> = ({ meta: {touched, error},children, }) => {
	const hasError = touched && error
	return (
		<div className={style.formControl + " " + (hasError ? style.error : "")}>
			<div>
				{children}
			</div>
			{hasError && <span>{error}</span>}
		</div>
	)
}
export const Textarea: React.FC<any> = (props) => {
	const {input, meta, child, ...restProps} = props
	return <FormControl {...props} ><textarea {...input} {...restProps} /></FormControl>
}
export const Input: React.FC<any> = (props) => {
	const {input, meta, child, ...restProps} = props
	return <FormControl {...props} ><input {...input} {...restProps} /></FormControl>
}
export const createField = (type: string,
														placeholder: string | null,
														name: string,
														component: any,
														validate?: any,
														props?: any,
														text?: string  ) => {
	return <div><Field type={type}
										 placeholder={placeholder}
										 name={name}
										 component={component}
										 validate={validate}
										 {...props}
	/>{text}</div>
}


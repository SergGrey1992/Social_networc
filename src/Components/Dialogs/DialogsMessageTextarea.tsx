import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import { Textarea } from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/vaidators";

const maxLength10 = maxLengthCreator(10)

type formDataType = {
	message: string
}
type IPropsType = {
	newMessageText: string
	changeMessageText: (trimmedValue: string) => void
	addMessage: ( messageText: string ) => void
}
export const DialogsMessageTextarea: React.FC<IPropsType> = (
	{
		addMessage, ...props
	}
) => {


	const onSubmit = (formData: formDataType) => {
		addMessage(formData.message)
		formData.message = ''
		console.log(formData)
	}
	return (
		<div>
			<MessageReduxForm onSubmit={onSubmit} {...props} />
		</div>
	)
}
const MessageForm: React.FC<InjectedFormProps<formDataType>> = (
	{
		handleSubmit
	}
) => {
	return (
		<form onSubmit={handleSubmit}>
			<Field
				type="text"
				name={'message'}
				component={Textarea}
				validate={[required, maxLength10]}
				placeholder={'Message text'}
			/>
			<button>Add message</button>
		</form>
	)
}
const MessageReduxForm = reduxForm<formDataType>({form: "message"})(MessageForm)
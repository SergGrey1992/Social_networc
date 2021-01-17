import React, {ChangeEvent} from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {addMessage, changeMessageText} from "../../redux/dialogs_reducer";

type formDataType = {
	message: string
}
type DialogsMessageTextareaPropsType = {
	newMessageText: string
	changeMessageText: (trimmedValue: string) => void
	addMessage: () => void
}
export const DialogsMessageTextarea: React.FC<DialogsMessageTextareaPropsType> = (
	{
		 ...props
	}
) => {
	const onSubmit = (formData: formDataType) => {
		console.log(formData)
	}
	return (
		<div>
			<MessageReduxForm onSubmit={onSubmit} {...props}/>
		</div>
	)
}
const MessageForm: React.FC<InjectedFormProps<formDataType>> = (
	{
		handleSubmit
	}
) => {
	let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		let body = e.currentTarget.value
		changeMessageText(body)
	}
	return (
		<form onSubmit={handleSubmit}>
			<Field
				type="text"
				name={'message'}
				component={'textarea'}
				onChange={onNewMessageChange}
			/>
			<button onClick={addMessage}>Add message</button>
		</form>
	)
}
const MessageReduxForm = reduxForm<formDataType>({form: "message"})(MessageForm)
import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import { Textarea } from "../../../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../../utils/validators/vaidators";

const maxLength10 = maxLengthCreator(10)
type formDataType = {
	postMessage: string
}

type IPropsType = {
	newPostText: string
	addPost: (formData: string) => void
}
export const MyPostsMessageTextarea: React.FC<IPropsType> = (
	{ addPost,  ...props}
) => {
	const onSubmit = (formData: formDataType) => {

		addPost(formData.postMessage)

	}
	return (
		<div>
			<MyPostMessageReduxForm onSubmit={onSubmit} {...props}  />
		</div>
	)
}

const MyPostMessageForm: React.FC<InjectedFormProps<formDataType>> = (
	{
		handleSubmit
	}
) => {
	return (
		<form onSubmit={handleSubmit}>
			<Field
				type="text"
				name={'postMessage'}
				component={Textarea}
				placeholder={"Post message"}
				validate={[required, maxLength10]}
			/>
			<button>Add post</button>
		</form>
	)
}
const MyPostMessageReduxForm = reduxForm<formDataType>({form: "message"})(MyPostMessageForm)
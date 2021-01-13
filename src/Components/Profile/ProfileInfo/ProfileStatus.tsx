import React, {ChangeEvent} from 'react';

type ProfileStatusPropsType = {
	status: string
	updateStatus: (status: string) => string
}
export class ProfileStatus extends React.Component<ProfileStatusPropsType> {

	state = {
		editMode: false,
		status: this.props.status
	}
	activateEditMode = () => {
		this.setState({
			editMode: true
		})
		this.state.editMode = true
	}
	deActivateEditMode = () => {
		this.setState({
			editMode: false
		})
		this.state.editMode = false
		this.props.updateStatus(this.state.status)
	}
	onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
		this.setState({
			status: e.currentTarget.value
		})
	}
	componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<{}>, snapshot?: any) {
		console.log("componentDidUpdate")
		//Обязательно делать проверку или будет зацикленность
		if(prevProps.status !== this.props.status) {
			this.setState({
				status: this.props.status
			})
		}

	}

	render() {
		return (
			<>
				{!this.state.editMode &&
        <div>
            <span onDoubleClick={this.activateEditMode}>{this.props.status === '' ? 'укажите статус' : this.props.status }</span>
        </div>
				}
				{this.state.editMode &&
        <div>
            <input
                value={this.state.status}
                autoFocus={true}
                onChange={this.onStatusChange}
                onBlur={this.deActivateEditMode}/>
        </div>
				}
			</>
		);
	}
}


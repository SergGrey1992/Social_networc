import React, {ChangeEvent, useEffect, useState} from 'react';

type ProfileStatusPropsType = {
	status: string
	updateStatus: (status: string) => string
}
export const ProfileStatusWithHooks:React.FC<ProfileStatusPropsType> =({ status, updateStatus})=>{
	const [editMode, setEditMode] = useState<boolean>(false)
	const [statusS, setStatusS] = useState<string>(status)

	useEffect( () => {
		setStatusS(status)
	}, [status] )

	const activeModeHandler = () => {
		setEditMode(!editMode)
	}
	const deActiveModeHandler = () => {
		setEditMode(!editMode)
		updateStatus(statusS)
	}
	const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
		setStatusS(e.currentTarget.value)
	}
		return (
			<>
				{!editMode &&
        <div>
            <span onDoubleClick={activeModeHandler}>{status === '' ? 'укажите статус' : status }</span>
        </div>
				}
				{editMode &&
        <div>
            <input
                value={statusS}
                autoFocus={true}
                onChange={onStatusChange}
                onBlur={deActiveModeHandler}/>
        </div>
				}
			</>
		)
	}



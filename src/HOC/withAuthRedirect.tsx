import React, {ComponentType} from 'react'
import {Redirect} from 'react-router-dom'

export function withAuthRedirect<T extends object>(Component: ComponentType<T>) {
	class RedirectComponent extends React.Component<T & { auth: boolean }> {
		render() {
			if (!this.props.auth) return <Redirect to='/login'/>
			return <Component {...this.props}/>
		}
	}
	return RedirectComponent
}
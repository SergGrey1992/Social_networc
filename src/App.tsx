import React from 'react';
import './App.css';
import Navbar from "./Components/NavBar/NavBar";
import {Route, withRouter} from 'react-router-dom';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from './Components/Header/HeaderContainer';
import LoginContainer from "./Components/Login/LoginContainer";
import {connect} from "react-redux";
import {compose} from 'redux';
import {initializeApp} from "./redux/app_reducer";
import {RootStoreType} from "./redux/redux_store";
import {PreLoader} from "./common/PreLoader/PreLoader";

interface AppPropsType extends React.Component {
	initializeApp: () => void
	intialized: boolean
}
export class App extends React.Component<AppPropsType, {}> {
	componentDidMount() {
		this.props.initializeApp()
	}
	render() {
		if (!this.props.intialized) {
			return <PreLoader/>
		}
		return (
			<div className='app_wrapper'>
				<HeaderContainer/>
				<Navbar/>
				<div className="app_wrapper_content">
					<Route path='/login' render={() => <LoginContainer/>}/>
					<Route path='/dialogs' render={() => <DialogsContainer/>}/>
					<Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
					<Route path='/users' render={() => <UsersContainer/>}/>
				</div>
			</div>
		);
	}
}
const mapStateToProps = (state: RootStoreType) => ({
	intialized: state.app.intialized
})
export default compose<React.ComponentType>(
	withRouter,
	connect(mapStateToProps, {initializeApp}))(App)

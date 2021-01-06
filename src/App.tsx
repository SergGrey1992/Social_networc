import React from 'react';
import './App.css';
import Navbar from "./Components/NavBar/NavBar";
import {Route} from 'react-router-dom';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from './Components/Header/HeaderContainer';
import { Login } from './Components/Login/Login';

const App = () => {
  return (
    <div className='app_wrapper'>
      <HeaderContainer/>
      <Navbar/>
      <div className="app_wrapper_content">
        <Route path='/login' render={() => <Login/>}/>
        <Route path='/dialogs' render={() => <DialogsContainer/>}/>
        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
        <Route path='/users' render={() => <UsersContainer/>}/>

      </div>
    </div>
  );
}

export default App;
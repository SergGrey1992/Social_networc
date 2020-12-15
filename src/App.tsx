import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/NavBar/NavBar";
import {Route} from 'react-router-dom';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import Profile from "./Components/Profile/Profile";
import UsersContainer from "./Components/Users/UsersContainer";



/*type AppStatePropsType = {
  state: RootStateType
  dispatch: (action: any) => void
}*/

const App = () => {
  return (
    <div className='app_wrapper'>
      <Header/>
      <Navbar/>
      <div className="app_wrapper_content">
        <Route path='/dialogs' render={() => <DialogsContainer/>}
        />
        <Route path='/profile' render={() => <Profile/>}/>
        <Route path='/users' render={() => <UsersContainer/>}/>
      </div>
    </div>
  );
}

export default App;
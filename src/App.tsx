import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/NavBar/NavBar";
import {Route} from 'react-router-dom';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import Profile from "./Components/Profile/Profile";
import {Users} from "./Components/Users/Users";


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
        <Route path='/users' render={() => <Users/>}/>
      </div>
    </div>
  );
}

export default App;
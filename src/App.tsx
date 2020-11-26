import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/NavBar/NavBar";
import Profile from "./Components/Profile/Profile";
import {Route} from 'react-router-dom';
import {RootStateType} from "./redux/store";
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";

type AppStatePropsType = {
  state: RootStateType

  dispatch: (action: any) => void
}

const App = (props: AppStatePropsType) => {
  return (<div className='app_wrapper'>
      <Header/>
      <Navbar store={props.state}/>
      <div className="app_wrapper_content">
        <Route path='/dialogs' render={() => <DialogsContainer
          messagesPage={props.state.messagesPage}
          dispatch={props.dispatch}
        />}
        />
        <Route path='/profile' render={() => <Profile
          profilePage={props.state.profilePage}
          dispatch={props.dispatch}/>}/>
      </div>
    </div>
  );
}

export default App;
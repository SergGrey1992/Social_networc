import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/NavBar/NavBar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {RootStateType} from './redux/state';
import {Route} from 'react-router-dom';


type AppStatePropsType = {
    state: RootStateType
    addPost: (postMessage: string) => void
}

function App(props: AppStatePropsType) {
  debugger
    return (<div className='app_wrapper'>
            <Header/>
            <Navbar state={props.state}/>
            <div className="app_wrapper_content">
                <Route path='/dialogs' render={() => <Dialogs
                    messagesPage={props.state.messagesPage}

                />}
                />
                <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage} addPost={props.addPost}/>}/>
            </div>
        </div>
    );
}

export default App;
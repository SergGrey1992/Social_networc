import React from 'react';
import style from './NavBar.module.css';
import {NavLink} from "react-router-dom";
import {Sidebar} from "./Sidebar/Sidebar";
import { RootStateType} from "../../redux/store";

type AppStatePropsType= {
    store:RootStateType
}

const Navbar = (props:AppStatePropsType) => {
    return <nav className={style.nav}>
        <div className={style.item}>
            <NavLink to='/profile' activeClassName={style.activeLink}>Profile</NavLink>
        </div>
        <div className={style.item}>
            <NavLink to='/dialogs' activeClassName={style.activeLink}>Messages</NavLink>
        </div>
        <div className={style.item}>
            <NavLink to='/news'>News</NavLink>
        </div>
        <div className={style.item}>
            <NavLink to='/music'>Music</NavLink>
        </div>
        <div className={style.item}>
            <NavLink to='/settings'>Settings</NavLink>
        </div>
    <Sidebar asideState={props.store.asideState}/>
    </nav>
}
export default Navbar
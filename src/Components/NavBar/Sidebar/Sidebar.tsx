import React from 'react';
import style from './Sidebar.module.css';
import {SideFriend} from "./SideFriend/SideFriend";
import {RootStoreType} from "../../../redux/redux_store";
import {connect} from "react-redux";
import {InitialStateType} from "../../../redux/SideBar_reducer";

// MSTPType
type SidebarPropsType = {
    sideState: InitialStateType
}

export const Sidebar = (props: SidebarPropsType) => {
    let friendsAsideElement = props.sideState.asideState.asideFriends.map(
      friends => <SideFriend id={friends.id}
                             name={friends.name}
                             avatar={friends.avatar}/>
                             )

    return <aside className={style.aside}>
        <div className={style.asideH}>
            <h3>Friends</h3>
        </div>
        <div className={style.wrapperAside}>
            {friendsAsideElement}
        </div>
    </aside>
}


const mapStateToProps = (state: RootStoreType): { sideState: InitialStateType } => {
    return {
        sideState: state.sideBarReducer
    }
}

// TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState
export const SidebarContainer = connect<SidebarPropsType, {}, {}, RootStoreType>(mapStateToProps, {})(Sidebar)
// export default SidebarContainer;
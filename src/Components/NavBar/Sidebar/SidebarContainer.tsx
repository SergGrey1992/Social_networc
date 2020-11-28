import React from 'react';
import {RootStoreType} from "../../../redux/redux_store";
import {connect} from "react-redux";
import {Sidebar} from "./Sidebar";

export const q = 42

/*
type SidebarPropsType = {
    asideState: AsideStateType
}
*/

/*export const SidebarContainer = (props: SidebarPropsType) => {
    let friendsAsideElement = props.asideState.asideFriends.map(friends => <SideFriend id={friends.id}
                                                                                       name={friends.name}
                                                                                       avatar={friends.avatar}/>)
    return <aside className={style.aside}>
        <div className={style.asideH}>
            <h3>Friends</h3>
        </div>
        <div className={style.wrapperAside}>
            {friendsAsideElement}
        </div>
    </aside>
}*/
// const mapStateToProps = (state: RootStoreType) => {
//     return {
//         asideState: state.sideBarReducer
//     }
// }
//
// const SidebarContainer = connect(mapStateToProps)(Sidebar)
// export default SidebarContainer;


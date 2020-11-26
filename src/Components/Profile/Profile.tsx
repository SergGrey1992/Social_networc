import React from 'react';
import style from './Profile.module.css';

import DescriptionBlock from "./ProfileInfo/DescriptionBlock";
import {ProfilePageType} from "../../redux/store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type ProfilePropsType = {
    profilePage: ProfilePageType
    dispatch: (action: any) => void
}



const Profile = (props:ProfilePropsType) => {
    return <div className={style.wrapperProfile} >
        <DescriptionBlock/>
        <MyPostsContainer posts={props.profilePage.posts} dispatch={props.dispatch}/>
    </div>
}

export default Profile
import React from 'react';
import style from './Profile.module.css';

import DescriptionBlock from "./ProfileInfo/DescriptionBlock";
import {ProfilePageType} from "../../redux/store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";


const Profile = () => {
    return <div className={style.wrapperProfile} >
        <DescriptionBlock/>
        <MyPostsContainer />
    </div>
}

export default Profile
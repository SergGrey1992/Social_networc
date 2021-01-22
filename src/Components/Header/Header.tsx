import React from 'react';
import style from './Header.module.css';
import {NavLink} from "react-router-dom";
import {HeaderPropsType} from "./HeaderContainer";


export const Header: React.FunctionComponent<HeaderPropsType> = ({login, isAuth, logOutMe}) => {



	return <header className={style.wrapperHeader}>
		<img className={style.img} alt='logo'
				 src={"https://i.pinimg.com/564x/81/cb/9c/81cb9cf335d5cbcf74d093ff869fe92e.jpg"}/>
		<div className={style.loginBlock}>
			{ isAuth ?  <span className={style.info} >{login}</span> : <NavLink to={"/login"}>Login</NavLink> }
			<button onClick={logOutMe} >Log out</button>
		</div>
	</header>;
}
export default Header
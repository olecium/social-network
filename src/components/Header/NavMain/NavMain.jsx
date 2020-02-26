import React from "react";
import {NavLink} from "react-router-dom";
import css from './NavMain.module.scss';

const NavMain = (props) => {
    const uId = props.userId;

    let onLogout = () => {
        console.log('logout'+ uId);
    }
    return(
        <nav>
            <ul className={css.nav_main}>
                {
                    props.isAuth
                    ?   <>
                            <li><NavLink className={css.nav_main__link} to="/settings">Settings</NavLink></li>
                            <li><span className={css.nav_main__welcome}>Hello, {uId} {props.login}</span><NavLink className={css.nav_main__link} activeClassName={css.nav_main__link_active} to="/profile">Profile</NavLink></li>
                            <li><button onClick={onLogout}>Logout</button></li>
                        </>
                    :   <li><NavLink className={css.nav_main__link} to="/login">Login</NavLink></li>
                }
            </ul>
        </nav>
    );
}
export default NavMain;

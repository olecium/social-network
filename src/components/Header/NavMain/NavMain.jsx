import React from "react";
import {NavLink} from "react-router-dom";
import css from './NavMain.module.scss';

const NavMain = () => {
    return(
        <nav>
            <ul className={css.nav_main}>
                <li><NavLink className={css.nav_main__link} activeClassName={css.nav_main__link_active} to="/profile">Profile</NavLink></li>
                <li><NavLink className={css.nav_main__link} to="/settings">Settings</NavLink></li>
            </ul>
        </nav>
    );
}
export default NavMain;

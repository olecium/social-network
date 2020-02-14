import React from "react";
import NavMain from "./NavMain/NavMain";
import css from "./Header.module.scss";

function Header () {
    return (
        <header className={css.app_header}>
            <NavMain />
        </header>
    );
}
export default Header;

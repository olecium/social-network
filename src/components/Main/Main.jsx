import React from "react";
import Sidenav from './Sidenav/Sidenav';
import Content from "./Content/Content";
import css from "./Main.module.scss";
import Friends from "./Sidenav/Friends/Friends";

function Main(props) {
    return(
        <div className={css.app_wrapper}>
            <main className={css.app_main}>
                <section className={css.app_sidebar}>
                    <Sidenav navList={props.stateSidebar.nav}/>
                    <Friends friendList={props.stateSidebar.friendList} />
                </section>
                <Content stateMessages={props.stateMessages} stateProfile={props.stateProfile} dispatch={props.dispatch}/>
            </main>
        </div>
    );
}

export default Main;

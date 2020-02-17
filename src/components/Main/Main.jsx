import React from "react";
import Sidenav from './Sidenav/Sidenav';
import Content from "./Content/Content";
import css from "./Main.module.scss";
import Friends from "./Sidenav/Friends/Friends";

function Main(props) {
    let state = props.store.getState();
    return(
        <div className={css.app_wrapper}>
            <main className={css.app_main}>
                <section className={css.app_sidebar}>
                    <Sidenav navList={state.sidebar.nav} />
                    <Friends friendList={state.sidebar.friendList} />
                </section>
                <Content store={props.store} />
            </main>
        </div>
    );
}

export default Main;

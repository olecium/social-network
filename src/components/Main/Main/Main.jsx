import React from "react";
import Content from "../Content/Content";
import css from "./Main.module.scss";
import SidebarContainer from "../Sidebar/SidebarContainer";

function Main(props) {
    
    //let state = props.state.getState();
/*<section className={css.app_sidebar}>
                    <Sidenav navList={state.nav}/>
                    <Friends friendList={state.friendList} />  
                </section>  */

    return(
        <div className={css.app_wrapper}>
            <main className={css.app_main}>
                <SidebarContainer />
                <Content/>
            </main>
        </div>
    );
}

export default Main;

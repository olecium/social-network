import React from "react";
import Sidenav from './Sidenav/Sidenav';
import Content from "./Content/Content";
import css from "./Main.module.scss";
import Friends from "./Sidenav/Friends/Friends";
import StoreContext from "../../StoreContext";

function Main(props) {
    //let state = props.store.getState();
    return(
        <div className={css.app_wrapper}>
            <main className={css.app_main}>
                    <StoreContext.Consumer>
                        {
                            (store) => {
                                let state = store.getState().sidebar;
                                return ( 
                                    <section className={css.app_sidebar}>
                                        <Sidenav navList={state.nav}/>
                                        <Friends friendList={state.friendList} />  
                                    </section>    
                                );
                            }
                        }
                    </StoreContext.Consumer>
                <Content/>
            </main>
        </div>
    );
}

export default Main;

import React from "react";
import {Route} from "react-router-dom";
import ProfileContainer from "../../Profile/ProfileContainer";
import News from "../../News/News";
import Music from "../../Music/Music";
import Settings from "../../Settings/Settings";
import css from "./Content.module.scss";
import MessagesContainer from "../../Messages/MessagesContainer";

function Content(props) {
    return(
        <section className={css.app_content}>
            <Route path="/profile" render={() => <ProfileContainer store={props.store} />} />
            <Route path="/messages" render={() => <MessagesContainer store={props.store} />} />
            <Route path="/news" component={News} />
            <Route path="/music" component={Music} />
            <Route path="/settings" component={Settings} />
        </section>
    );
}
export default Content;

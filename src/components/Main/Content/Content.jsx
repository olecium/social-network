import React from "react";
import {Route} from "react-router-dom";
import Messages from "../../Messages/Messages";
import UserInfo from "../../Profile/UserInfo/UserInfo";
import News from "../../News/News";
import Music from "../../Music/Music";
import Settings from "../../Settings/Settings";
import css from "./Content.module.scss";

function Content(props) {
    return(
        <section className={css.app_content}>
            <Route path="/profile" render={() => <UserInfo  posts={props.stateProfile.posts} />} />
            <Route path="/messages" render={() => <Messages dialogs={props.stateMessages.dialogs} messages={props.stateMessages.messages}/>} />
            <Route path="/news" component={News} />
            <Route path="/music" component={Music} />
            <Route path="/settings" component={Settings} />
        </section>
    );
}
export default Content;

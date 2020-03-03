import React, { Suspense } from "react";
import {Route, Redirect, Switch} from "react-router-dom";
import css from "./Content.module.scss";

import ProfileContainer from "../../Profile/ProfileContainer";
import LoginContainer from "../../Login/LoginContainer";
import Preloader from "../../common/Preloader/Preloader";
import { withSuspense } from "../../../hoc/withSuspense";

const MessagesContainer = React.lazy(() => import('./../../Messages/MessagesContainer'));
const UsersContainer = React.lazy(() => import('./../../Users/UsersContainer'));
const News = React.lazy(() => import('./../../News/News'));
const Music = React.lazy(() => import('./../../Music/Music'));
const Settings = React.lazy(() => import('./../../Settings/Settings'));

const Content = () => {
    return(
        <section className={css.app_content}>
            <Route exact path='/' render={() => <Redirect to={"/profile"}/>}/>
            <Route path="/profile/:userId?" render={ withSuspense(ProfileContainer) }/>
            <Route path="/messages" render={ withSuspense(MessagesContainer) }/>
            <Route path="/users" render={ withSuspense(UsersContainer) }/>
            <Suspense fallback={<Preloader />}>
                <Switch>
                    <Route path="/news" component={News} />
                    <Route path="/music" component={Music} />
                    <Route path="/settings" component={Settings} />
                </Switch>
            </Suspense>
            <Route path="/login" component={LoginContainer} />
        </section>
    );
}
export default Content;

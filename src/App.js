import React, {Component} from 'react';
import './App.scss';
import Footer from './components/Footer/Footer';
import {BrowserRouter, withRouter} from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main/Main";
import { connect } from "react-redux";
import { initApp } from "./redux/app-reducer";
import Preloader from './components/common/Preloader/Preloader';
import {Provider} from "react-redux";
import store from './redux/redux-store';
import { compose } from 'redux';

class App extends Component {

  catchAllUnhandledErrors = (reason, promise) => {
    alert("some error occured");
  }

  componentDidMount() {
    this.props.initApp();

    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }

  componentWillUnmount() {    
    window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }

  render() {
    if( !this.props.init ){
      return <Preloader />
    }
    return (
          <div className="container">
            <Header/>
            <Main/>
            <Footer/>
          </div>
    );
  }
}

const mapStateToProps = (state) => ({
  init: state.app.init
});

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps,{ initApp }))(App);


const SocialNetworkApp = () => {
    return  <BrowserRouter>
              <Provider store={store}>
                <AppContainer />
              </Provider>
            </BrowserRouter>
}

export default SocialNetworkApp;
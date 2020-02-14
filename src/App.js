import React from 'react';
import './App.scss';
import Footer from './components/Footer/Footer';
import {BrowserRouter} from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App(props) {
  return (
      <BrowserRouter>
        <div className="container">
             <Header/>
             <Main
                 stateMessages={props.appstate.messagesPage}
                 stateProfile={props.appstate.profilePage}
                 stateSidebar={props.appstate.sidebar}
             />
             <Footer/>
        </div>
      </BrowserRouter>
  );
}
export default App;

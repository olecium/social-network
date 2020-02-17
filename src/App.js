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
                 stateMessages={props.state.messagesPage}
                 stateProfile={props.state.profilePage} dispatch={props.dispatch}
                 stateSidebar={props.state.sidebar}
             />
             <Footer/>
        </div>
      </BrowserRouter>
  );
}
export default App;

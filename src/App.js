import React from 'react';
import './App.scss';
import Footer from './components/Footer/Footer';
import {BrowserRouter} from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main/Main";

function App(props) {
  return (
      <BrowserRouter>
        <div className="container">
          <Header/>
          <Main/>
          <Footer/>
        </div>
      </BrowserRouter>
  );
}
export default App;

import React from 'react';
import './App.css';
import QrCodeChekerPage from "./components/QrCodeCheckerPage/QrCodeCheckPage"
import LegacyModeExample from "./components/QrCodeCheckerPage/QrCodeChecker/LegacyTest";
import {BrowserRouter, Route} from "react-router-dom";
import QuizPage from "./components/quizpage/QuizPage";

function App() {
  return (
      <BrowserRouter>
          <Route exact path='/hi' component={QuizPage}/>
          <Route exact path='/' component={QrCodeChekerPage}/>
      </BrowserRouter>
      );
}

export default App;

import React from 'react';
import {
  Routes,
  Route
} from "react-router-dom";
import ErrorPage from 'pages/ErrorPage';
import LandingPage from 'pages/LandingPage';

const App = () => {
  return (
    <Routes>
    <Route exact path='/' element={<LandingPage />}/>
    <Route exact path='*' element={<ErrorPage/>} />
    </Routes>
  )
}

export default App

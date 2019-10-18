import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage/HomePage';
import LoginPage from './components/pages/LoginPage/LoginPage';
import RegisterPage from './components/pages/RegisterPage/RegisterPage';
import NotFoundPage from './components/pages/NotFoundPage/NotFoundPage';
import ProfilePage from './components/pages/ProfilePage/ProfilePage';
import './App.css';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component = { HomePage }/>
        <Route exact path="/login" component = { LoginPage }/>
        <Route exact path="/register" component = { RegisterPage }/>
        <Route exact path="/profile" component = { ProfilePage }/>
        <Route exact path="/not" component = {NotFoundPage} />
      </BrowserRouter>
    </div>
  );
}

export default App;

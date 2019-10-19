import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './components/pages/HomePage/HomePage';
import LoginPage from './components/pages/LoginPage/LoginPage';
import LogoutPage from './components/pages/LogoutPage/LogoutPage';
import RegisterPage from './components/pages/RegisterPage/RegisterPage';
import NotFoundPage from './components/pages/NotFoundPage/NotFoundPage';
import ProfilePage from './components/pages/ProfilePage/ProfilePage';
import BookListingPage from './components/pages/BookListingPage/BookListingPage';
// import SingleBookPage from './components/pages/SingleBookPage/SingleBookPage'

import './App.css';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component = { HomePage }/>
          <Route exact path="/login" component = { LoginPage }/>
          <Route exact path="/logout" component = { LogoutPage }/>
          <Route exact path="/register" component = { RegisterPage }/>
          <Route path="/profile" component = { ProfilePage }/>
          <Route path="/books" component = { BookListingPage }/>
          {/* <Route exact path="/check" component = { SingleBookPage }/> */}
          <Route path="*" component = {NotFoundPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

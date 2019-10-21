import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './components/pages/HomePage/HomePage';
import LoginPage from './components/pages/LoginPage/LoginPage';
import LogoutPage from './components/pages/LogoutPage/LogoutPage';
import RegisterPage from './components/pages/RegisterPage/RegisterPage';
import NotFoundPage from './components/pages/NotFoundPage/NotFoundPage';
import ProfilePage from './components/pages/ProfilePage/ProfilePage';
import BookListingPage from './components/pages/BookListingPage/BookListingPage';
import SingleBookPage from './components/pages/SingleBookPage/SingleBookPage';
import { connect } from 'react-redux';
import en from './assets/lang/en.json';
import ru from './assets/lang/ru.json';
import { getLang, changeLang } from './actions/common.actions';
import './App.css';
class App extends React.Component {

  componentDidMount() {
    const lang = localStorage.getItem('lang');
    if(lang === 'en') {
      this.props.getLang(en);
      this.props.changeLang('en');
      localStorage.setItem('lang', 'en');
    } else {
      this.props.getLang(ru);
      this.props.changeLang('ru');
      localStorage.setItem('lang', 'ru');
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(prevProps.langName !== this.props.langName) {
      if(this.props.langName === 'en') {
        this.props.getLang(en);
        localStorage.setItem('lang', 'en');
      } else {
        this.props.getLang(ru);
        localStorage.setItem('lang', 'ru');
      }
    }
  }

  render() {
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
            <Route exact path="/book" component = { SingleBookPage }/>
            <Route path="*" component = {NotFoundPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }

}

export function mapStateToProps(state) {
  return {
    langName: state.common.langName
  }
}

export default connect(mapStateToProps, { getLang, changeLang })(App);
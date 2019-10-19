import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';
import './Header.css';
import { connect } from 'react-redux';
const navLinks = [
  {
    link: '/',
    text: 'Главная',
    forAuth: 0
  },
  {
    link: '/listing',
    text: 'Каталог',
    forAuth: 0
  },
  {
    link: '/faq',
    text: 'FAQ',
    forAuth: 0
  },
  {
    link: '/login',
    text: 'Войти',
    forAuth: 1
  },
  {
    link: '/register',
    text: 'Регистрация',
    forAuth: 1
  },
  {
    link: '/profile',
    text: 'Профиль',
    forAuth: 2
  },
  {
    link: '/logout',
    text: 'Выйти',
    forAuth: 2
  }
];
class Header extends Component {
  render() {
    const { token } = this.props;
    return (
      <div className="container-fluid Header">
        <div className="row Header__row">
          <div className="col-2 d-flex justify-content-center align-items-center">
            <NavLink to="/" className="Header__nav__link">
              <img
                className="Header__logo"
                src="https://www.casacatag.it/wp-content/uploads/2018/12/Book-Sharing-Facebook.png"
                alt=""
              />
            </NavLink>
          </div>
          <div className="offset-1 col-9 d-flex justify-content-around align-items-center">
            {navLinks.map((navLink, index) => {
              if (token) {
                return navLink.forAuth === 0 || navLink.forAuth === 2 ? (
                  <NavLink
                    key={index}
                    to={navLink.link}
                    className="Header__nav__link"
                  >
                    {navLink.text}
                  </NavLink>
                ) : null;
              } else {
                return navLink.forAuth === 0 || navLink.forAuth === 1 ? (
                    <NavLink
                      key={index}
                      to={navLink.link}
                      className="Header__nav__link"
                    >
                      {navLink.text}
                    </NavLink>
                  ) : null;
              }
            })}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    token: state.auth.token
  };
}

export default connect(
  mapStateToProps,
  null
)(Header);

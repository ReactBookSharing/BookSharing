import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import { connect } from 'react-redux';
import { changeLang } from '../../../actions/common.actions';
function Header(props) {
  const handleOnClick = e => {
    if (e.target.innerText === 'EN') {
      props.changeLang('en');
    } else {
      props.changeLang('ru');
    }
  };
  const { lang, langName, token } = props;
  const navLinks = [
    {
      link: '/',
      text: lang.HEADER.MAIN,
      forAuth: 0
    },
    {
      link: '/books',
      text: lang.HEADER.LIST,
      forAuth: 0
    },
    {
      link: '/faq',
      text: lang.HEADER.FAQ,
      forAuth: 0
    },
    {
      link: '/login',
      text: lang.HEADER.LOGIN,
      forAuth: 1
    },
    {
      link: '/register',
      text: lang.HEADER.REGISTER,
      forAuth: 1
    },
    {
      link: '/profile',
      text: lang.HEADER.PROFILE,
      forAuth: 2
    },
    {
      link: '/logout',
      text: lang.HEADER.LOGOUT,
      forAuth: 2
    }
  ];
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
          <div className="btn-group">
            {langName === 'en' ? (
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleOnClick}
              >
                RU
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleOnClick}
              >
                EN
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    token: state.auth.token,
    lang: state.common.lang,
    langName: state.common.langName
  };
}

export default connect(
  mapStateToProps,
  { changeLang }
)(Header);

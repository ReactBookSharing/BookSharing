import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom';
import Input from '../inputs/Input/Input'
import './Header.css';

const navLinks = [
    {
      link: '/',
      text: 'Главная',
    },
    {
      link: '/profile',
      text: 'Профиль',
    },
    
  ];
export default class Header extends Component {
    render() {
        return (
            <div className="row Header">
                <img className="Header__logo" src="https://www.casacatag.it/wp-content/uploads/2018/12/Book-Sharing-Facebook.png"/>
                <div className="Header__nav-links"> 
                {navLinks.map((navLink, index) => (
                    <NavLink key={index} to={navLink.link} className="Header__nav__link">
                        {navLink.text}
                    </NavLink>
                ))}
                </div>
                <div className="col-12 d-flex justify-content-between">
                    <Input placeholder="Search"/>
                </div>
            </div>
        )
    }
}

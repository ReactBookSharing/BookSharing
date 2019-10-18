import React, { Component } from 'react'
import Header from '../../shared/Header/Header';
import smile from '../../../assets/images/404.png';
import './NotFoundPage.css';
export default class NotFoundPage extends Component {
    render() {
        return (
          <>
          <Header/>
          <div className="NotFound">
            <div className="NotFound__content">
              <div className="NotFound__404">
                4
                <img className="NotFound__image" src={smile} alt="smile" />4
              </div>
              <div className="NotFound__content--title">Упс... что то пошло не так</div>
            </div>
          </div>
          </>
        );
      }
}

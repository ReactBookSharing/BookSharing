import React, { Component } from 'react'
import Header from '../../shared/Header/Header';
import Footer from '../../shared/Footer/Footer';
import './NotFoundPage.css';
export default class NotFoundPage extends Component {
    render() {
        return (
          <div className="NotFoundPage">
            <Header/>
            <div className="container NotFound__content">
              <div className="row">
                <div className="col-12 NotFound__404">
                  404
                </div>
              </div>
              <div className="row">
                <div className="col-12 NotFound__content--title">Упс... что то пошло не так</div>
              </div>
            </div>
            <Footer/>
          </div>
        );
      }
}

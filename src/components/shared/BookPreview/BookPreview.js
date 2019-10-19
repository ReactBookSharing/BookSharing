import React, { Component } from "react";
import "./BookPreview.css";
class BookPreview extends Component {
  render() {
    const { book } = this.props;
    return (
        <div className="card overflow-hidden">
        <div className="card-header">
          <h3 className="card-title font-weight-bold">{ book.book_name }</h3>
        </div>
        <div className="card-body">
          <div className="row border-0">
            <div className="col-12 col-md-4 BookPreview__wrapper">
              <img alt="BookPreview__img" className="BookPreview__img" src={ book.img }/>
              </div>
            <div className="col-12 col-md-8 BookPreview__right">
              <ul className="usertab-list mb-0">
                <li>
                  <span className="font-weight-semibold">Name: {book.book_name}</span>{' '}
                </li>
                <li>
                  <span className="font-weight-semibold">Author: {book.book_author}</span>{' '}
                </li>
                <li>
                  <span className="font-weight-semibold">Owner: {book.created_year}</span>{' '}
                </li>
                <li>
                  <span className="font-weight-semibold">Published: {book.book_owner.name} {book.book_owner.surname}</span>{' '}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BookPreview;

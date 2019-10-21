import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bookToSee } from '../../../actions/book.actions';
import { Link } from 'react-router-dom';
import './BookPreview.css';
class BookPreview extends Component {
  componentDidMount() {
    
  }
  handleOnClick = () => {
    this.props.bookToSee(this.props.book);
    // this.props.history.push('/book');
  };

  render() {
    const { book } = this.props;
    return (
      <div className="card overflow-hidden">
        <div className="card-header">
          <Link to="/book">
            <h3
              className="card-title font-weight-bold"
              onClick={this.handleOnClick}
            >
              {book.title}
            </h3>
          </Link>
        </div>
        <div className="card-body">
          <div className="row border-0">
            <div className="col-12 col-md-4 BookPreview__wrapper">
              <img
                alt="BookPreview__img"
                className="BookPreview__img"
                src={book.photos[0]}
              />
            </div>
            <div className="col-12 col-md-8 BookPreview__right">
              <ul className="usertab-list mb-0">
                <li>
                  <span className="font-weight-semibold">
                    Название: {book.title}
                  </span>{' '}
                </li>
                <li>
                  <span className="font-weight-semibold">
                    Автор: {book.author}
                  </span>{' '}
                </li>
                <li>
                  <span className="font-weight-semibold">
                    Год выпуска: {book.release_year}
                  </span>{' '}
                </li>
                <li>
                  <span className="font-weight-semibold">
                    Владелец: {book.owner.user.name} {book.owner.user.surname}
                  </span>{' '}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { bookToSee }
)(BookPreview);

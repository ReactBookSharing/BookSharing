import React, { Component } from 'react'
import Header from '../../shared/Header/Header';
import Footer from'../../shared/Footer/Footer';
import BookList from '../../shared/BookList/BookList';
import BookFiltering from './BookFiltering/BookFiltering';
import back from '../../../assets/mockup.json';
import './BookListingPage.css';
import { connect } from 'react-redux';
class BookListingPage extends Component {
    state = {
      books: back.books
    };

    componentDidMount() {}

    render() {
        const { books } = this.state;
        // const { books } = this.props;
        return (
            <div className="BookListingPage">
            <Header />
            <div className="container BookListingPage__container">
              <div className="row">
                <BookList books={ books } className="col-xl-9 col-lg-9 col-md-12"/>
                <BookFiltering className="BookList col-xl-3 col-lg-3 col-md-12"/>
              </div>
            </div>
            <Footer />
          </div>
        )
    }
}

export function mapStateToProps(state) {
  return {
    books: state.book.allBooks
  }
}

export default connect(mapStateToProps, null)(BookListingPage);
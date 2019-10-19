import React, { Component } from 'react'
import Header from '../../shared/Header/Header';
import Footer from'../../shared/Footer/Footer';
import BookList from '../../shared/BookList/BookList';
import BookFiltering from './BookFiltering/BookFiltering';
import './BookListingPage.css';
class BookListingPage extends Component {
    state = {
        books: []
    };

    componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    render() {
        const { books } = this.state;
        return (
            <div className="BookListingPage">
            <Header />
            <div className="container BookListingPage__container">
              <div className="row">
                <BookList books={ books } className=""/>
                <BookFiltering/>
              </div>
            </div>
            <Footer />
          </div>
        )
    }
}

export default BookListingPage;
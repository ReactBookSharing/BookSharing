import React, { Component } from 'react'
import Header from '../../shared/Header/Header';
import Footer from'../../shared/Footer/Footer';
import BookList from '../../shared/BookList/BookList';
import BookFiltering from './BookFiltering/BookFiltering';
import './BookListingPage.css';
import { connect } from 'react-redux';
class BookListingPage extends Component {
    state = {
      books: [
        {
            img: 'https://prodimage.images-bn.com/pimages/9780062024329_p0_v1_s550x406.jpg',
            book_name: 'Alchemist',
            book_author: 'Paulo Coelho',
            created_year: 2017,
            book_owner: 
                {
                    id: 1,
                    name: 'Derbes',
                    surname: 'Utebaliyev',
                    username: 'derbess',
                    email: 'uderbes@gmail.com',
                    mobile: '+77471194810',
                }
        },
        {
            img: 'https://images.penguinrandomhouse.com/cover/9780451205766',
            book_name: 'The Godfather',
            book_author: 'Mario Puzo',
            created_year: 2015,
            book_owner:
            {
                id: 2,
                name: 'Askar',
                surname: 'Musaev',
                username: 'aseke7182',
                email: 'aseke7182@mail.ru',
                mobile: '+77758551618',
            }
        }
    ]
    };

    componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }

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
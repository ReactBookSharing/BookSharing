import React, { Component } from 'react'
import './BookPreview.css';
class BookPreview extends Component {
    render() {
        const { book } = this.props;
        console.log(this.props);
        return (
            <div className="book-preview">
                <img className="book-preview-img" src={book.img} />
                <div className="book-preview-info">
                    <h2>Book Name: <b>{book.book_name}</b></h2>
                    <h5>Book Author: <b>{book.book_author}</b></h5>
                    <h5>Published year: <b>{book.created_year}</b></h5>
                    <h5>Book owner: <b>{book.book_owner.name}</b></h5>

                </div>
            </div>
        )
    }
}

export default BookPreview;
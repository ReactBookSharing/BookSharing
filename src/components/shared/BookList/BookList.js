import React, { Component } from 'react';
import './BookList.css';
import BookPreview from '../BookPreview/BookPreview';
class BookList extends Component {

    render() {
        const { books, className } = this.props;
        return (
            <div className={`BookList ${className}`}>
                {
                    books.map((book, index) => {
                        return (
                            <BookPreview book={book} key={index}/>
                        );
                    })
                }
            </div>
        )
    }
}

export default BookList;
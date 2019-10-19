import React, { Component } from 'react'
import './BookPreview.css';
class BookPreview extends Component {
    render() {
        const { book } = this.props;
        console.log(this.props);
        return (
            <div className="row">
                <div class="card mb-0 col-md-6">
                <div class="card-body">
                <div class="border-0">
                    <div className="row">
                    <div className="col-md-2 offset-1 d-flex flex-column align-items-center">
                        <img className="Book-preview-img" src={book.img} />
                    </div>
                    <div className="col-md-6">
                        <h2 className="Book-name"><b>{book.book_name}</b></h2>
                        <div className="Book-info">
                            <h5 className="Book-author">Book Author: <b>{book.book_author}</b></h5>
                            <h5 className="Published-year">Published year: <b>{book.created_year}</b></h5>
                            <h5 className="Book-owner">Book owner: <b>{book.book_owner.name}</b></h5>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        )
    }
}

export default BookPreview;
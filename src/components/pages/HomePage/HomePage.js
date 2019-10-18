import React, { Component } from 'react'
import Header from '../../shared/Header/Header';
import Footer from '../../shared/Footer/Footer';
import BookPreview from '../../shared/BookPreview/BookPreview';
class HomePage extends Component {
    state=  {
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
    }
    render() {
        const { books } = this.state;

        return (
            <div className="HomePage">
                <Header/>
                <div className="container">
                    <div className="books-list">
                        {books.map((book) => (
                            <BookPreview book={book}/>
                        ))}
                    </div>
                </div>
                <Footer/>
            </div>

        )
    }
}
export default HomePage;
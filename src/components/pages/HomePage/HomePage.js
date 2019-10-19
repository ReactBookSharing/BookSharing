import React, { Component } from 'react'
import Header from '../../shared/Header/Header';
import Footer from '../../shared/Footer/Footer';
import BookPreview from '../../shared/BookPreview/BookPreview';
import './HomePage.css';
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
                <div className="Main-page-preview">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5">
                                <h1>Give books away. <br></br>Get books you want</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras viverra lorem orci, nec tincidunt erat condimentum eu. Maecenas pellentesque leo eget accumsan semper. Maecenas malesuada augue id sodales tincidunt. Fusce varius eros eget lobortis feugiat. Proin aliquam placerat libero. Nulla ut arcu et nulla condimentum fermentum at non mauris. Maecenas a magna neque. Suspendisse potenti. Nunc erat risus, accumsan ut quam quis, aliquam tincidunt leo.
                                </p>
                                <br/>
                                <form action="http://localhost:3000/register">
                                    <input class="btn btn-success"  type="submit" value="Начать" />
                                </form>
                            </div>
                            <div className="col-md-1"></div>
                            <div className="col-md-4">
                                <img className="MainPage-img" src='https://media.ldscdn.org/images/media-library/member-missionary/sharing-book-mormon-1379950-gallery.jpg' />
                            </div>
                        </div>
                    </div>
                </div>
{/* 
                <div className="container">
                    <div className="row">
                        <div className="col-md-10">
                            <div className="books-list">
                                {books.map((book) => (
                                    <BookPreview book={book}/>
                                ))}
                            </div>
                        </div>
                    </div>
                </div> */}
                <Footer/>
            </div>

        )
    }
}
export default HomePage;
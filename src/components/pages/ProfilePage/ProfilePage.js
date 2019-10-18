import React, { Component } from 'react'
import BookPreview from '../../shared/BookPreview/BookPreview';


export default class ProfilePage extends Component {
    state = {
        profile: {
            name: 'Derbes',
            surname: 'Utebaliyev',
            username: 'derbess',
            phone_number: '+77471194810',
            books: [
                {
                    img: 'https://prodimage.images-bn.com/pimages/9780062024329_p0_v1_s550x406.jpg',
                    book_name: 'Alchemist',
                    book_author: 'Paulo Coelho',
                    created_year: 2017
                },
                {
                    img: 'http://prodimage.images-bn.com/pimages/2940013851351_p0_v1_s1200x630.jpg',
                    book_name: 'Anna Karenina',
                    book_author: 'Leo Tolstoy',
                    created_year: 2010,
                }
            ] 
        }
    }
    render() {
        const {profile} = this.state;
        const {books} = this.state.profile;
        return (
            <div className="profile">
                <div className="profile__query">
                    <h3>Profile page</h3>
                </div>
            </div>
        )
    }
}

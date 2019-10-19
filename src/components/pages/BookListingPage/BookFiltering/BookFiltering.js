import React, { Component } from 'react';
import './BookFiltering.css';
import { connect } from 'react-redux';
import { getAllBooks } from '../../../../actions/book.actions';
// import request from '../../../../services/requests';
class BookFiltering extends Component {
  state = {
    filter: '',
    categories: [
      'Author',
      'Fiction',
      'Anthology',
      'Anthology',
      'Romance',
      'Horror',
      'Biography',
      'Drama'
    ]
  };

  handleOnChange = e => {
    this.setState({
      filter: e.target.value
    });
    // request to back
    const response = {
      data: [
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
    this.props.getAllBooks(response);
  };

  render() {
    const { categories } = this.state;
    return (
      <div className="BookFilter col-xl-3 col-lg-3 col-md-12">
        <div className="card overflow-hidden">
          <div className="px-4 py-3 border-bottom">
            <h4 className="mb-0">Categories</h4>
          </div>
          <div className="card-body">
            <div className="" id="container">
              <div className="filter-product-checkboxs">
                {categories.map((name, index) => (
                  <label className="custom-control custom-checkbox mb-3" key={index}>
                    <input
                      type="radio"
                      className="custom-control-input"
                      name="filter"
                      value={name}
                      onChange={this.handleOnChange}
                    />
                    <span className="custom-control-label">
                      {name}
                      <span className="label label-secondary float-right"></span>
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { getAllBooks })(BookFiltering);

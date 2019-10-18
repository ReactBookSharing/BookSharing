import React, { Component } from 'react';
import './SingleBookPage.css';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';

class SingleBookPage extends Component {
  state = {
    values: {}
  };

  componentDidMount() {

  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    
  }

  handleSubmit = values => {
    this.setState({
      values
    });
  };

  validateForm = values => {
    
  };

  
  render() {
    return (
    	<div className="SingleBook">
            <div className="container-fluid ">
            	<h1>Alchemist</h1>
            	<div className="row">
            		<div className="col-md-3 offset-1 d-flex flex-column align-items-center">
            				<img className="book-preview-img " src='https://prodimage.images-bn.com/pimages/9780062024329_p0_v1_s550x406.jpg'/>
            				<br></br>
            				<br></br>
            				<button type="button">Exchange</button>
            		</div> 
            		<div className="col-md-8">
            			<h5>By: Paolo Coelho</h5>
            			<h2>Synopsis</h2>
            			<p>
            				The Alchemist (Portuguese: O Alquimista) is a novel by Brazilian author Paulo Coelho that was first published in 1988. Originally written in Portuguese, it became a widely translated international bestseller. An allegorical novel, The Alchemist follows a young Andalusian shepherd in his journey to the pyramids of Egypt, after having a recurring dream of finding a treasure there.
            			</p>
            			<p>Copyright: 1988</p>
            			<h2>Book Details</h2>
            			<ul>
            				<li>Book Quality: Publisher Quality</li>
            				<li>ISBN-13: 9788186685693</li>
            				<li>Publisher: Wisdom Tree</li>
            				<li>Date of Addition: 02/28/2017</li>
            				<li>Adult Content: NO</li>
            				<li>Language: English</li>
            				<li>Categories: Children's Books, Teens, Literature and Fiction</li>
            			</ul>
            		</div>
            	</div>
            </div>
        </div>
    );
  }
}


export default SingleBookPage;
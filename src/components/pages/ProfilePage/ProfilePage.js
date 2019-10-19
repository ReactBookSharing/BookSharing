import React, { Component } from 'react';
import BookPreview from '../../shared/BookPreview/BookPreview';
import Header from '../../shared/Header/Header';
import Footer from '../../shared/Footer/Footer';
import ProfileLeft from './ProfileLeft/ProfileLeft';
import ProfileRight from './ProfileRight/ProfileRight';
import ProfileEdit from './ProfileEdit/ProfileEdit';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import profileImg from '../../../assets/images/profile.png';
import './ProfilePage.css';
class ProfilePage extends Component {
  state = {
    profile: {
      name: 'Derbes',
      surname: 'Utebaliyev',
      username: 'derbess',
      phone_number: '+77471194810',
      photo: profileImg,
      books: [
        {
          img:
            'https://prodimage.images-bn.com/pimages/9780062024329_p0_v1_s550x406.jpg',
          book_name: 'Alchemist',
          book_author: 'Paulo Coelho',
          created_year: 2017
        },
        {
          img:
            'http://prodimage.images-bn.com/pimages/2940013851351_p0_v1_s1200x630.jpg',
          book_name: 'Anna Karenina',
          book_author: 'Leo Tolstoy',
          created_year: 2010
        }
      ]
    }
  };
  render() {
    const { profile } = this.state;
    const { books } = this.state.profile;
    return (
      <div className="ProfilePage">
        <Header />
        <div className="container ProfilePage__container">
          <div className="row">
            <ProfileLeft
              profile={profile}
              className={'col-xl-3 col-lg-12 col-md-12'}
            />
            <Switch>
              <Route
                exact
                path="/profile"
                component={() => <ProfileRight className="col-xl-9 col-lg-12 col-md-12" profile={profile}/>}
              />
              <Route
                exact
                path="/profile/edit"
                component={() => <ProfileEdit className="col-xl-9 col-lg-12 col-md-12" profile={profile} />}
              />
            </Switch>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default ProfilePage;

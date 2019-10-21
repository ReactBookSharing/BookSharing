import React, { Component } from 'react';
import Header from '../../shared/Header/Header';
import Footer from '../../shared/Footer/Footer';
import ProfileLeft from './ProfileLeft/ProfileLeft';
import ProfileRight from './ProfileRight/ProfileRight';
import ProfileEdit from './ProfileEdit/ProfileEdit';
import BookList from '../../shared/BookList/BookList';
import { Route, Switch } from 'react-router-dom';
import profileImg from '../../../assets/images/profile.png';
import { connect } from 'react-redux';
import back from '../../../assets/mockup.json';
import './ProfilePage.css';
class ProfilePage extends Component {
  state = {
    profile: {
      name: 'Derbes',
      surname: 'Utebaliyev',
      username: 'derbess',
      phone: '+77471194810',
      email: 'codefazzer@gmail.com',
      photo: profileImg,
      rating: 4.5,
      interests:
        'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus how to pursue pleasure rationally encounter but because those who do not know how to pursue consequences that are extremely',
      address: 'Алматы, Радостовца 4'
    },
    books: back.books
  };
  render() {
    const { profile } = this.state;
    // const { profile } = this.props;  instead of state
    const { books } = this.state;
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
                component={() => (
                  <ProfileRight
                    className="col-xl-9 col-lg-12 col-md-12"
                    profile={profile}
                  />
                )}
              />
              <Route
                exact
                path="/profile/edit"
                component={() => (
                  <ProfileEdit
                    className="col-xl-9 col-lg-12 col-md-12"
                    profile={profile}
                  />
                )}
              />
              <Route
                exact
                path="/profile/books"
                component={() => (
                  <BookList
                    className="col-xl-9 col-lg-12 col-md-12 mt-0"
                    books={books}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    profile: state.profile.profile
  };
}

export default connect(
  mapStateToProps,
  null
)(ProfilePage);

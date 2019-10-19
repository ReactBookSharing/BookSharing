import React, { Component } from 'react';
import './ProfileEdit.css';
import { Formik } from 'formik';
import Input from '../../../shared/inputs/Input/Input';
import Button from '../../../shared/buttons/Button/Button';
import { connect } from 'react-redux';
import { editProfile } from '../../../../actions/profile.actions';
import requests from '../../../../services/requests';
class ProfileEdit extends Component {
  state = {
    values: {}
  };

  componentDidMount() {
      const { profile } = this.props;
      const values = {
        username: profile.username,
        email: profile.email,
        name: profile.name,
        surname: profile.surname,
        phone: profile.phone,
        password: '',
      }
      this.setState({values});
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.values !== this.state.values) {
        
    }
  }

  handleSubmit = values => {
    this.setState({
      values
    });
    console.log(values);
    // request to back to edit profile
    // requests.profiles.editProfile(values)
    //     .then(response => {
    //         this.props.editProfile(response);
    //     })
    //     .catch(errors => { console.log(errors)});

  };

  validateForm = values => {
    const errors = {};
    if (!values.username) {
      errors.username = 'Введите имя пользователя';
    }
    if (!values.email) {
      errors.email = 'Введите почту';
    }
    if (!values.name) {
      errors.name = 'Введите имя';
    }
    if (!values.surname) {
      errors.surname = 'Введите фамилию';
    }
    if (!values.phone) {
      errors.phone = 'Введите телефон';
    }
    if (!values.password) {
      errors.password = 'Введите пароль';
    }

    return errors;
  };

  renderForm = ({
    handleSubmit,
    handleChange,
    errors,
    setFieldTouched,
    touched
  }) => {
    const { values } = this.state;
    return (
      <form className="RegisterPage__form" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-12 col-md-6">
            <Input
              name="username"
              type="text"
              placeholder="Имя пользователя"
              label="Имя пользователя"
              onBlur={() => setFieldTouched('username')}
              onChange={handleChange}
              error={errors.username}
              touched={touched.username}
              className="Input"
            />
          </div>
          <div className="col-12 col-md-6">
            <Input
              name="email"
              type="email"
              placeholder="Почта"
              label="Почта"
              onBlur={() => setFieldTouched('email')}
              onChange={handleChange}
              error={errors.email}
              touched={touched.email}
              className="Input"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6">
            <Input
              name="name"
              type="text"
              placeholder="Имя"
              label="Имя"
              onBlur={() => setFieldTouched('name')}
              onChange={handleChange}
              error={errors.name}
              touched={touched.name}
              className="Input"
            />
          </div>
          <div className="col-12 col-md-6">
            <Input
              name="surname"
              type="text"
              placeholder="Фамилия"
              label="Фамилия"
              onBlur={() => setFieldTouched('surname')}
              onChange={handleChange}
              error={errors.surname}
              touched={touched.surname}
              className="Input"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6">
            <Input
              maskType="phone"
              className="Input"
              placeholder="+7 (___) _______"
              name="phone"
              onChange={handleChange}
              onBlur={() => setFieldTouched('phone')}
              touched={touched.phone}
              error={errors.phone}
              label="Номер телефона"
              masked
            />
          </div>
          <div className="col-12 col-md-6">
            <Input
              name="password"
              type="text"
              placeholder="Пароль"
              label="Пароль"
              onBlur={() => setFieldTouched('password')}
              onChange={handleChange}
              error={errors.password}
              touched={touched.password}
              className="Input"
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6">
            {!(
              Object.entries(errors).length === 0 &&
              errors.constructor === Object
            ) ? (
              <Button
                className="btn btn-danger"
                type="submit"
                text="Сохранить"
                onClick={() => {}}
                disabled
              />
            ) : (
              <Button
                className="btn btn-success"
                type="submit"
                text="Сохранить"
                onClick={() => {}}
              />
            )}
          </div>
        </div>
      </form>
    );
  };

  render() {
    const { profile } = this.props;
    const { values } = this.state;
    return (
      <div className="col-xl-9 col-lg-12 col-md-12">
        <div className="card mb-0">
          <div className="card-header">
            <h3 className="card-title">Редактировать Профиль</h3>
          </div>
          <div className="card-body">
            <Formik
              onSubmit={values => {
                this.handleSubmit(values);
              }}
              render={this.renderForm}
              validate={this.validateForm}
              initialValues={ values }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { editProfile })(ProfileEdit);

import React, { Component } from 'react';
import './LoginPage.css';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import Input from '../../shared/inputs/Input/Input';
import MaskedInput from '../../shared/inputs/MaskedInput/MaskedInput';
import Button from '../../shared/buttons/Button/Button';

class LoginPage extends Component {
  handleSubmit = values => {
    const { username, password } = values;

  };

  validateForm = values => {
    const errors = {};
    if(!values.username) {
      errors.username = 'Введите имя пользователя';
    } else {
      if(values.username.length <= "8") {
        errors.username = 'Слишком коротко!'
      }
    }

    if(values.password) {
      errors.password = 'Введите пароль';
    }
    return errors;
  };

  renderForm = ({ handleSubmit, handleChange, errors, setFieldTouched, touched }) => (
    <form className="LoginPage__form" onSubmit={handleSubmit}>
      <Input name="username" type="text" />
      <Input name="username" type="password" />
      <div className="LoginPage__form__button-group">
        <Link to="/register">
          <Button className="button" type="button" text="Регистрация"/>
        </Link>
        <Button className="button button-login" type="submit" text="Войти"/>
      </div>
    </form>
  );

  render() {
    return (
      <div className="LoginPage">
        <div className="LoginPage__left">
            <h1 className="LoginPage__left__text-white">BookSharing вас приветсвует!</h1>
        </div>
        <div className="LoginPage__right">
            <Formik
              onSubmit={ values => { this.handleSubmit(values)}}
              render={this.renderForm}
              validate={this.validateForm}
              initialValues={{
                username: '',
                password: ''
              }}
            />
        </div>
      </div>
    );
  }
}

export default LoginPage;

import React, { Component } from 'react';
import './LoginPage.css';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import Input from '../../shared/inputs/Input/Input';
import Button from '../../shared/buttons/Button/Button';

class LoginPage extends Component {
  handleSubmit = values => {
    console.log(values);
  };

  validateForm = values => {
    const errors = {};
    if (!values.username) {
      errors.username = 'Введите имя пользователя';
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
  }) => (
    <form className="LoginPage__form" onSubmit={handleSubmit}>
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
      <Input
        name="password"
        type="password"
        placeholder="Пароль"
        label="Пароль"
        onBlur={() => setFieldTouched('password')}
        onChange={handleChange}
        error={errors.password}
        touched={touched.password}
        className="Input"
      />
      <div className="LoginPage__form__button-group">
        <Link to="/register">
          <Button
            className="button button-transparent"
            type="button"
            text="Регистрация"
            onClick={() => {}}
          />
        </Link>
        <Button
          className="button button-filled"
          type="submit"
          text="Войти"
          onClick={() => {}}
          disabled={
            !(
              Object.entries(errors).length === 0 &&
              errors.constructor === Object
            )
          }
        />
      </div>
    </form>
  );

  render() {
    return (
      <div className="LoginPage">
        <div className="LoginPage__left">
          <h1 className="LoginPage__left__text-white">
            BookSharing вас приветсвует!
          </h1>
        </div>
        <div className="LoginPage__right">
          <Formik
            onSubmit={values => {
              this.handleSubmit(values);
            }}
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

import React, { useState, useEffect } from 'react';
import './RegisterPage.css';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import Input from '../../shared/inputs/Input/Input';
import Button from '../../shared/buttons/Button/Button';
import { connect } from 'react-redux';
import { login, register } from '../../../actions/auth.actions';
function RegisterPage(props){
  const [values, setValues] = useState({});

  useEffect(() => {
    if(values.username) {
      props.login(values);
      props.history.push('/profile');
    }
  }, [values, props]);


  const handleSubmit = newValues => {
    setValues(newValues);
  };

  const validateForm = values => {
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
    if (!values.whatsapp) {
      errors.whatsapp = 'Введите номер ватсап';
    }
    if (!values.password1) {
      errors.password1 = 'Введите пароль';
    }

    if (!values.password2) {
      errors.password2 = 'Повторите пароль';
    }

    if (values.password1 !== values.password2) {
      errors.password2 = 'Пароли не совпадают';
    }

    return errors;
  };

  const renderForm = ({
    handleSubmit,
    handleChange,
    errors,
    setFieldTouched,
    touched
  }) => (
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
            required
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
            required
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
            required
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
            required
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
            required
            masked
          />
        </div>
        <div className="col-12 col-md-6">
          <Input
            maskType="whatsapp"
            className="Input"
            placeholder="+7 (___) _______"
            name="whatsapp"
            onChange={handleChange}
            onBlur={() => setFieldTouched('whatsapp')}
            touched={touched.phone}
            error={errors.phone}
            label="Номер Whatsapp"
            required
            masked
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6">
          <Input
            name="password1"
            type="text"
            placeholder="Пароль"
            label="Пароль"
            onBlur={() => setFieldTouched('password1')}
            onChange={handleChange}
            error={errors.password1}
            touched={touched.password1}
            className="Input"
            required
          />
        </div>
        <div className="col-12 col-md-6">
          <Input
            name="password2"
            type="text"
            placeholder="Повторите пароль"
            label="Повторите пароль"
            onBlur={() => setFieldTouched('password2')}
            onChange={handleChange}
            error={errors.password2}
            touched={touched.password2}
            className="Input"
            required
          />
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-md-6">
          <Link to="/login">
            <Button
              className="button-transparent button-full margin-no margin-top-bottom-default"
              type="button"
              text="Войти"
              onClick={() => {}}
            />
          </Link>
        </div>
        <div className="col-12 col-md-6">
          <Button
            className="button-filled button-full margin-no margin-top-bottom-default"
            type="submit"
            text="Регистрация"
            onClick={() => {}}
            disabled={
              !(
                Object.entries(errors).length === 0 &&
                errors.constructor === Object
              )
            }
          />
        </div>
      </div>
    </form>
  );

  // render() {
    return (
      <div className="RegisterPage">
        <div className="container RegisterPage__container">
          <div className="row">
            <div className="col-12 d-flex justify-content-center align-items-center text-center ">
              <h1 className="RegisterPage__title d-flex align-items-center">Регистрация</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-8 offset-2">
              <Formik
                onSubmit={values => {
                  handleSubmit(values);
                }}
                render={renderForm}
                validate={validateForm}
                initialValues={{
                  username: '',
                  email: '',
                  name: '',
                  surname: '',
                  phone: '',
                  whatsapp: '',
                  password1: '',
                  password2: ''
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  // }
}

export default connect(null, { login, register })(RegisterPage);

import React, { Component } from 'react';
import './LoginPage.css';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import Input from '../../shared/inputs/Input/Input';
import Button from '../../shared/buttons/Button/Button';
import {connect} from "react-redux";
import { login } from "../../../actions/auth.actions";
class LoginPage extends Component {

  state = {
    values: {}
  };

  componentDidMount() {
    if(this.props.token) {
      localStorage.setItem('token', this.props.token);
    } else {
      const token = localStorage.getItem('token');
      if(token) {
        //updateHeader('Authorization', `Token ${token}`);
        this.props.history('/profile');
      }
    }
  }
  
  componentDidUpdate(prevProps, prevState, snapshot) {
    if(prevState.values !== this.state.values) {
      // here should request to back
      const response = {
        token: 'asdfadsfasdfasdfsa324234423'
      };
      localStorage.setItem('token', response.token);
      this.props.login(response);
    }
  }

  handleSubmit = values => {
    this.setState({
      values
    });
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
      <div className="row">
        <div className="col-12">
          <Input
            name="username"
            type="text"
            placeholder="Имя пользователя"
            label="Имя пользователя"
            onBlur={() => setFieldTouched('username')}
            onChange={handleChange}
            error={errors.username}
            touched={touched.username}
            className=""
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Input
            name="password"
            type="password"
            placeholder="Пароль"
            label="Пароль"
            onBlur={() => setFieldTouched('password')}
            onChange={handleChange}
            error={errors.password}
            touched={touched.password}
            className=""
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6">
          <Link to="/register">
            <Button
              className="button-transparent button-full margin-no margin-top-bottom-default"
              type="button"
              text="Регистрация"
              onClick={() => {}}
            />
          </Link>
        </div>
        <div className="col-12 col-md-6">
          <Button
            className="button-filled button-full margin-no margin-top-bottom-default"
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
      </div>
    </form>
  );

  render() {
    return (
      <div className="LoginPage">
        <div className="container LoginPage__content">
          <div className="row">
            <div className="col-12">
              <h1 className="LoginPage__title text-center">Логин</h1>
            </div>
          </div>
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


export function mapStateToProps(state) {
  return {
    token: state.profile.token
  }
}

export default connect(mapStateToProps, { login })(LoginPage);

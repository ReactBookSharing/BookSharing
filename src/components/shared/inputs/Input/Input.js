import React, { Component } from 'react';
import ReactMaskedInput from 'react-text-mask';
import './Input.css';

const phoneMask = [
  '+',
  '7',
  ' ',
  '(',
  /\d/,
  /\d/,
  /\d/,
  ')',
  ' ',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];

class Input extends Component {
  render() {
    const {
      type,
      className,
      error,
      touched,
      name,
      onChange,
      onBlur,
      label,
      placeholder,
      value,
      required,
      masked,
      inputMask
    } = this.props;

    return (
      <div className="Input__wrapper">
        <label className="Input__label">
          {label}
          {required && <span className="required--red">*</span>}
        </label>
        {!masked ? (
          <input
            className={`Input ${className} ${
              touched && error ? 'Input__error-border' : ''
            }`}
            type={type ? type : 'text'}
            name={name}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            value={value}
          />
        ) : (
          <ReactMaskedInput
            className={`input ${className} ${
              touched && error ? 'Input__error-border' : ''
            }`}
            type={type}
            name={name}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            mask={inputMask ? inputMask : phoneMask}
            value={value}
          />
        )}
        {touched && error && <p className="Input__error">{error}</p>}
      </div>
    );
  }
}

export default Input;

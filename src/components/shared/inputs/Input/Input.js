import React, { Component } from 'react'
import './Input.css';
import Tip from '../../Tip/Tip';
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
          tipText,
        } = this.props;
    
        return (
          <div className={`input__wrapper`}>
            <label className="input__label">
              {label}
              {required && <span className="text--red">*</span>}
            </label>
            <input
              className={`input ${className} ${touched && error ? 'input--error' : ''}`}
              type={type ? type : 'text'}
              name={name}
              onChange={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              value={value}
            />
            {touched && error && <p className="input__error">{error}</p>}
            {tipText && <Tip text={tipText} />}
          </div>
        );
      }
}


export default Input;
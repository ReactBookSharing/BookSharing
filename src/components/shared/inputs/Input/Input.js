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
          <div className={`Input__wrapper`}>
            <label className="Input__label">
              {label}
              {required && <span className="text--red">*</span>}
            </label>
            <input
              className={`Input ${className} ${touched && error ? 'Input__error-border' : ''}`}
              type={type ? type : 'text'}
              name={name}
              onChange={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              value={value}
            />
            {touched && error && <p className="Input__error">{error}</p>}
            {tipText && <Tip text={tipText} />}
          </div>
        );
      }
}


export default Input;
import React, { Component } from 'react'
import './Button.css';
class Button extends Component {
    render() {
        const { className, text, onClick, type, disabled } = this.props;
        return (
            <button className={`${className} ${disabled ? 'button-disaled': ''} `} type={type} disabled={disabled} onClick={onClick}>{ text }</button>
        );
    }
}

export default Button;
import React from 'react';
import propTypes from 'prop-types';
import textField from './TextField.module.scss';

const TextField = ({ onChange, value, placeholder, className, ...attr }) => (
    <div className={`${textField.textField} ${className}`}>
        <input 
            onChange={onChange} 
            placeholder={placeholder}
            value={value}
            {...attr} />
    </div>
)

TextField.propTypes = {
    onChange: propTypes.func,
    value: propTypes.oneOfType([
        propTypes.number,
        propTypes.string
    ]),
    placeholder: propTypes.oneOfType([
        propTypes.number,
        propTypes.string
    ]),
}

export default TextField;
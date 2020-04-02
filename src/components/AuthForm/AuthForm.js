import React, { useState } from 'react';
import './authForm.scss';
import TextField from '../TextField/TextField';
import Button from '../Button/Button';

const AuthForm = ({ sendForm, className, ...attr }) => {
    const [name, setName] = useState('');
    const [password, setPassword ] = useState('');
    const [valid, setValid] = useState(true);

    const changeFieldName = ({ target }) => {
        setName(target.value);
    };

    const changeFieldPassword = ({ target }) => {
        setPassword(target.value);
    };

    const submitForm = () => {
        if(name.length < 3) {
            setValid(false);
        } else if(password.length < 4) {
            setValid(false);
        } else {
            setValid(true);
            sendForm({ name, password });
        }
    }

    return (
        <form className={`auth-form ${className}`} {...attr}>
            <TextField 
                value={name}
                name="name"
                onChange={changeFieldName}
                className="auth-form__input" 
                placeholder="Please enter a name" />
            <TextField 
                value={password}
                name="password"
                type="password"
                onChange={changeFieldPassword}
                className="auth-form__input"
                placeholder="Enter your password" />
            {   !valid &&
                <span className="auth-form__error-message">
                    Перевірте правильність вводу даних
                </span>
            }
            <Button type="button" onClick={submitForm} >Sing up</Button>
        </form>
    )
}

export default AuthForm;
import React, { useState } from 'react'
import './registration.scss';
import { connect } from 'react-redux';
import { singUp } from '../../redux/actions/auth';
import { useHistory } from 'react-router-dom';
import AuthForm from '../../components/AuthForm/AuthForm';

const Registration = ({ singUp }) => {
    const history = useHistory();
    const sendData = ({name, password}) => {
        singUp({name, password})
            .then(() => {
                history.push('/login');
            });
    }

    return (
        <div className="registration">
            <h2 className="registration__title">
                Registration
            </h2>
            <AuthForm sendForm={sendData}/>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    singUp: (data) => dispatch(singUp(data)),
});

export default connect(null, mapDispatchToProps)(Registration);
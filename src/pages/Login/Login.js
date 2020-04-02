import React from 'react';
import { useHistory, Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signIn } from '../../redux/actions/auth';
import AuthForm from '../../components/AuthForm/AuthForm';
import './login.scss';
import { compose } from 'recompose';
import authUser from '../../components/HOC/AuthUser/AuthUser';

const Login = ({ signIn, auth }) => {
    const history = useHistory();
    
    const authUser = ({name, password}) => {
        signIn({name, password})
            .then(() => history.push('/todo-list'));
    }

    return (
        <div className="login-page">
            {   auth &&
                    <Redirect to="/" />
            }
            <h1>login page</h1>
            <AuthForm sendForm={authUser} />
            <hr />
            <Link to="/registration" className="login-page__link">Registration</Link>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    signIn: (data) => dispatch(signIn(data))
});

export default compose(
    connect(null, mapDispatchToProps),
    authUser
)(Login);
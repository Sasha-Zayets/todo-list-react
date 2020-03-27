import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { signIn } from '../../redux/actions/auth';
import AuthForm from '../../components/AuthForm/AuthForm';

const Login = ({ signIn }) => {
    const history = useHistory();

    const authUser = ({name, password}) => {
        signIn({name, password})
            .then(() => history.push('/home'));
    }

    return (
        <div className="login-page">
            <h1>login page</h1>
            <AuthForm sendForm={authUser} />
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    signIn: (data) => dispatch(signIn(data))
});

export default connect(null, mapDispatchToProps)(Login);
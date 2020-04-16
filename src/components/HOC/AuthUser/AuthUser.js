import React from 'react'
import { connect } from 'react-redux';

const authUser = (Component) => {
    class AuthUser extends React.PureComponent {
        render() {
            return <Component {...this.props}/>
        }
    }

    const mapStateToProps = (state) => ({
        auth: state.auth.auth
    });
    return connect(mapStateToProps)(AuthUser);
}

export default authUser;
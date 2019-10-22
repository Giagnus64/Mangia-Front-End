import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser, logoutUser, createUser } from '../actions/loginActions';
import {Box} from 'react-bulma-components';
import LoginForm from '../components/LoginForm';
import ErrorMessages from '../components/ErrorMessages';

class LoginPage extends Component {
    
    render(){
        return (
            <Box className="login-container">
                <LoginForm loginUser={this.props.loginUser} createUser={this.props.createUser} />
                {this.props.errors.length !== 0 ? <ErrorMessages errors={this.props.errors}/> : false}
            </Box>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {errors: state.errors}
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        loginUser: (creds) => dispatch(loginUser(creds)),
        logoutUser: () => dispatch(logoutUser),
        createUser: (creds) => dispatch(createUser(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
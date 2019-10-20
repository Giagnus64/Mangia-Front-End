import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser, logoutUser, createUser } from '../actions/loginActions';
import {Box} from 'react-bulma-components';
import LoginForm from '../components/LoginForm'
class LoginPage extends Component {
    
    render(){
        return (
            <Box>
                <LoginForm loginUser={this.props.loginUser} createUser={this.props.createUser} />
            </Box>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {}
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        loginUser: (creds) => dispatch(loginUser(creds)),
        logoutUser: () => dispatch(logoutUser),
        createUser: (creds) => dispatch(createUser(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
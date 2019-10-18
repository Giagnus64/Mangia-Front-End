import React, { Component } from 'react';
import { Form, Box, Button, Heading } from 'react-bulma-components'
const { Field, Control, Label, Input} = Form;

class LoginForm extends Component {
    state = {
        username: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return(<>
                <Field>
                    <Control>
                        <Label>Username</Label>
                        <Input name="username" type="text" placeholder="Username" value={this.state.username} onChange={this.handleChange}/>
                    </Control>
                </Field>
                <Field>
                    <Control>
                        <Label>Password</Label>
                        <Input name="password" type="password" placeholder="Password" value={this.state.password} onChange={this.handleChange}/>
                    </Control>
                </Field>
                <Button.Group>
                    <Button onClick={() => this.props.loginUser(this.state)}>Login</Button>
                    <Button onClick={() => this.props.createUser(this.state)}>Register</Button>
                </Button.Group>
                </>
        )
    }


}

export default LoginForm;
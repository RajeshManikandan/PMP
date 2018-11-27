import React, { Component } from 'react';
import LoginForm from './LoginForm';
import { Grid } from '@material-ui/core';
import SignupForm from './SignupForm';
import axios from 'axios';
import ForgotPasswordForm from './ForgotPasswordForm';
import localStorage from '../../../middleware/localStorage';
import { Redirect } from 'react-router-dom';

class LoginPage extends Component {
    state = {
        form: 'login'
    };

    handleSnackBar;

    handleFormRender = form => {
        this.setState({ form });
    };

    login = data => {
        const { handleLogin } = this.props;
        const { email, password } = data;
        axios
            .post('/auth/login', { email, password })
            .then(res => {
                const { success, msg, token, payload } = res.data;
                if (!success) console.log(msg);
                else {
                    localStorage.setItem('token', token);
                    handleLogin(payload);
                }
            })
            .catch(err => console.log(err));
    };

    signup = data => {
        const { handleSnackBarOpen } = this.props;
        const { first_name, last_name, email, password, confirmpassword } = data;
        if (password !== confirmpassword) handleSnackBarOpen('Password and Confirm Password not matched');
        else if (password.length < 6) handleSnackBarOpen('Password should have minimum of 6 characters');
        else {
            axios
                .post('/auth/register', { first_name, last_name, email, password })
                .then(res => {
                    const { success, msg } = res.data;
                    if (!success) console.log(msg);
                    else {
                        handleSnackBarOpen(msg);
                        // this.setState({ form: 'login' });
                        this.login({ email, password });
                    }
                })
                .catch(err => console.log(err));
        }
    };

    forgot = data => {
        console.log(data);
    };

    renderForm() {
        switch (this.state.form) {
            case 'signup':
                return <SignupForm handleFormRender={this.handleFormRender} signup={this.signup} />;
            case 'forgot':
                return <ForgotPasswordForm handleFormRender={this.handleFormRender} forgot={this.forgot} />;
            default:
                return <LoginForm handleFormRender={this.handleFormRender} login={this.login} />;
        }
    }

    render() {
        const { loggedIn } = this.props;
        if (loggedIn) {
            return <Redirect to="/" />;
        }
        return (
            <Grid container justify="center" style={{ marginTop: '30px' }}>
                <Grid item sm={6} md={4}>
                    {this.renderForm()}
                </Grid>
            </Grid>
        );
    }
}

export default LoginPage;

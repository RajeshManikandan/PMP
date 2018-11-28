import React, { Component } from 'react';
import LoginForm from './LoginForm';
import { Grid } from '@material-ui/core';
import SignupForm from './SignupForm';
import ForgotPasswordForm from './ForgotPasswordForm';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { userRegister, userLogin } from '../../../actions/authActions';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: 'login'
        };
    }

    handleFormRender = form => {
        this.setState({ form });
    };

    signup = data => {
        const { first_name, last_name, email, password, confirmpassword } = data;
        const { displaySnackbar } = this.props;
        if (password !== confirmpassword) displaySnackbar('Password and Confirm Password not matched');
        else if (password.length < 6) displaySnackbar('Password should have minimum of 6 characters');
        else {
            this.props.userRegister({
                first_name,
                last_name,
                email,
                password
            });
            this.setState({ form: 'login' });
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
                return <LoginForm handleFormRender={this.handleFormRender} login={this.props.userLogin} />;
        }
    }

    render() {
        const { loggedIn } = this.props.auth;
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

const mapStateToProps = state => ({ auth: state.auth });

export default connect(mapStateToProps, { userRegister, userLogin })(LoginPage);

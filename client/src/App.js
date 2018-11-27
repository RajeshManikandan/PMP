import React, { Component } from 'react';
import TodoList from './components/pages/Todo/todolist';
import LoginPage from './components/pages/LoginPage/LoginPage';
import AppBar from './components/Layouts/AppBar';
import SnackBarError from './components/Layouts/SnackBarError';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import PrivateRoute from './components/PrivateRoute';
import axios from 'axios';
import localStorage from './middleware/localStorage';

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
        suppressDeprecationWarnings: true
    }
});

class App extends Component {
    constructor() {
        super();
        this.checkAuth();
    }
    state = {
        user: {
            first_name: '',
            last_name: '',
            email: ''
        },
        loggedIn: false,
        token: ''
    };

    handleSnackBarOpen = msg => {
        const snackBar = { open: true, msg: msg };
        this.snackBar.openSnackBar(snackBar);
    };

    checkAuth = () => {
        //Get Token from LocalStorage
        const token = localStorage.getItem('token');
        if (token) {
            //Check Login
            axios
                .get('/auth/auth', {
                    headers: { Authorization: token }
                })
                .then(res => {
                    const { success, msg, user } = res.data;
                    if (!success) this.handleSnackBarOpen(msg);
                    else {
                        const { first_name, last_name, email } = user;
                        this.setState({
                            user: {
                                first_name,
                                last_name,
                                email
                            },
                            loggedIn: true,
                            isLoading: false
                        });
                    }
                })
                .catch(err => console.log(err.message));
        }
    };

    handleLogout = () => {
        //this.handleSnackBarOpen('Logout attempted');
        localStorage.removeItem('token');
        this.setState({
            user: {
                first_name: '',
                last_name: '',
                email: ''
            },
            loggedIn: false,
            token: ''
        });
    };

    handleLogin = user => {
        const { first_name, last_name, email } = user;
        const message = 'Successfully Logged In';
        this.setState({
            user: {
                first_name,
                last_name,
                email
            },
            loggedIn: true
        });
        this.handleSnackBarOpen(message);
    };

    render() {
        const { user, loggedIn } = this.state;

        return (
            <MuiThemeProvider theme={theme}>
                <AppBar loggedIn={loggedIn} logout={this.handleLogout} />
                <Router>
                    <Switch>
                        <Route
                            path="/login"
                            exact
                            strict
                            render={props => (
                                <LoginPage
                                    handleSnackBarOpen={this.handleSnackBarOpen}
                                    handleLogin={this.handleLogin}
                                    loggedIn={loggedIn}
                                    {...props}
                                />
                            )}
                        />
                        <PrivateRoute
                            loggedIn={loggedIn}
                            path="/"
                            exact
                            strict
                            component={props => (
                                <TodoList handleSnackBarOpen={this.handleSnackBarOpen} user={user} {...props} />
                            )}
                        />
                    </Switch>
                </Router>
                <SnackBarError onRef={ref => (this.snackBar = ref)} />
            </MuiThemeProvider>
        );
    }
}

export default App;

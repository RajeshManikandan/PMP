import React, { Component } from 'react';
import TodoList from './components/pages/Todo/todolist';
import LoginPage from './components/pages/LoginPage/LoginPage';
import AppBar from './components/Layouts/AppBar';
import Toast from './components/Toast';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import PrivateRoute from './components/PrivateRoute';
import { connect } from 'react-redux';
import { checkAuth } from './actions/authActions';

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
        suppressDeprecationWarnings: true
    }
});

class App extends Component {
    render() {
        this.props.checkAuth();
        return (
            <MuiThemeProvider theme={theme}>
                <AppBar />
                <Router>
                    <Switch>
                        <Route path="/login" exact strict render={props => <LoginPage {...props} />} />
                        <PrivateRoute path="/" exact strict component={props => <TodoList {...props} />} />
                    </Switch>
                </Router>
                <Toast />
            </MuiThemeProvider>
        );
    }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps, { checkAuth })(App);

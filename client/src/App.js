import React, { Component, Fragment } from 'react';
import TodoList from './components/pages/Todo/todolist';
import Home from './components/pages/Home';
import LoginPage from './components/pages/LoginPage/LoginPage';
import { NavBar, NavDrawer } from './components/Layouts';
import Toast from './components/Toast';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import PrivateRoute from './components/PrivateRoute';
import { connect } from 'react-redux';
import { checkAuth } from './actions/authActions';
import Applications from './components/pages/Applications';

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
        suppressDeprecationWarnings: true
    }
});
const style = {
    body: {
        backgroundColor: '#c1c1c1'
    }
};

class App extends Component {
    checkAuth() {
        this.props.checkAuth();
    }
    render() {
        this.checkAuth();
        return (
            <MuiThemeProvider theme={theme}>
                <NavBar />
                <Router>
                    <Fragment>
                        <NavDrawer />
                        <Switch>
                            <Route path="/login" exact strict render={props => <LoginPage {...props} />} />
                            <PrivateRoute path="/" exact strict component={props => <Home {...props} />} />
                            <PrivateRoute path="/apps" exact strict component={props => <Applications {...props} />} />
                        </Switch>
                    </Fragment>
                </Router>
                <Toast />
            </MuiThemeProvider>
        );
    }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps, { checkAuth })(App);

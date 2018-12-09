import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

//PrivateRoute
const PrivateRoute = ({ component: Component, loggedIn, ...rest }) => {
    return <Route {...rest} render={props => (loggedIn ? <Component {...props} /> : <Redirect to="/login" />)} />;
};

const mapStateToProps = state => ({ loggedIn: state.auth.loggedIn });

export default connect(mapStateToProps)(PrivateRoute);

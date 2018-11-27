import React from 'react';
import { Route, Redirect } from 'react-router-dom';
//PrivateRoute
const PrivateRoute = ({ component: Component, loggedIn, ...rest }) => (
    <Route {...rest} render={props => (loggedIn ? <Component {...props} /> : <Redirect to="/login" />)} />
);

export default PrivateRoute;

import React, { Component } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { userLogout } from '../../actions/authActions';
const styles = {
    root: {
        flexGrow: 1
    },
    grow: {
        flexGrow: 1
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    }
};
class NavBar extends Component {
    render() {
        const { classes } = this.props;
        const { loggedIn } = this.props.auth;
        return (
            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Toolbar>
                        <Typography variant="h6" color="inherit" className={classes.grow}>
                            Passport JWT Login
                        </Typography>
                        {loggedIn ? (
                            <Button color="secondary" onClick={this.props.userLogout}>
                                Logout
                            </Button>
                        ) : null}
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

const mapStateToProps = state => ({ auth: state.auth });

export default connect(mapStateToProps, { userLogout })(withStyles(styles)(NavBar));

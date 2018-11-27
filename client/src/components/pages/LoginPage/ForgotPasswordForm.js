import React, { Component } from 'react';
import { Paper, withStyles, Grid, TextField, Button, Typography } from '@material-ui/core';
import { Lock } from '@material-ui/icons';

const styles = theme => ({
    margin: {
        margin: theme.spacing.unit * 2
    },
    padding: {
        padding: theme.spacing.unit
    },
    button: {
        textTransform: 'none'
    }
});
class LoginForm extends Component {
    state = {
        data: {},
        errors: [],
        isLoading: false
    };

    render() {
        const { classes } = this.props;

        return (
            <div>
                <Paper className={classes.padding}>
                    <Typography variant="subtitle2" align="center" style={{ fontSize: '21px' }}>
                        Forgot Password
                    </Typography>

                    <div className={classes.margin}>
                        <Grid container justify="center">
                            <Grid item>
                                <Lock />
                            </Grid>
                        </Grid>
                        <Grid container justify="center" style={{ marginTop: '10px' }} spacing={8}>
                            <Grid item>
                                <Button
                                    className={classes.button}
                                    variant={'outlined'}
                                    color="primary"
                                    onClick={() => this.props.handleFormRender('login')}
                                >
                                    Login
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button
                                    variant={'outlined'}
                                    color="primary"
                                    className={classes.button}
                                    onClick={() => this.props.handleFormRender('signup')}
                                >
                                    Register
                                </Button>
                            </Grid>
                        </Grid>
                        <Grid container justify="center" style={{ marginTop: '10px' }}>
                            <Grid item sm>
                                <TextField
                                    id="email"
                                    label="Email"
                                    type="email"
                                    placeholder="Enter your email"
                                    fullWidth
                                    autoFocus
                                    required
                                />
                            </Grid>
                        </Grid>
                        <Grid container justify="center" style={{ marginTop: '10px' }}>
                            <Grid item>
                                <Button variant="contained" color="primary">
                                    Send Password Reset Link...{' '}
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </Paper>
            </div>
        );
    }
}

export default withStyles(styles)(LoginForm);

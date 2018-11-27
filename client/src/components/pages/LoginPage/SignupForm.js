import React, { Component } from 'react';
import { Paper, withStyles, Grid, TextField, Typography, Button } from '@material-ui/core';

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
class SignupForm extends Component {
    state = {
        data: {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            confirmpassword: ''
        }
    };

    handleChange = e => {
        this.setState({ data: { ...this.state.data, [e.target.name]: e.target.value } });
    };

    render() {
        const { classes } = this.props;
        const { data } = this.state;
        return (
            <div>
                <form
                    onSubmit={e => {
                        e.preventDefault();
                        this.props.signup(data);
                    }}
                >
                    <Paper className={classes.padding}>
                        <Typography variant="subtitle2" align="center" style={{ fontSize: '24px' }}>
                            Sign Up
                        </Typography>
                        <div className={classes.margin}>
                            <Grid container spacing={8} alignItems="flex-end">
                                <Grid item md={true} sm={true} xs={true}>
                                    <TextField
                                        id="first_name"
                                        label="First Name"
                                        type="text"
                                        name="first_name"
                                        value={data.first_name}
                                        onChange={this.handleChange}
                                        fullWidth
                                        autoFocus
                                        required
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={8} alignItems="flex-end">
                                <Grid item md={true} sm={true} xs={true}>
                                    <TextField
                                        id="last_name"
                                        label="Last Name"
                                        type="text"
                                        name="last_name"
                                        value={data.last_name}
                                        onChange={this.handleChange}
                                        fullWidth
                                        required
                                    />
                                </Grid>
                            </Grid>

                            <Grid container spacing={8} alignItems="flex-end">
                                <Grid item md={true} sm={true} xs={true}>
                                    <TextField
                                        id="email"
                                        label="Email"
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        onChange={this.handleChange}
                                        fullWidth
                                        required
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={8} alignItems="flex-end">
                                <Grid item md={true} sm={true} xs={true}>
                                    <TextField
                                        id="password"
                                        label="Password"
                                        type="password"
                                        name="password"
                                        value={data.password}
                                        onChange={this.handleChange}
                                        fullWidth
                                        required
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={8} alignItems="flex-end">
                                <Grid item md={true} sm={true} xs={true}>
                                    <TextField
                                        id="confirmpassword"
                                        label="Confirm Password"
                                        type="password"
                                        fullWidth
                                        required
                                        name="confirmpassword"
                                        value={data.confirmpassword}
                                        onChange={this.handleChange}
                                    />
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
                                        variant={'contained'}
                                        color="primary"
                                        className={classes.button}
                                        type="submit"
                                    >
                                        Register
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Paper>
                </form>
            </div>
        );
    }
}

export default withStyles(styles)(SignupForm);

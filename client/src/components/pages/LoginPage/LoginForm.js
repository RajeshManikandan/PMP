import React, { Component } from 'react';
import { Paper, withStyles, Grid, TextField, Button, Typography } from '@material-ui/core';
import { Face, Fingerprint } from '@material-ui/icons';

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
        data: {
            email: '',
            password: ''
        }
    };

    handleChange = e => {
        this.setState({ data: { ...this.state.data, [e.target.name]: e.target.value } });
    };

    render() {
        const { classes, login } = this.props;
        const { data } = this.state;
        return (
            <div>
                <Paper className={classes.padding}>
                    <form
                        onSubmit={e => {
                            e.preventDefault();
                            login(data);
                        }}
                    >
                        <Typography variant="subtitle2" align="center" style={{ fontSize: '24px' }}>
                            Login
                        </Typography>
                        <div className={classes.margin}>
                            <Grid container spacing={8} alignItems="flex-end">
                                <Grid item>
                                    <Face />
                                </Grid>
                                <Grid item md={true} sm={true} xs={true}>
                                    <TextField
                                        id="email"
                                        name="email"
                                        label="Email"
                                        type="email"
                                        placeholder="example@example.com"
                                        value={data.email}
                                        onChange={this.handleChange}
                                        fullWidth
                                        autoFocus
                                        required
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={8} alignItems="flex-end">
                                <Grid item>
                                    <Fingerprint />
                                </Grid>
                                <Grid item md={true} sm={true} xs={true}>
                                    <TextField
                                        id="password"
                                        name="password"
                                        label="Password"
                                        placeholder="******"
                                        type="password"
                                        value={data.password}
                                        onChange={this.handleChange}
                                        fullWidth
                                        required
                                    />
                                </Grid>
                            </Grid>
                            <Grid container direction="row-reverse">
                                <Grid item>
                                    <Button
                                        disableFocusRipple
                                        disableRipple
                                        className={classes.button}
                                        variant="text"
                                        color="primary"
                                        onClick={() => this.props.handleFormRender('forgot')}
                                    >
                                        Forgot password ?
                                    </Button>
                                </Grid>
                            </Grid>
                            <Grid container justify="center" style={{ marginTop: '10px' }} spacing={8}>
                                <Grid item>
                                    <Button
                                        className={classes.button}
                                        variant={'contained'}
                                        color="primary"
                                        type="submit"
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
                        </div>
                    </form>
                </Paper>
            </div>
        );
    }
}

export default withStyles(styles)(LoginForm);

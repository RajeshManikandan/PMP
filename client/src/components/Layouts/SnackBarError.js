import React, { Component } from 'react';
import { Snackbar, Button, IconButton } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    close: {
        padding: theme.spacing.unit / 2
    }
});

class SnackBarError extends Component {
    state = {
        msg: '',
        open: false
    };
    openSnackBar = snackBar => {
        this.setState({ open: snackBar.open, msg: snackBar.msg });
    };

    handleSnackBarClose = (event, reason) => {
        this.setState({ open: false });
    };

    componentDidMount() {
        this.props.onRef(this);
    }

    componentWillUnmount() {
        this.props.onRef(undefined);
    }

    render() {
        const { classes } = this.props;
        const { open, msg } = this.state;
        return (
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right'
                }}
                open={open}
                autoHideDuration={4000}
                onClose={this.handleSnackBarClose}
                ContentProps={{
                    'aria-describedby': 'message-id'
                }}
                message={<span id="message-id">{msg}</span>}
                action={[
                    <Button key="undo" color="secondary" size="small" onClick={this.handleSnackBarClose}>
                        CLOSE
                    </Button>,
                    <IconButton
                        key="close"
                        aria-label="Close"
                        color="inherit"
                        className={classes.close}
                        onClick={this.handleSnackBarClose}
                    >
                        <Close />
                    </IconButton>
                ]}
            />
        );
    }
}

SnackBarError.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SnackBarError);

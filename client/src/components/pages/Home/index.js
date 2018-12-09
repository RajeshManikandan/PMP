import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import './home.css';
const styles = {
    container: {
        width: '100%',
        background: '#fff'
    }
};
class HomePage extends Component {
    state = {};
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.container}>
                <Button>Try me</Button>
            </div>
        );
    }
}

export default withStyles(styles)(HomePage);

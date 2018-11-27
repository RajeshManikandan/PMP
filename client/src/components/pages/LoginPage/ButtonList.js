import React from 'react';
import { Button, Grid } from '@material-ui/core';

const styles = {
    link: {
        textDecoration: 'underline'
    },
    button: {
        textTransform: 'none'
    }
};

class ButtonList extends React.Component {
    render() {
        const { loginBtn, registerBtn } = this.props;
        return (
            <Grid container justify="center" style={{ marginTop: '10px' }} spacing={8}>
                <Grid item>
                    <Button
                        style={styles.button}
                        variant={loginBtn ? 'contained' : 'outlined'}
                        color="primary"
                        onClick={() => this.props.handleFormRender('login')}
                    >
                        Login
                    </Button>
                </Grid>
                <Grid item>
                    <Button
                        variant={registerBtn ? 'contained' : 'outlined'}
                        color="primary"
                        style={{ textTransform: 'none' }}
                        onClick={() => this.props.handleFormRender('signup')}
                    >
                        Register
                    </Button>
                </Grid>
            </Grid>
        );
    }
}

export default ButtonList;

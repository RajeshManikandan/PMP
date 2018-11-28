import React from 'react';
import { Snackbar, Button, IconButton } from '@material-ui/core';
import { Close as CloseIcon } from '@material-ui/icons';
import { connect } from 'react-redux';

class Toast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: props.dash.open,
            message: props.dash.msg
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ open: nextProps.dash.open, message: nextProps.dash.message });
    }

    handleClose = () => {
        this.setState({ open: false });
    };
    render() {
        const { open, message } = this.state;
        return (
            <span>
                <Snackbar
                    open={open}
                    message={message}
                    autoHideDuration={1500}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right'
                    }}
                    onClose={this.handleClose}
                    action={[
                        <Button key="undo" color="secondary" size="small" onClick={this.handleClose}>
                            CLOSE
                        </Button>,
                        <IconButton key="close" aria-label="Close" color="inherit" onClick={this.handleClose}>
                            <CloseIcon />
                        </IconButton>
                    ]}
                />
            </span>
        );
    }
}
const mapStateToProps = store => ({ dash: store.toast.dash });
export default connect(mapStateToProps)(Toast);

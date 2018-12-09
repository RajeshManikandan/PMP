import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
    Paper,
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    Typography,
    Grid,
    TextField,
    MenuItem,
    Button
} from '@material-ui/core';
import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons';
const styles = {
    paper: {
        margin: '15%',
        marginTop: '20px',
        padding: '50px'
    }
};
class Applications extends Component {
    state = {
        name: '',
        desc: '',
        appType: 'Browser Based',
        installation_required: 'No',
        license_required: 'No',
        expanded: null
    };
    handleChange = name => event => {
        this.setState({
            [name]: event.target.value
        });
    };
    handleExpand = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false
        });
    };
    render() {
        const { classes } = this.props;
        const appTypes = ['Browser Based', 'Windows Based'];
        const { expanded } = this.state;
        return (
            <Paper className={classes.paper}>
                <Typography variant="h5">Application</Typography>
                <Grid container spacing={8}>
                    <Grid item xs={6}>
                        <form>
                            <TextField
                                id="name"
                                label="Name"
                                className={classes.textField}
                                value={this.state.name}
                                fullWidth
                                onChange={this.handleChange('name')}
                                margin="normal"
                                required
                            />
                            <TextField
                                id="desc"
                                label="Description"
                                className={classes.textField}
                                value={this.state.desc}
                                fullWidth
                                multiline
                                onChange={this.handleChange('desc')}
                                margin="normal"
                                required
                            />
                            <TextField
                                id="appType"
                                select
                                required
                                label="Select"
                                className={classes.textField}
                                value={this.state.appType}
                                onChange={this.handleChange('appType')}
                                fullWidth
                                SelectProps={{
                                    MenuProps: {
                                        className: classes.menu
                                    }
                                }}
                                helperText="Please select the type of application"
                                margin="normal"
                            >
                                {appTypes.map(option => (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField
                                id="installation_required"
                                select
                                required
                                label="Select"
                                className={classes.textField}
                                value={this.state.installation_required}
                                onChange={this.handleChange('installation_required')}
                                fullWidth
                                SelectProps={{
                                    MenuProps: {
                                        className: classes.menu
                                    }
                                }}
                                helperText="Installation Required?"
                                margin="normal"
                            >
                                {['Yes', 'No'].map(option => (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField
                                id="license_required"
                                select
                                required
                                label="Select"
                                className={classes.textField}
                                value={this.state.license_required}
                                onChange={this.handleChange('license_required')}
                                fullWidth
                                SelectProps={{
                                    MenuProps: {
                                        className: classes.menu
                                    }
                                }}
                                helperText="License Required?"
                                margin="normal"
                            >
                                {['Yes', 'No'].map(option => (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <Button type="submit" variant="contained" color="primary" style={{ marginTop: '30px' }}>
                                Add
                            </Button>
                        </form>
                    </Grid>
                    <Grid item xs={6} style={{ borderLeft: '2px solid #ecf0f1', padding: '10px' }}>
                        <div style={{ overflowY: 'scroll', maxHeight: '400px', minHeight: '400px' }}>
                            <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleExpand('panel1')}>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography className={classes.heading}>Chronos</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <Typography>Browser Based</Typography>
                                    <br />
                                    <Typography>Lorem dsfsd sdfsd sdfsd fsdf sdfs dfsd fsdcsc </Typography>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                            <ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleExpand('panel2')}>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography className={classes.heading}>Expansion Panel 1</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <Typography>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
                                        lacus ex, sit amet blandit leo lobortis eget.
                                    </Typography>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                            <ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handleExpand('panel3')}>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography className={classes.heading}>Expansion Panel 1</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <Typography>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
                                        lacus ex, sit amet blandit leo lobortis eget.
                                    </Typography>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        </div>
                    </Grid>
                </Grid>
            </Paper>
        );
    }
}

export default withStyles(styles)(Applications);

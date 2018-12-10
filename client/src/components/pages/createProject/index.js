import React, { Component } from 'react';
import './index.css';
import { Paper, Typography, TextField } from '@material-ui/core';
class CreateProject extends Component {
    state = {};
    render() {
        return (
            <div id="createProject">
                <Paper className="container">
                    <Typography variant="h6">Create Project</Typography>
                    <form>
                        <TextField
                            id="filled-password-input"
                            label="Project Name"
                            type="text"
                            autoComplete="current-password"
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            id="filled-password-input"
                            label="Project Abbreavated Name"
                            type="text"
                            autoComplete="current-password"
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            id="date"
                            label="DueDate"
                            type="date"
                            fullWidth
                            defaultValue="2017-05-24"
                            InputLabelProps={{
                                shrink: true
                            }}
                            style={{ marginTop: '10px' }}
                        />
                    </form>
                </Paper>
            </div>
        );
    }
}

export default CreateProject;

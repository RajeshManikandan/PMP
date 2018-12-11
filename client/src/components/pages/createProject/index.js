import React, { Component } from 'react';
import './index.css';
import { Paper, Typography, TextField, Button } from '@material-ui/core';
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
                            label="Project Short Name"
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
                            InputLabelProps={{
                                shrink: true
                            }}
                            style={{ marginTop: '20px' }}
                        />
                        <TextField
                            id="desc"
                            style={{ marginTop: '10px' }}
                            label="Description"
                            type="text"
                            fullWidth
                            multiline
                            rows={3}
                        />
                        <br />
                        <Button variant="contained" style={{ marginTop: '20px' }} color="primary" fullWidth>
                            Create Project
                        </Button>
                    </form>
                </Paper>
            </div>
        );
    }
}

export default CreateProject;

import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
    Typography,
    Paper,
    Button,
    Grid,
    Card,
    CardActionArea,
    CardActions,
    CardMedia,
    CardContent
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import './index.css';
import ProjectCard from './ProjectCard';

const styles = {};

class ProjectsPage extends Component {
    state = {};
    render() {
        const { classes } = this.props;
        return (
            <div className="container">
                <Paper className="paperContainer">
                    <Typography variant="h5" id="title">
                        Projects
                    </Typography>
                    <Link to="/projects/create" id="create">
                        <Button color="primary" variant="contained">
                            Create New
                        </Button>
                    </Link>
                    <br />
                    <br />
                    <br />
                    <Grid container spacing={16}>
                        <Grid item xs={3}>
                            <ProjectCard />
                        </Grid>
                        <Grid item xs={3}>
                            <ProjectCard />
                        </Grid>
                        <Grid item xs={3}>
                            <ProjectCard />
                        </Grid>
                        <Grid item xs={3}>
                            <ProjectCard />
                        </Grid>
                        <Grid item xs={3}>
                            <ProjectCard />
                        </Grid>
                        <Grid item xs={3}>
                            <ProjectCard />
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        );
    }
}

export default withStyles(styles)(ProjectsPage);

import React, { Component } from 'react';
import { Button, Grid, Typography, Paper, Card, CardActionArea, CardMedia, CardContent } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ServicesCard from './servicesCard';
import { withStyles } from '@material-ui/core/styles';
import './index.css';
const styles = {
    card: {
        maxWidth: 345
    },
    media: {
        height: 140
    }
};

class HomePage extends Component {
    state = {};
    render() {
        const { classes } = this.props;
        return (
            <div className="container">
                <div className="header">
                    <Typography variant="h3">Welcome to Project HUB</Typography>
                    <br />
                    <Typography variant="subtitle1">Environment to organise projects</Typography>
                </div>
                <Grid container className="grid_container" spacing={32} justify="center">
                    <ServicesCard link="/projects" title="Projects" />
                    <ServicesCard link="/tickets" title="Tickets" />
                    <ServicesCard link="/action-items" title="Action Items" />
                    {/* <Grid item xs={3} className="grid_item">
                        <Link to="/projects">
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <CardMedia className={classes.media} image={ProjectImg} title="Projects" />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Projects
                                        </Typography>
                                        <Typography component="p">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000
                                            species, ranging across all continents except Antarctica
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Link>
                    </Grid> */}
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(HomePage);

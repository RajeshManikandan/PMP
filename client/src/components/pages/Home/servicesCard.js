import React from 'react';
import { Button, Grid, Typography, Paper, Card, CardActionArea, CardMedia, CardContent } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ActionItemImg from './images/action.jpg';
import ProjectImg from './images/project.jpg';
import TicketImg from './images/ticket.jpg';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    card: {
        maxWidth: 345
    },
    media: {
        height: 140
    }
};

const ServicesCard = props => {
    const { classes } = props;
    const { link, title } = props;
    const img = title === 'Projects' ? ProjectImg : title === 'Tickets' ? TicketImg : ActionItemImg;
    return (
        <Grid item xs={3} className="grid_item">
            <Link to={link}>
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia className={classes.media} image={img} title={title} />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {title}
                            </Typography>
                            <Typography component="p">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Link>
        </Grid>
    );
};

export default withStyles(styles)(ServicesCard);

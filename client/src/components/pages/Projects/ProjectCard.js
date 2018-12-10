import React, { Component } from 'react';
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
import { withStyles } from '@material-ui/core/styles';

const styles = {
    card: {
        maxWidth: 345
    },
    media: {
        height: 140
    }
};
const ProjectCard = props => {
    const { classes } = props;
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h6" component="h6">
                        Facility Assignment Service
                    </Typography>
                    <table className="project-table">
                        <tbody>
                            <tr>
                                <th>Open Items</th>
                                <td> 10 </td>
                            </tr>
                            <tr>
                                <th>Open Tickets</th>
                                <td> 10 </td>
                            </tr>
                            <tr>
                                <th>Due Date</th>
                                <td> 10/10/18 </td>
                            </tr>
                            <tr>
                                <th>Status</th>
                                <td> Active</td>
                            </tr>
                        </tbody>
                    </table>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default withStyles(styles)(ProjectCard);

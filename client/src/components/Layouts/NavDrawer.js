import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Dvr as DVRIcon, Apps as AppIcon, Forum as ForumIcon } from '@material-ui/icons';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { openNavdrawer, closeNavdrawer } from '../../actions/navdrawerActions';

const styles = {
    list: {
        width: 250
    },
    fullList: {
        width: 'auto'
    },
    link: {
        textDecoration: 'none'
    }
};

class NavDrawer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: props.open
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ open: nextProps.open });
    }

    toggleDrawer = (side, open) => () => {
        this.setState({
            open: open
        });
    };

    getIcon(text) {
        switch (text) {
            case 'Applications':
                return { icon: <AppIcon />, link: '/apps' };
            case 'Forum':
                return { icon: <ForumIcon />, link: '/forum' };
            default:
                return null;
        }
    }

    render() {
        const { classes } = this.props;

        const sideList = (
            <div className={classes.list}>
                <DVRIcon fontSize="large" />
                <Divider />
                <List>
                    {['Applications', 'Forum'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{this.getIcon(text).icon}</ListItemIcon>
                            <Link to={this.getIcon(text).link} className={classes.link}>
                                <ListItemText primary={text} />
                            </Link>
                        </ListItem>
                    ))}
                </List>
            </div>
        );

        return (
            <div>
                <SwipeableDrawer
                    open={this.state.open}
                    onClose={this.props.closeNavdrawer}
                    onOpen={this.props.openNavdrawer}
                >
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.props.closeNavdrawer}
                        onKeyDown={this.props.closeNavdrawer}
                    >
                        {sideList}
                    </div>
                </SwipeableDrawer>
            </div>
        );
    }
}

NavDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({ open: state.navdrawer.open });

export default connect(mapStateToProps, { openNavdrawer, closeNavdrawer })(withStyles(styles)(NavDrawer));

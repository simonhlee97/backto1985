import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';



const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
});

function FolderList(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <List>
                <ListItem>
                    <Avatar>
                        <ImageIcon />
                    </Avatar>
                    <ListItemText primary="My Schedule" secondary="Jan 9, 2014" />
                </ListItem>
                <ListItem>
                    <Avatar>
                        <WorkIcon />
                    </Avatar>
                    <Link to='/gradebook'><ListItemText primary="My GradeBook" secondary="Jan 7, 2014" /></Link>
                </ListItem>
                <ListItem>
                    <Avatar>
                        <WorkIcon />
                    </Avatar>
                    <ListItemText primary="My Students" secondary="July 20, 2014" />
                </ListItem>
                <ListItem>
                    <Avatar>
                        <BeachAccessIcon />
                    </Avatar>
                    <ListItemText primary="Take Attendance" secondary="July 20, 2014" />
                </ListItem>
                <ListItem>
                    <Avatar>
                        <WorkIcon />
                    </Avatar>
                    <ListItemText primary="Create New Assignment" secondary="July 20, 2014" />
                </ListItem>
            </List>
        </div>
    );
}

FolderList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FolderList);

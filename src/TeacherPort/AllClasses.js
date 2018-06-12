
////// ////////////////////////////////////
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SimpleCard from '../MaterialUI/SimpleCard';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

function AllClasses(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <Grid container spacing={24}>
                <Grid item xs={4}>
                    <Paper className={classes.paper}><SimpleCard /></Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}><SimpleCard /></Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}><SimpleCard /></Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}><SimpleCard /></Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}><SimpleCard /></Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>width4</Paper>
                </Grid>
            </Grid>
        </div>
    );
}

AllClasses.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AllClasses);

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

const anchorStyle = {
    color: 'white',
    textDecoration: 'none'
}
const buttStyle = {
    textAlign: 'center',
    width: '100%',
    paddingTop: '16px'
};

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    }
});

function ContainedButtons(props) {
    const { classes } = props;
    return (
        <div style={buttStyle}>
            <h1>Twin Valley High School</h1>
            <Button variant="contained" color="primary" className={classes.button}>
                <Link style={anchorStyle} to="/">Home</Link>
            </Button>

            <Button variant="contained" color="primary" className={classes.button}>
                <Link style={anchorStyle} to="/about">About</Link>
            </Button>

            <Button variant="contained" color="primary" className={classes.button}>
                <Link style={anchorStyle} to="/news">News</Link>
            </Button>
            <Button variant="contained" color="primary" className={classes.button}>
                <Link style={anchorStyle} to="/login">Login</Link>
            </Button>

        </div>
    );
}

ContainedButtons.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContainedButtons);

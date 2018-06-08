import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});

function TextButtons(props) {
    const { classes } = props;
    return (
        <div>
            <Button color="primary" className={classes.button}>
                <Link to="/">Home</Link>
            </Button>

            <Button color="primary" className={classes.button}>
                <Link to="/about">About</Link>
            </Button>

            <Button color="primary" className={classes.button}>
                <Link to="/news">News</Link>
            </Button>

            <Button color="primary" className={classes.button}>
                <Link to="/login">Login</Link>
            </Button>

        </div>
    );
}

TextButtons.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextButtons);

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import AuthUserContext from '../Session/AuthUserContext';
import SignOutButton from '../SignOut';
import * as routes from '../../constants/routes';

const Navigation = () =>
  <AuthUserContext.Consumer>
    {authUser => authUser
      ? <NavigationAuth />
      : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>

const NavigationAuth = () =>
    <div className="navbuttons" style={buttStyle}>
        <h1>Hill Valley High School</h1>
        <h3>est. 1940</h3>

        <Button variant="contained" color="primary" >
            <Link style={anchorStyle} to={routes.LANDING}>Home</Link>
        </Button>

        <Button  variant="contained" color="primary" >
            <Link style={anchorStyle} to={routes.HOME}>Portal</Link>
        </Button>

        <Button variant="contained" color="primary" >
            <Link style={anchorStyle} to={routes.ACCOUNT}>Account</Link>
        </Button>

        <Button variant="contained" color="primary" >
            <Link style={anchorStyle} to={routes.ABOUT}>About</Link>
        </Button>

        <Button variant="contained" color="primary" >
            <Link style={anchorStyle} to={routes.NEWS}>News</Link>
        </Button>
        
        <SignOutButton />
    </div>

const NavigationNonAuth = () => {
    // const { classes } = props;
    return (
        <div className="navbuttons" style={buttStyle}>
            <h1>Hill Valley High School</h1>
            <h3>est. 1940</h3>

            <Button variant="contained" color="primary" >
                <Link style={anchorStyle} to={routes.LANDING}>Home</Link>
            </Button>

            <Button variant="contained" color="primary" >
                <Link style={anchorStyle} to={routes.ABOUT}>About</Link>
            </Button>

            <Button variant="contained" color="primary" >
                <Link style={anchorStyle} to={routes.NEWS}>News</Link>
            </Button>
            <Button variant="contained" color="primary" >
                <Link style={anchorStyle} to={routes.SIGN_IN}>Sign In</Link>
            </Button>
        </div>
    );
}

const anchorStyle = {
    color: 'white',
    textDecoration: 'none'
}
const buttStyle = {
    textAlign: 'center',
    width: '100%',
    paddingTop: '16px',
    paddingBottom: '1em'
};

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    }
});

Navigation.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigation);
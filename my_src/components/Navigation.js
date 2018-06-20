import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import SignOutButton from './SignOut';
import * as routes from '../constants/routes';

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



// function NavigationAuth(props) {
//     // const { classes } = props;
//     return (
//         <div style={buttStyle}>
//             <h1>Hill Valley High School</h1>
//             <h3>est. 1940</h3>
//             <Button variant="contained" color="primary" >
//                 <Link style={anchorStyle} to={routes.HOME}>Home</Link>
//             </Button>

//             <Button variant="contained" color="primary" >
//                 <Link style={anchorStyle} to={routes.ABOUT}>About</Link>
//             </Button>

//             <Button variant="contained" color="primary" >
//                 <Link style={anchorStyle} to={routes.NEWS}>News</Link>
//             </Button>
            
//             <li><SignOutButton /></li>

//         </div>
//     );
// };

const Navigation = () => 
        <div style={buttStyle}>
            <h1>Hill Valley High School</h1>
            <h3>est. 1940</h3>
            <Button variant="contained" color="primary" >
                <Link style={anchorStyle} to={routes.HOME}>Home</Link>
            </Button>

            <Button variant="contained" color="primary" >
                <Link style={anchorStyle} to={routes.ABOUT}>About</Link>
            </Button>

            <Button variant="contained" color="primary" >
                <Link style={anchorStyle} to={routes.NEWS}>News</Link>
            </Button>
            <Button variant="contained" color="primary" >
                <Link style={anchorStyle} to={routes.LOGIN}>Login</Link>
            </Button>
        </div>


ContainedButtons.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContainedButtons);

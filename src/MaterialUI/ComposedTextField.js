import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    formControl: {
        margin: theme.spacing.unit
    },
    button: {
        margin: theme.spacing.unit,
    }
});

class ComposedTextField extends React.Component {
    state = {
        email: '',
        password: ''
    };

    handleChange = event => {
        this.setState({
            name: event.target.value,
            password: event.target.value
        });
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.container}>
                    <FormControl className={classes.formControl}>
                        <Input id="email" placeholder="email" value={this.state.email} onChange={this.handleChange} />
                        <Input id="password" placeholder="password" value={this.state.password} onChange={this.handleChange} />
                        <FormHelperText id="password-helper-text">Must be at least 6 characters</FormHelperText>
                        <Button variant="contained" size="large" color="primary" className={classes.button}>
                            Submit
                        </Button>
                    </FormControl>
                
            </div>
        );
    }
}

ComposedTextField.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ComposedTextField);


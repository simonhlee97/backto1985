import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

const aboutBtn = {
    color: '#DDDDDD'
}
function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const styles = theme => ({
    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
    },
});

class SimpleModal extends React.Component {
    state = {
        open: false,
    };

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { classes } = this.props;

        return (
            <div>
                <Typography gutterBottom></Typography>

                <Button onClick={this.handleOpen}><span style={aboutBtn}>About this project</span></Button>
                
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.open}
                    onClose={this.handleClose}
                >
                    <div style={getModalStyle()} className={classes.paper}>
                        <Typography variant="title" id="modal-title">
                            <h5>Here's what I used to build this project:</h5>
                        </Typography>
                        
                        <Typography variant="subheading" id="simple-modal-description">
                            
                            <p><a href="https://github.com/facebook/create-react-app">create-react-app (v. 16.4.0)</a></p>
                            <p><a href="https://reacttraining.com/react-router/web/guides/philosophy">react-router-dom (v. 4.3.1)</a></p>
                            <p><a href="https://material-ui.com">material-UI</a></p>
                            <p><a href="https://learncssgrid.com/">CSS Grid</a></p>
                            <p><a href="https://fontawesome.com/">Font-Awesome Icons</a></p>
                            <p><a href="https://fonts.google.com/">Google-Fonts</a></p>
                            <p><a href="http://reactcommunity.org/react-transition-group/">React Transition Group (for animations)</a></p>
                        </Typography>

                    </div>
                </Modal>
            </div>
        );
    }
}

SimpleModal.propTypes = {
    classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Enchantment from '../images/enchantment.png';

const newsPad = {
    marginBottom: 100
}

const styles = {
    card: {
        maxWidth: 360,
    },
    media: {
        height: 129,
        paddingTop: 56
    },
};

function NewsCard2(props) {
    const { classes } = props;
    return (
        <div style={newsPad}>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.media}
                    image={Enchantment}
                    title="Enchantment Under the Sea Dance"
                />
                <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        School Dance
                    </Typography>
                    <Typography component="p">
                        Nov. 12, 1955
                        <br />Gymnasium
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}

NewsCard2.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewsCard2);

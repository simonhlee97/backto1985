import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../images/battle_of_bands.png';

const styles = {
    card: {
        maxWidth: 350,
    },
    media: {
        height: 9,
        paddingTop: 16, // 16:9
    },
};

function SimpleMediaCard(props) {
    const { classes } = props;
    return (
        <div>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.media}
                    image="../images/battle_of_bands.png"
                    title="Battle of the Bands"
                />
                <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        Battle of the Bands
                    </Typography>
                    <Typography component="p">
                        Next Friday, June 1
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

SimpleMediaCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleMediaCard);

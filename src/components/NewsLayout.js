import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import NewsCard from './NewsCard';
import NewsCard2 from './NewsCard2';

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

function NewsLayout(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <Grid container spacing={24}>
                <Grid item xs={3}>
                    <NewsCard />
                </Grid>
                <Grid item xs={3}>
                    <NewsCard2 />
                </Grid>
                <Grid item xs={3}>
                    <NewsCard />
                </Grid>
                <Grid item xs={3}>
                    <NewsCard2 />
                </Grid>
            </Grid>

            <Grid container spacing={24}>
                <Grid item xs={3}>
                    <NewsCard2 />
                </Grid>
                <Grid item xs={3}>
                    <NewsCard />
                </Grid>
                <Grid item xs={3}>
                    <NewsCard2 />
                </Grid>
                <Grid item xs={3}>
                    <NewsCard />
                </Grid>
            </Grid>
        </div>
    );
    
}

NewsLayout.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewsLayout);







// return (
//     <div className={classes.root}>
//         <Grid container spacing={24}>
//             <Grid item xs={12}>
//                 <NewsCard /><NewsCard /><NewsCard />
//             </Grid>

//         </Grid>


//     </div>
// );

import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import {withVlow} from 'vlow';
import ToDoListStore from '../Stores/ToDoListStore';
//import ToDoListActions from '../Stores/ToDoListActions';


const styles = {
    paper: {
        maxWidth: '100%',
        padding: '20',
    },
};



function ItemContent(props) {

    const { classes, location, list } = props;
    const item = list.find(i => '/itemcontent/'+ i.name === location.pathname); // if else

    console.log(item);
    return (
        <Grid container >
            <Grid
                item
                xs={3}
            />
            <Grid item xs={6}>
                <Paper
                    className={classes.paper}
                    elevation={3}
                >
                    <Typography
                        variant="headline"
                        color="primary"
                        align="center"
                        nowrap="true"
                    >
                        {'Content'}
                    </Typography>
                    <Typography
                        variant="headline"
                        color="primary"
                        align="center"
                        nowrap="true"
                    >
                        {item.name}
                    </Typography>
                    <Link to='/'>
                        {'Home'}
                    </Link>
                </Paper>
            </Grid>
            <Grid
                item
                xs={3}
            />
        </Grid>
    );

}

ItemContent.propTypes = {
    classes: PropTypes.objectOf(PropTypes.any).isRequired,
    list: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
    })).isRequired,
    location: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default withStyles(styles)(withVlow(ToDoListStore, ItemContent));
import React from 'react';
import PropTypes from 'prop-types';
import ToDoList from './ToDoList';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {withVlow} from 'vlow';
import ToDoListStore from '../Stores/ToDoListStore';
import ToDoListActions from '../Stores/ToDoListActions';


const styles = {
    paper: {
        maxWidth: '100%',
        padding: '20',
    },
};


class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };
    }

    handleChangeTextField = (event) => {
        this.setState({value: event.target.value});
    }

    handleSubmitTextField = (event) => {
        const {value} = this.state;
        if (value.trim().length) {
            ToDoListActions.add(value);
        }
        event.preventDefault();
    }

    handleKeyPressTextField = (event) => {
        if (event.key === 'Enter') {
            this.handleSubmitTextField(event);
        }
    }

    render() {
        const {classes, list} = this.props;
        const {value} = this.state;

        return (
            <Grid container >
                <Grid item xs={3} />
                <Grid
                    item
                    xs={6}
                >
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
                            {'My to-do list:'}
                        </Typography>

                        <TextField
                            id="submit"
                            label="Enter your to-do item: "
                            type="text"
                            margin="dense"
                            onChange={this.handleChangeTextField}
                            onKeyPress={this.handleKeyPressTextField}
                            value={value}
                        />
                        <ToDoList list={list} />
                    </Paper>
                </Grid>
                <Grid
                    item
                    xs={3}
                />
            </Grid>
        );
    }
}

Home.propTypes = {
    /* Styles properties */
    classes: PropTypes.objectOf(PropTypes.any).isRequired,

    /* ToDoListStore properties */
    list: PropTypes.arrayOf(PropTypes.string).isRequired,
};



// const withStyles = (styles) => (WrappedCompenent) => {
//     const components = class MyComponent extends React.Component {
//         render() {
//             return (
//                 <WrappedCompenent {...this.props} classes={styles}>
//                     {...this.props.children}
//                 </WrappedCompenent>
//             );
//         }
//     }
//     return components;
// }

export default withStyles(styles)(withVlow(ToDoListStore, Home));
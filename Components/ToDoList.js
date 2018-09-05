import React from 'react';
import CheckListItem from './CheckListItem';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';


const ToDoList = ({list}) => (
    <React.Fragment>
        <Typography
            variant="title"
            color="inherit"
            align="left"
            nowrap="true"
        >
            {list.length ? 'To-do list: ' : 'No to-do list yet'}
        </Typography>
        <List>
            {list.map((item) => (
                <CheckListItem
                    key={item.toString()} // make id
                    item={item}
                />
            ))}
        </List>
    </React.Fragment>
);

ToDoList.propTypes  = {
    list: PropTypes.arrayOf(PropTypes.string).isRequired, // forbidden??
};

export default ToDoList;


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
                    key={item.id}
                    id={item.id} // make id
                    name={item.name}
                />
            ))}
        </List>
    </React.Fragment>
);

ToDoList.propTypes  = {
    list: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
    })).isRequired,
};

export default ToDoList;


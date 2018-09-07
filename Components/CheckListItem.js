import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import CheckBox from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlank from '@material-ui/icons/CheckBoxOutlineBlank';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import { Link } from 'react-router-dom';
import ToDoListActions from '../Stores/ToDoListActions';


class CheckListItem extends React.Component {

    state = {
        value: false,
    };

    handleClick = (event) => {
        if (event.target.name === 'Remove') {
            const {id} = this.props;
            ToDoListActions.remove(id);
        } else {
            var {value} = this.state;
            this.setState({value: !value});
        }
    }

    render() {
        var {name, id} = this.props;
        var {value} = this.state;

        return  (
            <ListItem
                key={id}
                role={undefined}
                dense
            >
                <Button
                    variant="flat"
                    color="primary"
                    name={name}
                    type="submit"
                    onClick={this.handleClick}
                >
                    {value  ? <CheckBox /> : <CheckBoxOutlineBlank />}
                </Button>
                <ListItemText primary={name} />
                <ListItemSecondaryAction>

                    <Link
                        to={`/itemcontent/${name}`}
                    >
                        {'Item'}
                    </Link>

                    <Button
                        variant="flat"
                        color="primary"
                        name="Remove"
                        type="submit"
                        onClick={this.handleClick}
                    >
                        <DeleteRoundedIcon />
                    </Button>
                </ListItemSecondaryAction>
            </ListItem>
        );
    }
}

CheckListItem.propTypes  = {
    name: PropTypes.string.isRequired, // forbidden??
    id: PropTypes.number.isRequired,
};

export default CheckListItem;


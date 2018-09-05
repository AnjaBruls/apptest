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


class CheckListItem extends React.Component {

    state = {
        value: false,
        active: true
    };

    handleClick = (event) => {
        if (event.target.name === 'Remove') {
            var {active} = this.state;
            this.setState({active: !active});
        } else {
            var {value} = this.state;
            this.setState({value: !value});
        }
    }

    render() {
        var {item} = this.props;
        var {active, value} = this.state;
        //window.console.warn(item);
        return !active ? null : (
            <ListItem
                key={item.key}
                role={undefined}
                dense
            >
                <Button
                    variant="flat"
                    color="primary"
                    name={item}
                    type="submit"
                    onClick={this.handleClick}
                >
                    {value  ? <CheckBox /> : <CheckBoxOutlineBlank />}
                </Button>
                <ListItemText primary={item} />
                <ListItemSecondaryAction>

                    <Link
                        to={`/itemcontent/${item}`}
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
    item: PropTypes.string.isRequired, // forbidden??
};

export default CheckListItem;


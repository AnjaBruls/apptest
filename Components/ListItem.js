import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({item}) => (
    <li>
        {item}
    </li>
);

ListItem.propTypes  = {
    item: PropTypes.string.isRequired,
};

export default ListItem;
import React from 'react';
import CheckListItem from './CheckListItem';
import PropTypes from 'prop-types';

function ToDoList(props) {
    var {list} = props;

    if (list.length) { // een andere gebruiken..
        var listItems = list.map((item) => (
            <CheckListItem
                key={item.toString()} // make id
                item={item}
            />
        )
        );

        return (
            <React.Fragment>
                <h2>
                    {'Your to-do list: '}
                </h2>
                <ul>
                    {listItems}
                </ul>
            </React.Fragment>
        );

    } else {
        return (
            <h2>
                {'No to-do list yet'}
            </h2>
        );
    }

}

ToDoList.propTypes  = {
    list: PropTypes.arrayOf(PropTypes.string).isRequired, // forbidden??
};

export default ToDoList;


// import React from 'react';
// import CheckListItem from './CheckListItem';
// import PropTypes from 'prop-types';

// function ToDoList(props) {
//     var {list} = props;
//     var listItems = list.map((item) => (
//         <CheckListItem
//             key={item.toString()} // make id
//             item={item}
//         />
//     )
//     );
//     return (
//         <React.Fragment>
//             <h2>
//                 {'Your to-do list: '}
//             </h2>
//             <ul>
//                 {listItems}
//             </ul>
//         </React.Fragment>
//     );
// }

// ToDoList.propTypes  = {
//     list: PropTypes.arrayOf(PropTypes.string).isRequired, // forbidden??
// };

// export default ToDoList;
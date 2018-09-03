import React from 'react';
import PropTypes from 'prop-types';

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
        var {active} = this.state;
        var {item} = this.props;
        //window.console.warn(item);
        if (active) {
            var {value} = this.state;

            return (
                <React.Fragment>
                    <li>
                        <button
                            name={item}
                            type="submit"
                            onClick={this.handleClick}
                        >
                            {value  ? 'X' : 'O'}
                        </button>
                        {item}
                        <button
                            name="Remove"
                            type="submit"
                            onClick={this.handleClick}
                        >
                            {'Remove'}
                        </button>
                    </li>
                </React.Fragment>
            );
        } else {
            return null;
        }
    }
}

CheckListItem.propTypes  = {
    item: PropTypes.string.isRequired, // forbidden??
};

export default CheckListItem;

// import React from 'react';

// class CheckListItem extends React.Component {

//     state = {
//         check: false
//     };


//     handleChange = (event) => {
//         this.setState({check: !event.target.check});
//     }

//     render() {
//         const {item} = this.props;
//         const {check} = this.state;
//         window.console.warn(check);
//         return (
//             <React.Fragment>
//                 <li>
//                     <input
//                         name="Done"
//                         type="checkbox"
//                         value={check}
//                         onChange={this.handleChange}
//                     />
//                     {item}

//                 </li>
//             </React.Fragment>
//         );
//     }
// }

// export default CheckListItem;

// handleChange = (event) => {
//     const target = event.target;
//     const value = target.type === 'checkbox' ? target.checked : target.value;
//     const name = target.name;

//     this.setState({
//         [name]: value
//     });
// }


// <input
//                             name={item}
//                             type="checkbox"
//                             // checked={value}
//                             onChange={this.handleChange}
//                         />
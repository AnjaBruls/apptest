import React from 'react';
import ToDoList from './ToDoList';



class App extends React.Component {

    state = {
        value: '',
        list: []
    };


    handleChange = (event) => {
        this.setState({value: event.target.value});
    }

    handleSubmit = (event) => {
        const {value} = this.state;
        if (value.trim().length) {
            this.setState(prevState => ({
                list: [...prevState.list, value] // use of push?
            }));
        }
        event.preventDefault();
    }

    mapRef = (el) => this.el = el; // ???

    render() {
        const {value} = this.state; // const or let ???
        const {list} = this.state;
        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    <label ref={this.mapRef}>
                        {'Submit your to-do item here: '}
                    </label>
                    <input
                        type="text"
                        onChange={this.handleChange}
                        value={value}
                    />
                </form>
                <ToDoList list={list} />
            </React.Fragment>
        );
    }
}

export default App;
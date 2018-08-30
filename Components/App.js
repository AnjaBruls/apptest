import React from 'react';
import Title from './Title';

class App extends React.Component {

    state = {
        title: 'Hello world!'
    };

    componentDidMount() {
        console.log(this.el);
    }

    handleChangeTitle = (event) => {
        this.setState({title: event.target.value});
    }

    mapRef = (el) => this.el = el;

    render() {
        const {title} = this.state;

        return (
            <React.Fragment>
                <Title title={title} />
                <label ref={this.mapRef}>
                    {'Change Title'}
                </label>
                <input
                    type="text"
                    onChange={this.handleChangeTitle}
                    value={title}
                />
            </React.Fragment>
        );
    }
}

export default App;
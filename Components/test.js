function ListItem(props) {
    // Correct! There is no need to specify the key here:
    return <li>{props.value}</li>;
  }

  function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
      // Correct! Key should be specified inside the array.
      <ListItem key={number.toString()}
                value={number} />

    );
    return (
      <ul>
        {listItems}
      </ul>
    );
  }

  const numbers = [1, 2, 3, 4, 5];
  ReactDOM.render(
    <NumberList numbers={numbers} />,
    document.getElementById('root')
  );

function Blog(props) {
    const sidebar = (
      <ul>
        {props.posts.map((post) =>
          <li key={post.id}>
            {post.title}
          </li>
        )}
      </ul>
    );
    const content = props.posts.map((post) =>
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </div>
    );
    return (
      <div>
        {sidebar}
        <hr />
        {content}
      </div>
    );
  }

  const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
  ];
  ReactDOM.render(
    <Blog posts={posts} />,
    document.getElementById('root')
  );


  class EssayForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: 'Please write an essay about your favorite DOM element.'
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }

    handleSubmit(event) {
      alert('An essay was submitted: ' + this.state.value);
      event.preventDefault();
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Essay:
            <textarea value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }







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
                    {'Change Title: '}
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


import PropTypes from 'prop-types';
import React from 'react';
import Title from './Title';

class App extends React.Component {

    static propTypes  = {
        title: PropTypes.string.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            title: 'Hello world!'
        };
    }

    handleChangeTitle = (event) => {
        this.setState({title: event.target.value});
    }

    render() {
        const {title} = this.state;

        return (
            <div>
                <Title title={title} />
                <label>
                    {'Change Title'}
                </label>
                <input
                    onChange={this.handleChangeTitle}
                    type="text"
                    value={title}
                />
            </div>
        );
    }
}

export default App;


import React from 'react';
import Title from './Title';
import ToDoListItem from './ListItem';

class App extends React.Component {

    state = {
        title: 'Hello world!'
    };

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
                    {'Change Title: '}
                </label>
                <input
                    type="text"
                    onChange={this.handleChangeTitle}
                    value={title}
                />
                <ToDoListItem todolistitem={this.mapRef} />
            </React.Fragment>
        );
    }
}

export default App;





import React from 'react';
import Title from './Title';

class App extends React.Component {

    state = {
        title: 'Hello world!'
    };

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
                    {'Change Title: '}
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
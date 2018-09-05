import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import {HashRouter as Router, Route} from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';


const theme = createMuiTheme({
    palette: {
        type: 'dark',
    }
});

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
            <Route
                component={App}
                path="/"
            />
        </Router>
    </MuiThemeProvider>,
    document.getElementById('app')
);



// ReactDOM.render(
//     React.createElement('h1', [], ['Hello, world!!!!!', React.createElement('b', [], ['bla'])]),
//     document.getElementById('app')
// );
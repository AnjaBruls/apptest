import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './Home';
import ItemContent from './ItemContent';




const App = () => (

    <Switch>
        <Route
            component={Home}
            exact
            path="/"
        />
        <Route
            component={ItemContent}
            path="/itemcontent/"
        />
    </Switch>
);


export default App;
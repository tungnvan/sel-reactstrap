import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import {APP_ROUTES} from "./app-routes";
import uuidv4 from 'uuid/v4';

class App extends Component {
    render() {
        return (
            <Switch>{
                APP_ROUTES.map(route => (
                    <Route key={uuidv4()} exact={route.exact} path={route.path} render={(props) => (
                        <route.component {...props} />
                    )} />
                ))
            }</Switch>
        );
    }
}

export default App;

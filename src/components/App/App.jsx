import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Counter from '../Counter/Counter';
import NavigationMenu from '../NavigationMenu/NavigationMenu';
import 'reset-css';

function App() {
    return (
        <div>
            <NavigationMenu />
            <Switch>
                <Route exact path="/" component={Counter} />
                <Route path="/page2" render={() => <p>Hello! Page 2</p>} />
                <Route path="/page3" render={() => <p>Page 3</p>} />
            </Switch>
        </div>
    );
}

export default App;

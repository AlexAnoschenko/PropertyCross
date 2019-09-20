import React from 'react';
import { Route, Switch } from 'react-router-dom';
import 'reset-css';
import SearchPage from '../SearchPage/SearchPage';

function App() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={SearchPage} />
            </Switch>
        </div>
    );
}

export default App;

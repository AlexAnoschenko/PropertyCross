import React from 'react';
import { Route, Switch } from 'react-router-dom';
import 'reset-css';
import SearchPage from '../SearchPage/SearchPage';
import ApartmentsPage from '../ApartmentsPage/ApartmentsPage';

function App() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={SearchPage} />
                <Route exact path="/results/:city" component={ApartmentsPage} />
            </Switch>
        </div>
    );
}

export default App;

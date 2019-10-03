import React from 'react';
import { Route, Switch } from 'react-router-dom';
import 'reset-css';
import SearchPage from '../SearchPage/SearchPage';
import ApartmentsPage from '../ApartmentsPage/ApartmentsPage';
import CurrentApartment from '../ApartmentsPage/CurrentApartment/CurrentApartment';
import FavoriteApartments from '../FavoriteApartments/FavoriteApartments';

function App() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={SearchPage} />
                <Route exact path="/favorites" component={FavoriteApartments} />
                <Route exact path="/results/:city" component={ApartmentsPage} />
                <Route exact path="/results/:city/:id" component={CurrentApartment} />
            </Switch>
        </div>
    );
}

export default App;

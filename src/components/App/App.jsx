import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Counter from '../Counter/Counter';
import NavBar from '../NavBar/NavBar';
import styles from './App.css'; /* Убрать после подключения reset.css */

function App() {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route exact path="/" render={() => <Counter />} />
                <Route exact path="/page2" render={() => <p>Page 2</p>} />
                <Route exact path="/page3" render={() => <p>Page 3</p>} />
            </Switch>
        </div>
    );
}

export default App;

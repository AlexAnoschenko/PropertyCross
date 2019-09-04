import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Counter from '../Counter/Counter';
import Navigator from '../Navigator/Navigator';

function App() {
    return (
        <div>
            <Navigator />
            <Switch>
                <Route exact path="/" component={Counter} />
                <Route path="/page2" render={() => <p>Hello! Page 2</p>} />
                <Route path="/page3" render={() => <p>Page 3</p>} />
            </Switch>
        </div>
    );
}

export default App;

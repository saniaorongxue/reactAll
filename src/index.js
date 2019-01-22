import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import loginReducer from './reducers/login/index';
import './index.css';
import App from './components/App/App';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';
import Main from './view/Main'

let reduers = combineReducers({
    loginReducer
})

let store = createStore(reduers);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route exact path="/main" component={Main}/>
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);


import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import loginReducer from './reducers/login/index';
import './index.css';
import App from './components/App/App';


let reduers = combineReducers({
    loginReducer
})

let store = createStore(reduers);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);


import React from 'react';
import { render } from 'react-dom';
import Home from '../pages/containers/home';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../reducers/index';
import { Map as map } from 'immutable';
import logger from 'redux-logger';

const store = createStore(
    reducer,
    map(),
    applyMiddleware(logger)
);

const homeContainer = document.getElementById('home-container');

render(
    <Provider store={store}>
        <Home/>
    </Provider>
    ,
    homeContainer
);

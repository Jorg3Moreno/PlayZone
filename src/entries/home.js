import React from 'react';
import { render } from 'react-dom';
import Home from '../pages/containers/home';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../reducers/index';
import { Map as map } from 'immutable';

// function logger({ getState, dispatch}) {
//     return (nextMiddleware) => {
//         return (action) => {
//             console.log('old state: ', getState().toJS());
//             console.log('sending this action: ', action);
//             const value = nextMiddleware(action);
//             console.log('new state:', getState().toJS());
//             return value;
//         }
//     }
// }
const logger = ({ getState, dispatch}) => nextMiddleware => action => {
    console.log('old state: ', getState().toJS());
    console.log('sending this action: ', action);
    const value = nextMiddleware(action);
    console.log('new state:', getState().toJS());
    return value;
};

const store = createStore(
    reducer,
    map(),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
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

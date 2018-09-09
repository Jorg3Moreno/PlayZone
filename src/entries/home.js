import React from 'react';
import { render } from 'react-dom';
import Home from '../pages/containers/home';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../reducers/index';
import { Map as map } from 'immutable';

// const initialState = {
//     data: {
//         entities: normalizedData.entities,
//         categories: normalizedData.result.categories,
//         search: []
//     },
//     modal: {
//         visibility: false,
//         mediaId: null
//     }
// };

const store = createStore(
    reducer,
    map(),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const homeContainer = document.getElementById('home-container');

// ReactDOM.render(what?, where?)
// render(
//     <Media
//         title="What is Responsive Design?"
//         author="Jorge Moreno"
//         image="./images/covers/responsive.jpg"
//         type="video"/>,
//     app
// );

render(
    <Provider store={store}>
        <Home/>
    </Provider>
    ,
    homeContainer
);

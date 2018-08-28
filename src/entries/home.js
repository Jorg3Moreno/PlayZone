import React from 'react';
import {render} from 'react-dom';
import Home from '../pages/containers/home';
import data from '../api.json';

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

render(<Home {...data} />, homeContainer);

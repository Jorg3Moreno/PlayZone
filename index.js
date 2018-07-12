import React from 'react';
import {render} from 'react-dom';
import Media from './src/playlist/components/media';

const app = document.getElementById('app');

// ReactDOM.render(what?, where?)
render(
    <Media
        title="What is Responsive Design?"
        author="Jorge Moreno"
        image="./images/covers/responsive.jpg"
        type="video"/>,
    app
);
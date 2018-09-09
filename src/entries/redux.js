// redux using Vanilla JS

import { createStore } from 'redux';

const $form = document.getElementById('form');
$form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData($form);
    const title = data.get('title');
    console.log(title);
}

const initialState = [
    {
        "title": "Back in Black"
    },
    {
        "title": "ThunderStruck"
    },
    {
        "title": "The Wall"
    }
];

const store = createStore(
    //reducer
    (state) => state,
    //initialState
    initialState,
    //enhancer
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const $container = document.getElementById('playlist');
const playlist = store.getState();
playlist.forEach((item) => {
    const template = document.createElement('p');
    template.textContent = item.title;
    $container.appendChild(template);
});

console.log(store.getState());

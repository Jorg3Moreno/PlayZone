// redux using Vanilla JS

import { createStore } from 'redux';

const $form = document.getElementById('form');
$form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData($form);
    const title = data.get('title');
    store.dispatch({
        type: 'ADD_SONG',
        payload: {
            title
        }
    })
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

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_SONG':
            return [...state, action.payload];
        default:
            return state;
    }
};

const store = createStore(
    //reducer
    reducer,
    //initialState
    initialState,
    //enhancer
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function render() {
    const $container = document.getElementById('playlist');
    const playlist = store.getState();
    $container.innerHTML = '';
    playlist.forEach((item) => {
        const template = document.createElement('p');
        template.textContent = item.title;
        $container.appendChild(template);
    });
}

render();

function handleChange() {
    render();
}

store.subscribe(handleChange);

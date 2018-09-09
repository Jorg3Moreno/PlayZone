import api from '../api.json';
import { normalize, schema } from 'normalizr';

// Define a media schema
const media = new schema.Entity('media', {}, {
    idAttribute: 'id',
    processStrategy: (value, parent, key) => ({...value, category: parent.id})
});

// Define your categories schema
const category = new schema.Entity('categories', {
    playlist: new schema.Array(media)
});

const categories = { categories: new schema.Array(category)};

const normalizedDada = normalize(api, categories);

export default normalizedDada;

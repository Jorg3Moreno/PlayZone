import normalizedData from "../schemas";
import { fromJS } from 'immutable';

const initialState = fromJS({
    entities: normalizedData.entities,
    categories: normalizedData.result.categories,
    search: ''
});

function data(state = initialState, action) {
    switch (action.type) {
        case 'SEARCH_VIDEO': {
            return state.set('search', action.payload.query)
        }
        default:
            return state
    }
}

export default data;

import data from './data';
import modal from './modal';
import loading from './loading';
import { combineReducers } from 'redux-immutable';

const rootReducer = combineReducers({
    data: data,
    modal: modal,
    loading: loading
});

export default rootReducer;

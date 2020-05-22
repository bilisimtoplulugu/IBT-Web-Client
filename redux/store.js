import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import {eventReducer} from './reducers';

const reducers = combineReducers({
    eventReducer
});

export const store = createStore(reducers, applyMiddleware(thunk));
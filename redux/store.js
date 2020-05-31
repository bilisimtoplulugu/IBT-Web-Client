import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import userReducer from './reducers/userReducer';
import eventReducer from './reducers/eventReducer';

const reducers = combineReducers({
  userReducer,
  eventReducer,
});

export const store = createStore(reducers, applyMiddleware(thunk));

import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import {eventReducer} from './reducers';
import {userReducer} from './reducers/userReducer';

const reducers = combineReducers({
  eventReducer,
  userReducer,
});

export const store = createStore(reducers, applyMiddleware(thunk));

import { combineReducers, createStore } from 'redux';

import { authReducer } from '../reducers';

const store = createStore(combineReducers({authReducer}));

export default store;
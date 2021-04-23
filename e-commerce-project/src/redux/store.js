import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];
//add middleware to our store so whenever actions get dispatched we can catch them and display them 
// action -> middleware -> root reducer 
const store = createStore(rootReducer, applyMiddleware(...middlewares));


export default store;
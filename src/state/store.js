import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducer';

const middleware = [thunk, logger];

export default createStore(rootReducer, applyMiddleware(...middleware));

import { createStore, combineReducers, applyMiddleware } from 'redux';
import timerReducer from './Reducers/timerReducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

export default createStore(
    combineReducers({
        timerReducer
    }),
    {},
    applyMiddleware(
        logger,
        thunk,
        promise()
    )
);


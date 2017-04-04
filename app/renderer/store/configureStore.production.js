// @flow
import { createStore, applyMiddleware, compose } from 'redux';
import { hashHistory } from 'react-router';
import { routerMiddleware, push } from 'react-router-redux';
import rootReducer from '../reducers';

const router = routerMiddleware(hashHistory);

export default function configureStore(initialState: {}) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(router)
    )
}
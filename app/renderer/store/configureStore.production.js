
import { applyMiddleware, createStore } from 'redux';
import { hashHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';

const router = routerMiddleware(hashHistory);

export default function configureStore(initialState) {
  return createStore(
        rootReducer,
        initialState,
        applyMiddleware(router)
    );
}

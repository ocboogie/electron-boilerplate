import { applyMiddleware, compose, createStore } from 'redux';
import { hashHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';

const logger = createLogger({
  level: 'info',
  collapsed: true
});

const router = routerMiddleware(hashHistory);
const middleware = applyMiddleware(router, logger);

export default function configureStore(initialState) {
  if (window.__REDUX_DEVTOOLS_EXTENSION__) { // eslint-disable-line
    return createStore(
            rootReducer,
            initialState,
            compose(middleware,
                window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // eslint-disable-line
            )
        );
  }

  return createStore(
        rootReducer,
        initialState,
        middleware
    );
}

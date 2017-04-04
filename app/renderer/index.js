// @flow
import 'bootstrap-sass';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { hashHistory, Router, Route } from 'react-router';
import { syncHistoryWithStore, push } from 'react-router-redux';
import { Provider } from 'react-redux'
import { remote } from 'electron';

import './style/index.scss';
import Root from './containers/Root';
import routes from './routes';
import configureStore from './store';

const store = configureStore({});
const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
    (
        <Root store={store} history={history} />
    ),
    document.getElementById('root')
)

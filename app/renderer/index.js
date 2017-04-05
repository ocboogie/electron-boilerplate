// @flow
import 'bootstrap-sass';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import './style/index.scss';
import Root from './containers/Root';
import configureStore from './store';

const store = configureStore({});
const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(

  <Root store={store} history={history} />
    ,
    document.getElementById('root')
);

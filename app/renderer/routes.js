// @flow
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Home from './pages/Home';
import Foo from './pages/Foo';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="foo" component={Foo} />
    </Route>
)
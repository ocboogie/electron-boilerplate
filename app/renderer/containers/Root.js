// @flow
import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import * as Redux from 'redux';
import routes from '../routes';

export default class Root extends React.Component {
  props: {
    store: Redux.Store<any, any>,
    history: any
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <Router history={this.props.history} routes={routes} />
      </Provider>
    );
  }
}

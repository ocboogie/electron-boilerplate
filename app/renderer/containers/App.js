// @flow
import * as React from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';

import Nav from '../components/Nav';


class App extends React.Component {


  constructor(props) {
    super(props);
    this.clickHome = this.clickHome.bind(this); // eslint-disable-line flowtype-errors
    this.clickFoo = this.clickFoo.bind(this); // eslint-disable-line flowtype-errors
  }

  props: {
    children: React.Children,
    push: Function
  }

  clickHome() {
    this.props.push('/');
  }
  clickFoo() {
    this.props.push('/foo');
  }

  render() {
    return (
      <div>
        <Nav />
        {this.props.children}
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    push: (path) => {
      dispatch(push(path));
    }
  };
}

export default connect(null, mapDispatchToProps)(App); // eslint-disable-line

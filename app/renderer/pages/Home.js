import * as React from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';

export default class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h1>this is Home</h1>
            // <button onClick={this.handleClick}>Test</button>
        )
    }
}
import * as React from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';

export default class Foo extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <h1>this is Foo</h1>
            // <button onClick={this.handleClick} className="btn btn-default">test</button>
        )
    }
}
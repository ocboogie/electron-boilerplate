import * as React from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.push("/");
    }

    render() {
        return (
            <h1>this is Foo</h1>
            // <button onClick={this.handleClick} className="btn btn-default">test</button>
        )
    }
}


function mapDispatchToProps(dispatch) {
    return {
        push: (path: string) => {
            dispatch(push(path));
        }
    }
}

export default connect(null, mapDispatchToProps)(Main);
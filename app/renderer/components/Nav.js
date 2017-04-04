import * as React from 'react';
import { Link } from 'react-router';

export default class Nav extends React.Component {

    constructor(props) {
        super(props);
        this.clickHome = this.clickHome.bind(this);
        this.clickFoo = this.clickFoo.bind(this);
    }

    clickHome() {
        this.props.push("/");
    }
    clickFoo() {
        this.props.push("/foo");
    }

    render() {
        return (
            
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <div className="navbar-brand">
                            <Link to="/">Home</Link>
                        </div>
                        <Link to="/foo">Foo</Link>
                    </div>
                </div>
            </nav>
        )
    }
}
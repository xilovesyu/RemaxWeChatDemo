import * as React from 'react';
import './app.css';

export default class App extends React.Component<any, any> {
    render() {
        return this.props.children;
    }
}

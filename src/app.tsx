import * as React from 'react';
import './app.css';
import {Provider} from "mobx-react";
import {todoStore} from "@/stores/TodoStore";

export default class App extends React.Component<any, any> {
    render() {
        return (
            <Provider todoStore={todoStore}>
                {this.props.children}
            </Provider>
        )
    }
}

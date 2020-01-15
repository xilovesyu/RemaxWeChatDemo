import * as React from 'react';
import './app.css';
import {Provider, useLocalStore} from "mobx-react";
import {todoStore} from "@/stores/TodoStore";

/*
export default class App extends React.Component<any, any> {
    render() {
        return (
            <Provider todoStore={todoStore}>
                {this.props.children}
            </Provider>
        )
    }
}
*/

export const StoreContext = React.createContext({})

export const useStore = () => {
    return React.useContext(StoreContext)
}
export default ({children}: any) => {
    const todoStore = useLocalStore(() => ({
        todos: [] as any,
        addTodo(text: string, checked: boolean) {
            this.todos.push({
                text: text,
                checked: checked
            })
        }
    }))

    return (
        <StoreContext.Provider value={{todoStore}}>
            {children}
        </StoreContext.Provider>
    )
}
import * as React from "react";
import {action, observable} from "mobx";

export interface Todo {
    text: string,
    checked: boolean
}

class TodoStore {
    @observable todos: Todo[] =[]

    @action
    addOneToDo(todo: Todo) {
        this.todos.push(todo)
    }
}

const todoStore = new TodoStore()
export {todoStore}

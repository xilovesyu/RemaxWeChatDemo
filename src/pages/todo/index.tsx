import * as React from 'react'
import {View, Text, Image, Input, Checkbox, Button} from 'remax/wechat'
import { useState } from 'react'
import {inject, observer} from "mobx-react";
import {Todo} from "@/stores/TodoStore";
import { StoreContext, useStore } from '@/app'

/*export default inject('todoStore')(observer(class Index extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state= {
            text: ''
        }
    }
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        console.log(this.props.todoStore)
        const {todos} = this.props.todoStore
        return (
            <View>
                <View>
                    {
                        todos.map((one: Todo, index: number) => {
                            return (
                                <Checkbox key={index} checked={one.checked}>{one.text}</Checkbox>
                            )
                        })
                    }
                </View>
            <View>
                <Input
                    className="add-todo-input"
                    placeholder="What needs to be done?"
                    onInput={e => this.setState({text: e.detail.value})}
                    value={this.state.text}
                />
                <Button onClick={(e: any) => {
                    this.props.todoStore.addOneToDo({
                        text: this.state.text,
                        checked: false
                    })
                }}>添加Todo</Button>
            </View>
        </View>
        )
    }
})
)*/
export default () => {
    const { todoStore } = useStore() as any
    const [inputValue, setInputValue] = React.useState('')
    return (
        <View>
            <View>
                {
                    todoStore.todos.map((one: Todo, index: number) => {
                        return (
                            <View><Checkbox key={index} checked={one.checked}>{one.text}</Checkbox></View>
                        )
                    })
                }
            </View>
            <View>
                <Input
                    className="add-todo-input"
                    placeholder="What needs to be done?"
                    onInput={e => setInputValue(e.detail.value)}
                    value={inputValue}
                />
                <Button onClick={(e: any) => {
                    todoStore.addTodo(inputValue,false)
                    setInputValue('')
                }}>添加Todo</Button>
            </View>
        </View>
    )
}
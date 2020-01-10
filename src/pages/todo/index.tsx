import * as React from 'react'
import { View, Text, Image, Input } from 'remax/wechat'
import { useState } from 'react'

export default () => {
    const [text, setText] = useState('')
    return (
        <View>
            <View>
                <View>
                    输入的是 <Text>{text}</Text>
                </View>
                <Input
                    className="add-todo-input"
                    placeholder="What needs to be done?"
                    onInput={e => setText(e.detail.value)}
                    value={text}
                />

            </View>
        </View>
    )
};

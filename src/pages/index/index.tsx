import * as React from 'react'
import { View, Text, Image, Input, Button, navigateTo } from 'remax/wechat'
import './index.css'
import { useState } from 'react'

export default () => {
    const [text, setText] = useState('')
    const [userInfo, setUserInfo] = useState({
        nickName: '',
        avatar: undefined
    })
    return (
        <View className={'app'}>
            <View>
                <View className="user">
                    <Button
                        className="login-button"
                        hoverClass="none"
                        openType="getUserInfo"
                        onGetUserInfo={(event: any) => {
                            const {userInfo} = event.detail
                            userInfo.avatar = userInfo.avatarUrl
                            setUserInfo(userInfo)
                        }}
                    >
                        <Image
                            className="avatar"
                            src={userInfo ? userInfo.avatar : userInfo}
                        />
                    </Button>
                    <View className="nickname">
                        {userInfo.nickName && `Hello ${userInfo.nickName}`}
                        {!userInfo.nickName && <Text className="login-tip">(点击上方空白登录)</Text>}
                    </View>
                </View>
            </View>

            <View className={'body'}>
                <View className={'text'}>
                    你输入的是 <Text className={'path'}>{text}</Text>
                </View>
                <Input
                    className="input"
                    placeholder="输入想说的话"
                    onInput={e => setText(e.detail.value)}
                    value={text}
                />
            </View>

            <Button
                className={'navigation-button'}
                onClick={() => {
                    navigateTo({url: '../todo/index'}).then()
                }}
            >
                跳转另一个页面
            </Button>
        </View>
    )
};

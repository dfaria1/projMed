import React from 'react'
import styled from 'styled-components/native'
import { AntDesign } from '@expo/vector-icons';

const InputArea = styled.View`
    width: 100%;
    height: 60px;
    background-color: #FE7979;
    flex-direction: row;
    border-radius: 30px;
    padding-left: 15px;
    align-items: center;
    margin-bottom: 15px;
`
const Input = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: #FFF;
    margin-left: 10px;
`

export default ({ icon, placeholder, value, onChangeText, password }) => {
    return (
        <InputArea>
            <AntDesign name={icon} size={40} color="#FFF" />
            <Input 
            placeholder={placeholder}
            placeholderTextColor="#FFF"
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={password}
            />
        </InputArea>
    )
}
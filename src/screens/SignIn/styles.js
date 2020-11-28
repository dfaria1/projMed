import React from 'react'
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
background-color: #F7F7F7;
flex: 1;
justify-content: center;
align-items: center;
`


export const InputArea = styled.View`
padding: 40px;
width: 100%;
`
export const Logo = styled.View`
transform: scale(0.5)
`

export const CustomButton = styled.TouchableOpacity`
height: 60px;
background-color: #FE4343;
border-radius: 30px;
justify-content: center;
align-items: center;
`
export const CustomButtonText = styled.Text`
font-size: 18px;
color: #FFF;

`
export const SignMessageButton = styled.TouchableOpacity`
flex-direction: row;
justify-content: center;
margin-top: 10px;
margin-bottom: 100px;
`
export const SignMessageButtonText = styled.Text`
font-size: 16px;
color: #FE7979;
`
export const SignMessageButtonTextBold = styled.Text`
font-size: 16px;
color: #FE7979;
font-weight: bold;
margin-left: 5px;
margin-bottom: 100px;
`
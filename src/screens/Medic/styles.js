// cSpell:Ignore scroller
import React from 'react'
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
background-color: #F7F7F7;
flex: 1;
`

export const Scroller = styled.ScrollView`
flex: 1;

`
export const FakeSwiper = styled.View`
height: 240px;
background-color: #FE7979;
`
export const PageBody = styled.View`
background-color: #F7F7F7;
border-top-left-radius: 50px;
margin-top: -50px;
`

export const ServiceArea = styled.View`
margin-top: 20px;
margin-left: 40px;
`

export const SwipeDot = styled.View`
width: 10px;
height: 10px;
border-radius: 5px;
background-color: #F7F7F7;
margin: 3px;
`
export const SwipeDotActive = styled.View`
width: 10px;
height: 10px;
border-radius: 5px;
background-color: #000;
margin: 3px;
`
export const SwipeItem = styled.View`
flex:1;
background-color: #FE7979;
`
export const SwipeImage = styled.Image`
width: 100%;
height: 240px;
`
export const UserInfoArea = styled.View`
flex-direction: row;
margin-top: -30px;
`

export const UserInfo = styled.View`
flex: 1;
justify-content: flex-end;
`

export const UserAvatar = styled.Image`
width: 110px;
height: 110px;
border-radius: 20px;
margin-left: 30px;
margin-right: 20px;
border-width: 4px;
border-color: #F7F7F7;
`

export const UserInfoName = styled.Text`
color: #000;
font-size: 18px;
font-weight: bold;
margin-bottom: 10px;
`

export const UserFavButton = styled.TouchableOpacity`
width: 40px;
height: 40px;
background-color: #F7F7F7;
border: 2px solid #999;
border-radius: 20px;
justify-content: center;
align-items: center;
margin-right: 20px;
margin-left: 20px;
margin-top: 20px;
`

export const BackButton = styled.TouchableOpacity`
position: absolute;
left: 5px;
top: 5px;
z-index: 2;
`

export const LoadingIcon = styled.ActivityIndicator`
margin-top: 50px;
`

export const ServiceItem = styled.View`
flex-direction: row;
margin-left: 30px;
margin-right: 30px;
margin-bottom: 20px;

`
export const ServiceInfo = styled.View`
flex: 1;

`
export const ServiceTitle = styled.Text`
font-size: 18px;
font-weight: bold;
color: #FE4343;
margin-left: 30px;
margin-bottom: 20px;
`

export const ServiceName = styled.Text`
font-size: 16px;
font-weight: bold;
color: #000;

`
export const ServicePrice = styled.Text`
font-size: 14px;
color: #FE4343;
`
export const  ServiceChooseButton = styled.TouchableOpacity`
background-color: #FE7979;
border-radius: 10px;
padding: 10px 15px;

`
export const  ServiceChooseBtnText = styled.Text`
font-size: 14px;
font-weight: bold;
color: #F7F7F7;
`

export const TestimonialArea = styled.View`
margin-top: 30px;
margin-bottom: 30px;
`

export const TestimonialItem= styled.View`
background-color: #FE4343;
padding: 15px;
border-radius: 10px;
height: 110px;
justify-content: center;
margin-left: 50px;
margin-right: 50px;
`
export const TestimonialInfo = styled.View`
flex-direction: row;
justify-content: space-between;
margin-bottom: 5px;
`
export const TestimonialName = styled.Text`
color: #000;
font-size: 16px;
font-weight: bold;
`
export const TestimonialBody = styled.Text`
color: #F7F7F7;
font-size: 13px;
`
export const SignMessageButton = styled.TouchableOpacity`
flex-direction: row;
justify-content: center;
margin-top: 50px;
margin-bottom: 20px;
`
export const SignMessageButtonText = styled.Text`
font-size: 16px;
color: #FE4343;
`
export const SignMessageButtonTextBold = styled.Text`
font-size: 16px;
color: #FE4343;
font-weight: bold;
margin-left: -50px;
margin-top: 150px;

`
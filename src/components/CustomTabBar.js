import React, { useContext } from 'react'
import styled from 'styled-components/native'
import { AntDesign } from '@expo/vector-icons';

import { UserContext } from '../contexts/UserContext'

const AvatarIcon = styled.Image`
    width: 24px;
    height: 24px;
    border-radius: 12px;
`

const TabArea = styled.View`
    height: 60px;
    background-color: #FE7979;
    flex-direction: row;
`
const TabItem = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
`

const TabItemCenter = styled.TouchableOpacity`
    width: 70px;
    height: 70px;
    justify-content: center;
    align-items: center;
    background-color: #F7F7F7;
    border-radius: 35px;
    border: 3px solid #FE7979;
    margin-top: -25px;
`

export default ({ state, navigation }) => {
    const { state: user } = useContext(UserContext)
    const goTo = (screenName) => {
        navigation.navigate(screenName)
    }

    return (
        <TabArea>
            <TabItem onPress={() => goTo('AddMedic')} >
                <AntDesign style={{ opacity: state.index === 0 ? 1 : 0.5 }} name="adduser" size={24} color="#FFF" />
            </TabItem>
            <TabItemCenter onPress={() => goTo('Home')}>
                <AntDesign name="home" size={32} color="#FE4343" />
            </TabItemCenter>
            <TabItem onPress={() => goTo('Profile')}>
                {user.avatar
                    ? <AvatarIcon source={{ uri: user.avatar }} />
                    : <AntDesign style={{ opacity: state.index === 4 ? 1 : 0.5 }} name="user" size={24} color="#FFF" />
                }
            </TabItem>
        </TabArea>
    )
}

/*ICONES REMOVIDOS DA CUSTOMTABBAR

2º da ordem (1 antes do central)

            <TabItem onPress={() => goTo('Search')}>
                <AntDesign style={{ opacity: state.index === 1 ? 1 : 0.5 }} name="search1" size={24} color="#FFF" />
            </TabItem>


4º da ordem (1 após o central)

            <TabItem onPress={() => goTo('Favorites')}>
                <AntDesign style={{ opacity: state.index === 3 ? 1 : 0.5 }} name="heart" size={24} color="#FFF" />
            </TabItem>
*/